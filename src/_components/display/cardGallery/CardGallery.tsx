import style from "./CardGallery.module.scss"
import classNames from "classnames";
import Eyes from "../../../_components/Icons/Eyes";
import Words from "../../../_components/Icons/Words";


interface contentCard {
  id?: number;
  picture?: string;
  label?: string;
  service?: string;
  type?: string;

}

interface CardGalleryProps {
  dataCard: contentCard[];
  className?: string;

}

export default function CardGallery(props: CardGalleryProps) {
  const { className, dataCard } = props

  return (
    <div className={classNames(style.cardGallery, className)}>
      {dataCard.map((data) => (
        <div key={data.id} className={style.card}>
          <div className={style.card__img}>
            <img src={data.picture} alt="" />
          </div>
          <div className={style.card__overlay}>
            <div className={style.card__overlay__link}>
              <a href="#"><Eyes /></a>
              <a href="#"><Words /></a>
            </div>
            <div className={style.card__overlay__title}>
              <h2>{data.label}</h2>
              <div className={style.card__overlay__title__desc}>
                <p>{data.service}</p>
                <p>|</p>
                <p>{data.type}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}