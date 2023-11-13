import Container from "../container/Container"
import style from "./Navbar.module.scss"
import Logo from "../../Icons/ShakHayBigLogo"
import Navigation from "../../display/nav/Nav"

export default function NavBar() {
  return (
    <Container className={style.navBar} >
      <Logo />
      <div>
        <Navigation>

        </Navigation>
      </div>
    </Container>
  )
}