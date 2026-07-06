"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC, useState } from "react";

interface IProps {
  children: React.ReactNode;
}

const Providers: FC<IProps> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default Providers;
