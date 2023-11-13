import style from "./Card.module.scss"

export default function Card() {
  return (
    <div className={style.card}>
      <div className={style.Card__img}>
        <img src="" alt="" />
      </div>
      <div className={style.Card__title}>
        <h3>Développement site web</h3>
        <p>Orci vulputate blandit mollis nunc. Sagittis feugiat posuere fermentum orci scelerisque amet sit ornare. </p>
      </div>
    </div>
  )
}