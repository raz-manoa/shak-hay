import style from "./Container.module.scss";
import { Children, ReactNode } from "react";

interface ContainerProps {
  Children?: ReactNode;
}

export default function Container(props: ContainerProps) {
  const { Children } = props;
  return (
    <div className={style.container}>
      {Children}
    </div>
  )
};
