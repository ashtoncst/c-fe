import axiosInstance from '@/libs/axios';

export const postCart = async (sessionId: string, itemId: string | number) => {
  const response = await axiosInstance.post(`/cart/add`, {
    sessionId,
    itemId: Number(itemId),
  });
  return response.data;
};
