import { ReactNode, useState } from "react";
import style from "./Nav.module.scss";

interface NavProps {
  children?: ReactNode;
}

export default function Nav(props: NavProps) {
  const [themes, setThemes] = useState([
    { id: 1, label: "Service", href: "#" },
    { id: 2, label: "Realisation", href: "#" },
    { id: 3, label: "Contact", href: "#" }
  ])
  const { children } = props

  return (
    <nav
      className={style.nav}
    >{themes.map((theme) => (
      <a
        className={style.a}
        key={theme.id}
        href={theme.href}>{theme.label}</a>
    ))}
      {children}
    </nav>
  )
}