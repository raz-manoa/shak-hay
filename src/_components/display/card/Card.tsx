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
    <div className={classNames(style.content, className)}>
      {dataCards.map((data) => (
        <div className={style.card} key={data.id}>
          <div className={style.card__img}>
            <img src={data.icon} alt="" />
          </div>
          <div className={style.card__info}>
            <h3 className={style.card__info__title}>{data.title}</h3>
            <p className={style.card__info__desc}>{data.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}