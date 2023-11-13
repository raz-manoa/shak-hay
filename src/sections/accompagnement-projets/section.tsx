import style from "./Accompagnement.module.scss";
import AppHeading from "../../_components/common/appHeading/AppHeading";
import Card from "../../_components/display/card/Card";

export default function Accompagnement() {

  return (
    <section>
      <AppHeading
        className={style.s}
        category="Nos services"
        title="FUn accompagnement global de votre projet"
        description="Des expertises complémentaires et une approche qui font toute la différence"
      />
      <Card />
    </section>
  )
}