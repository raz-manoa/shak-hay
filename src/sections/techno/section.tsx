import style from "./Techno.module.scss";
import symfony from "../../assets/symfony-3-1174988 1.png";
import swift from "../../assets/swift-18-1174990 1.png"
import slack from "../../assets/slack-21-1174995 1.png"
import react from "../../assets/react-native 1.png"
import github from "../../assets/github-170-1175028 1.png"
import Container from "../../_components/common/container/Container";

interface dataTechno {
  id?: number;
  icon?: string;
}


export default function Techno() {
  const dataTechno: dataTechno[] = ([
    { id: 1, icon: symfony },
    { id: 2, icon: react },
    { id: 3, icon: slack },
    { id: 4, icon: swift },
    { id: 5, icon: github },
  ])
  return (
    <section>
      <Container>
        <div className={style.icons}>
          {dataTechno.map((data) => (
            <img key={data.id} src={data.icon} alt="" />
          ))}
        </div>
      </Container>
    </section>
  )
}