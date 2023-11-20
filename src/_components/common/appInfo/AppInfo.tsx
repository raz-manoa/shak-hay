import classNames from "classnames";
import style from "./AppInfo.module.scss";

interface AppInfoProps {
  id?: number;
  icon?: string;
  label?: string;
  desc?: string;
  className?: string;
}

export default function AppInfo(props: AppInfoProps) {
  const { id, icon, label, desc, className } = props
  return (
    <div className={classNames(style.info, className)}>
      <div className={style.info__icon}>
        <img src={icon} alt="" />
      </div>
      <div className={style.info__tilte}>
        <h3>{label}</h3>
        <p>{desc}</p>
      </div>
    </div>
  )
}