import style from "./Accompagnement.module.scss";
import AppHeading from "../../_components/common/appHeading/AppHeading";
import Card from "../../_components/display/card/Card";
import mobileIcon from "../../assets/Dev-mobile.png";
import webIcon from "../../assets/dev-site-web.png";
import redactionIcon from "../../assets/redaction.png";
import Container from "../../_components/common/container/Container";



export default function Accompagnement() {
  const data = [{
    id: 1, icon: webIcon, title: "Développement site web", desc: "Orci vulputate blandit mollis nunc. Sagittis feugiat posuere fermentum orci scelerisque amet sit ornare. ",
  }, {
    id: 2, icon: mobileIcon, title: "Développement mobile", desc: "Orci vulputate blandit mollis nunc. Sagittis feugiat posuere fermentum orci scelerisque amet sit ornare. ",
  }, {
    id: 3, icon: redactionIcon, title: "Rédaction web et mobile", desc: "Orci vulputate blandit mollis nunc. Sagittis feugiat posuere fermentum orci scelerisque amet sit ornare. ",
  }]
  return (
    <section className={style.accomp}>
      <div className={style.accomp__head}>
        <Container>
          <AppHeading
            className={style.accomp__head__app}
            category="Nos services"
            title="Un accompagnement global de votre projet"
            description="Des expertises complémentaires et une approche qui font toute la différence"
          />
        </Container>
      </div>

      <Card dataCards={data} />
    </section>
  )
}