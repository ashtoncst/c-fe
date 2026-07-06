import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postCart } from "@/services/Cart.services";
import toast from "react-hot-toast";

interface IPostCard {
  message?: string;
  errorMessage?: string;
}
export const usePostCart = (props: IPostCard) => {
  const queryClient = useQueryClient();

  const {
    message = "Add to cart success",
    errorMessage = "This item is already in the cart",
  } = props;
  return useMutation({
    mutationFn: ({
      sessionId,
      itemId,
    }: {
      sessionId: string;
      itemId: string | number;
    }) => postCart(sessionId, itemId),
    onSuccess: (data) => {
      toast.success(message);
      queryClient.invalidateQueries({ queryKey: ["cart-number"] });
      queryClient.invalidateQueries({ queryKey: ["online-selling-portal"] });
    },
    onError: (error: any) => {
      const errorMsg =
        error?.response?.data?.error?.message ||
        error?.response?.data?.message ||
        errorMessage;
      toast.error(errorMsg);
    },
  });
};
