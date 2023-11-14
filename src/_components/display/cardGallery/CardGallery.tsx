import style from "./CardGallery.module.scss"
import pic from "../../../assets/galery1.png";
import classNames from "classnames";

interface contentCard {
  id?: number;
  picture?: string;
  label?: string;
  desc?: string;
}

interface CardGalleryProps {
  dataCard: contentCard[];
  className?: string;

}

export default function CardGallery(props: CardGalleryProps) {
  const { className, dataCard } = props
  console.log(dataCard);

  return (
    <div className={classNames(style.cardGallery, className)}>
      <img src={pic} alt="" />
    </div>
  )
}