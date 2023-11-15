import AppHeading from "../../_components/common/appHeading/AppHeading";
import Container from "../../_components/common/container/Container";
import Nav from "../../_components/display/nav/Nav";
import style from "./NosRealisation.module.scss";
import picGallery1 from "../../assets/galery1.png";
import picGallery2 from "../../assets/galery2.png";
import picGallery3 from "../../assets/galery3.png";
import picGallery4 from "../../assets/galery4.png";
import picGallery5 from "../../assets/galery5.png";
import picGallery6 from "../../assets/galery6.png";
import CardGallery from "../../_components/display/cardGallery/CardGallery";


export default function Realisation() {
  const themes = ([
    { id: 1, label: "Tous", href: "#" },
    { id: 2, label: "Site web", href: "#" },
    { id: 3, label: "Application mobile", href: "#" },
    { id: 4, label: "Rédaction web et mobile", href: "#" }
  ])

  const dataCards = ([
    { id: 1, picture: picGallery1, label: "Sofashop", service: "Développement web", type: "Rédaction" },
    { id: 2, picture: picGallery2, label: "Sofashop", service: "Développement web", type: "Rédaction" },
    { id: 3, picture: picGallery3, label: "Sofashop", service: "Développement web", type: "Rédaction" },
    { id: 4, picture: picGallery4, label: "Sofashop", service: "Développement web", type: "Rédaction" },
    { id: 5, picture: picGallery5, label: "Sofashop", service: "Développement web", type: "Rédaction" },
    { id: 6, picture: picGallery6, label: "Sofashop", service: "Développement web", type: "Rédaction" }

  ])
  return (
    <section className={style.realisation}>
      <Container>
        <div className={style.realisation__header}>
          <AppHeading title="Nos réalisations" className={style.realisation__header__title} />
          <Nav dataNavs={themes} className={style.realisation__header__nav} />
        </div>
        <div className={style.realisation__gallery}>
          <CardGallery dataCard={dataCards}></CardGallery>
          <a href="#" className={style.seeMore}>Afficher plus</a>
        </div>
      </Container>
    </section>
  )
}