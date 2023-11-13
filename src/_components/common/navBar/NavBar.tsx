import Container from "../container/Container"
import style from "./Navbar.module.scss"
import Logo from "../../Icons/ShakHayBigLogo"
import Navigation from "../../display/nav/Nav"
import AppButton from "../../display/button/AppButton"


export default function NavBar() {
  return (
    <Container className={style.navBar} >
      <Logo />
      <div>
        <Navigation>
          <AppButton label="Demander un dévis"></AppButton>
        </Navigation>
      </div>
    </Container>
  )
}