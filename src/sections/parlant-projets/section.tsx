import style from "./ParlantProjet.module.scss";
import AppHeading from "../../_components/common/appHeading/AppHeading";
import AppInfo from "../../_components/common/appInfo/AppInfo";
import Container from "../../_components/common/container/Container";
import Mail from "../../assets/mail 1.png";
import Maps from "../../assets/map-pin 1.png";
import Phone from "../../assets/phone 1.png";
import AppButton from "../../_components/display/button/AppButton";

export default function ParlantProjets() {
  const dataInfos = ([
    { id: 1, icon: Maps, label: "Notre adresse", desc: "Lot IVH 24 Ambohimangakely <br/> Antananarivo 101 - MADAGASCAR" },
    { id: 2, icon: Phone, label: "Notre contact", desc: "+261 34 85 963 00" },
    { id: 3, icon: Mail, label: "Notre email", desc: "contact@shak-hay.com" }
  ])
  return (
    <section className={style.parlantContent}>
      <Container>
        <div className={style.parlantProjet}>
          <div className={style.parlantProjet__coordonne}>
            <AppHeading title="Parlons de votre projet" description="Discutons un peu pour réaliser votre business" />
            <div className={style.info}>
              {dataInfos.map((data) => (
                <AppInfo icon={data.icon} label={data.label} desc={data.desc} />
              ))}
            </div>
          </div>
          <div>
            <form action="">
              <input type="text" placeholder="Nom" />
              <input type="text" placeholder="Entreprise (Optionnel)" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Message" />
              <AppButton label="Envoyer" />
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}