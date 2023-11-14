import classNames from "classnames";
import style from "./Card.module.scss"

interface dataCard {
  id: number,
  icon: string;
  title: string;
  desc: string;
}

interface CardProps {
  dataCards: dataCard[];
  className?: string;

}

export default function Card(props: CardProps) {
  const { dataCards, className } = props

  return (
    <div className={classNames(className)}>
      {dataCards.map((data) => (
        <div className={style.card} key={data.id}>
          <div className={style.Card__img}>
            <img src={data.icon} alt="" />
          </div>
          <div className={style.Card__title}>
            <h3>{data.title}</h3>
            <p>{data.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}