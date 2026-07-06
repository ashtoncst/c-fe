import React from "react";

type Props = {
  children: React.ReactNode;
  onClose?: () => void;
};

export const Modal = (props: Props) => {
  const { onClose } = props;
  return (
    <div
      className="fixed left-0 top-0 bottom-0 right-0 bg-[#5E5E5ED6]  z-[99999999]"
      onClick={onClose}
    >
      {props.children}
    </div>
  );
};
