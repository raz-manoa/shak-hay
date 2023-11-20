import AppHeading from "../../_components/common/appHeading/AppHeading";
import Logo from "../../_components/Icons/ShakHayBigLogo"
import Navigation from "../../_components/display/nav/Nav"
import Container from "../../_components/common/container/Container";
import AppButton from "../../_components/display/button/AppButton";
import style from "./Hero.module.scss";
import picCover from "../../assets/developer-activity-animate 1.png";
import ellipse from "../../assets/Mask Group.png"


export default function Hero() {
  const themes = ([
    { id: 1, label: "Service", href: "#" },
    { id: 2, label: "Realisation", href: "#" },
    { id: 3, label: "Contact", href: "#" }
  ])
  return (
    <section className={style.hero}>
      <div>
        <Container>
          <div className={style.hero__header}>
            <Logo />
            <Navigation dataNavs={themes}>
              <AppButton label="Demander un dévis"></AppButton>
            </Navigation>
          </div>
        </Container>
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
        <img className={style.hero__ellipse} src={ellipse} alt="ellipse" />
      </div>
    </section>
  )
}