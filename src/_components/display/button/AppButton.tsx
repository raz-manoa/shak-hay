import { ReactNode } from "react";
import style from "./AppButton.module.scss";

interface AppButtonProps {
  label: string;
  children?: ReactNode;
  onClick?: () => void;
  // onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function AppButton(props: AppButtonProps) {
  const {
    label,
    children,
    onClick,
  } = props
  return (
    <div >
      <button className={style.btn} type="button" onClick={onClick}
      > {children} {label}</button>
    </div>
  )
}