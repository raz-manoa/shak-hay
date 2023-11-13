import AppHeading from "../../_components/common/appHeading/AppHeading";
import NavBar from "../../_components/common/navBar/NavBar";
import style from "./Hero.module.scss";


export default function Hero() {
  return (
    <>
      <div className={style.hero}>
        <NavBar></NavBar>
        <div>
          <AppHeading
            className={style.s}
            category="Agence de developpement web et mobile"
            title="Faisons passer votre entreprise au niveau supérieur."
            description="Orci vulputate blandit mollis nunc. Sagittis feugiat posuere fermentum orci scelerisque amet sit ornare. Vestibulum dolor risus sit nam praesent.
            "
          >

          </AppHeading>
        </div>
      </div>
    </>
  )
}