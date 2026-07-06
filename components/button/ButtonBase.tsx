import React from 'react';

type Props = {
  className?: string;
  title: string | React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
};

export const ButtonBase = (props: Props) => {
  const { className, title, onClick, disabled } = props;

  return (
    <button className={`${className} `} onClick={onClick} disabled={disabled}>
      {title}
    </button>
  );
};
