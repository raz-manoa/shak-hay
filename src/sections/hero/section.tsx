import AppHeading from "../../_components/common/appHeading/AppHeading";
import Container from "../../_components/common/container/Container";
import NavBar from "../../_components/common/navBar/NavBar";
import AppButton from "../../_components/display/button/AppButton";
import style from "./Hero.module.scss";
import picCover from "../../assets/developer-activity-animate 1.png";


export default function Hero() {
  return (
    <section className={style.hero}>
      <div className={style.hero__header}>
        <NavBar></NavBar>
      </div>
      <div className={style.hero__cover}>
        <Container>
          <AppHeading
            className={style.hero__cover__title}
            category="Agence de developpement web et mobile"
            title="Faisons passer votre entreprise au niveau supérieur."
            description="Orci vulputate blandit mollis nunc. Sagittis feugiat posuere fermentum orci scelerisque amet sit ornare. Vestibulum dolor risus sit nam praesent.
            "
          >
            <AppButton label="Demander un dévis"></AppButton>
          </AppHeading>
        </Container>
        <img className={style.hero__cover__picCover} src={picCover} alt="cover" />
      </div>
    </section>
  )
}