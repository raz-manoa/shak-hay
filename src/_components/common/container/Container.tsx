import style from "./Container.module.scss";
import { ReactNode } from "react";
import classNames from "classnames";

interface ContainerProps {
  children?: ReactNode;
  className?: string;
}

export default function Container(props: ContainerProps) {
  const { className, children } = props;
  return (
    <div className={
      classNames(
        className,
        style.container)}>
      {children}
    </div>
  )
};
