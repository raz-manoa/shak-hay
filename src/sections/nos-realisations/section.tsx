import AppHeading from "../../_components/common/appHeading/AppHeading";
import Container from "../../_components/common/container/Container";
import Nav from "../../_components/display/nav/Nav";
import style from "./NosRealisation.module.scss"

export default function Realisation() {
  const themes = ([
    { id: 1, label: "Tous", href: "#" },
    { id: 2, label: "Site web", href: "#" },
    { id: 3, label: "Application mobile", href: "#" },
    { id: 4, label: "Rédaction web et mobile", href: "#" }
  ])

  return (
    <section className={style.realisation}>
      <Container>
        <div className={style.realisation__header}>
          <AppHeading title="Nos réalisations" className={style.realisation__header__title} />
          <Nav dataNavs={themes} className={style.realisation__header__nav} />
        </div>

        <div className={style.realisation__gallery}>

        </div>
      </Container>
    </section>
  )
}