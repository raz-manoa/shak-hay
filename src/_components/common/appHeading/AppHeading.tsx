import { ReactNode } from "react";
import style from "./AppHeading.module.scss";
interface AppHeadingProps {

  category?: string;
  title?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

export default function AppHeading(props: AppHeadingProps) {
  const { category, title, className, description, children } = props;

  return (
    <div className={className}>
      <p className={style.categ}>{category}</p>
      <h2 className={style.title}>{title}</h2>
      <p className={style.desc}>{description}</p>
      {children}
    </div>
  )
}