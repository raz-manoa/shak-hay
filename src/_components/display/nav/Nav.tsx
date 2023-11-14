import { ReactNode, useState } from "react";
import style from "./Nav.module.scss";
import classNames from "classnames";
interface dataNav {
  id?: number;
  label?: string;
  href?: string;
}

interface NavProps {
  dataNavs: dataNav[];
  children?: ReactNode;
  className?: string;
}

export default function Nav(props: NavProps) {

  const { dataNavs, children, className } = props

  return (
    <nav
      className={classNames(style.nav, className)}
    >{dataNavs.map((theme) => (
      <a
        className={style.a}
        key={theme.id}
        href={theme.href}>{theme.label}</a>
    ))}
      {children}
    </nav>
  )
}