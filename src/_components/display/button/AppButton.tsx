import { ReactNode } from "react";
import style from "./AppButton.module.scss";
import classNames from "classnames";

interface AppButtonProps {
  label: string;
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
  // onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function AppButton(props: AppButtonProps) {
  const {
    label,
    children,
    onClick,
    className,
  } = props
  return (
    <div className={classNames(className)}>
      <button className={style.btn} type="button" onClick={onClick}
      > {children} {label}</button>
    </div>
  )
}