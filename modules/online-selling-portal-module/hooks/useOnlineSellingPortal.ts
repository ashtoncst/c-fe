import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  clearCart,
  convertCardToSales,
  getOnlineSellingPortal,
  removeOnlineSellingPortal,
} from "../services/OnlineSellingPortal.service";
import { localStorageUtil } from "@/libs/storage";
import toast from "react-hot-toast";

interface IRemoveOnlineSellingPortalCard {
  message?: string;
  errorMessage?: string;
}
interface IConvertCardToSalesCard {
  message?: string;
  errorMessage?: string;
}
interface IClearCartCard {
  message?: string;
  errorMessage?: string;
}
export const useOnlineSellingPortal = (sessionId: string) => {
  return useQuery({
    queryKey: ["online-selling-portal", sessionId],
    queryFn: () => getOnlineSellingPortal(sessionId),
  });
};

export const useRemoveOnlineSellingPortal = (
  props: IRemoveOnlineSellingPortalCard
) => {
  const queryClient = useQueryClient();
  const sessionId = localStorageUtil.getSessionId();
  const { message = "Remove from cart success", errorMessage } = props;
  return useMutation({
    mutationFn: ({
      sessionId,
      itemId,
    }: {
      sessionId: string;
      itemId: string;
    }) => removeOnlineSellingPortal(sessionId, itemId),
    onSuccess: (data) => {
      toast.success(message);
      queryClient.invalidateQueries({
        queryKey: ["online-selling-portal", sessionId],
      });
      queryClient.invalidateQueries({ queryKey: ["cart-number"] });
    },
    onError: (error) => {
      toast.error(errorMessage || error.message);
    },
  });
};
export const useClearCart = (props: IClearCartCard) => {
  const queryClient = useQueryClient();
  const sessionId = localStorageUtil.getSessionId();
  const { message = "Clear cart success", errorMessage } = props;
  return useMutation({
    mutationFn: ({ sessionId }: { sessionId: string }) => clearCart(sessionId),
    onSuccess: (data) => {
      toast.success(message);
      queryClient.invalidateQueries({ queryKey: ["cart-number"] });
      queryClient.invalidateQueries({
        queryKey: ["online-selling-portal", sessionId],
      });
    },
    onError: (error) => {
      toast.error(errorMessage || error.message);
    },
  });
};
export const useConvertCardToSales = (props: IConvertCardToSalesCard) => {
  const queryClient = useQueryClient();
  const sessionId = localStorageUtil.getSessionId();
  const { message = "Convert card to sales success", errorMessage } = props;
  return useMutation({
    mutationFn: ({
      sessionId,
      customerName,
      customerEmail,
      customerPhone,
    }: {
      sessionId: string;
      customerName: string;
      customerEmail: string;
      customerPhone: string;
    }) =>
      convertCardToSales(sessionId, customerName, customerEmail, customerPhone),
    onSuccess: (data) => {
      toast.success(message);
      queryClient.invalidateQueries({ queryKey: ["cart-number"] });
      queryClient.invalidateQueries({
        queryKey: ["online-selling-portal", sessionId],
      });
    },
    onError: (error) => {
      toast.error(errorMessage || error.message);
    },
  });
};
