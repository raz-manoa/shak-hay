import Facebook from "../../_components/Icons/Facebook"
import Instagram from "../../_components/Icons/Instagram"
import Linkedin from "../../_components/Icons/Linkdin"
import Twitter from "../../_components/Icons/Twitter"
import Container from "../../_components/common/container/Container"
import AppButton from "../../_components/display/button/AppButton"
import logo from "../../assets/BigLogo.png"
import style from "./Footer.module.scss"

export default function Footer() {
  return (
    <div className={style.content}>
      <Container>
        <div className={style.footer}>
          <div className={style.footer__resume}>
            <div className={style.footer__resume__logo}>
              <img src={logo} alt="" />
            </div>
            <p>Shak-Hay est une agence Web basée à Madagascar, spécialisée dans le marketing numérique, la conception de sites Web et le développement applicatif. </p>
            <div className={style.footer__resume__linkLogos}>
              <a href="#"><Facebook /></a>
              <a href="#"><Linkedin /></a>
              <a href="#"><Instagram /></a>
              <a href="#"><Twitter /></a>
            </div>
          </div>

          <nav className={style.footer__page}>
            <h3>Page</h3>
            <a href="#">Service</a>
            <a href="#">Realisation</a>
            <a href="#">Contact</a>
          </nav>

          <div className={style.footer__contact}>
            <h3>Contacts</h3>
            <p>Lot IVH 24 Ambohimangakely
              Antananarivo 101
              MADAGASCAR</p>
            <p>+261 34 85 963 00</p>
          </div>

          <div>
            <h3>Contactez-nous</h3>
            <AppButton label="Demander un dévis" />
          </div>
        </div>
        <p>
          © 2021 Shak-Hay. Tous droits réservés.    Charte de confidentialité     Mentions légales
        </p>
      </Container>
    </div>
  )
}