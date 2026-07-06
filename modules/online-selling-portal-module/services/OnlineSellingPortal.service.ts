import axiosInstance from '@/libs/axios';

export const getOnlineSellingPortal = async (sessionId: string) => {
  const response = await axiosInstance.get(`/cart/${sessionId}`);
  return response.data.data;
};

export const removeOnlineSellingPortal = async (
  sessionId: string,
  productId: string
) => {
  const response = await axiosInstance.delete(`/cart/remove`, {
    data: {
      sessionId,
      itemId: Number(productId),
    },
  });
  return response.data;
};
export const convertCardToSales = async (
  sessionId: string,
  customerName: string,
  customerEmail: string,
  customerPhone: string
) => {
  const response = await axiosInstance.post(`/cart/convert`, {
    sessionId,
    customerName,
    customerEmail,
    customerPhone,
  });
  return response.data;
};
export const clearCart = async (sessionId: string) => {
  const response = await axiosInstance.delete(`/cart/clear`, {
    data: {
      sessionId,
    },
  });
  return response.data;
};
