import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order Online | Converge ICT Solutions",
  description: "Order Converge ICT Solutions services online.",
  robots: { index: false, follow: false },
};

export default function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
