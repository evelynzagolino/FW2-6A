import { Container } from "react-bootstrap";
import Footer from "./modulos/footer";
import Menu from "./modulos/navbar";
import { useState } from "react";

export default function Promessa(){
const [pao, setpao] = useState("")
    setTimeout(() => {
        document.title = "Promessa é Dívida";
        setpao("é Dívida");
    }, 4000);
    return <>
    <Menu />
    <Container>
        Promessa {pao==="" ? :pao}
    </Container>
    <Footer />
</>
}