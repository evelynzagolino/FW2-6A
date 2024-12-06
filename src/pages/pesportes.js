import { Container } from "react-bootstrap";
import Menu from "./modulos/navbar";
import Footer from "./modulos/footer";
import Table from 'react-bootstrap/Table';

export default function Pesportes() {
    return <>
        <Menu />
        <Container>
            <Container className="border  border-success rounded-pill text-center col-sm-6">
                Lista de Produtos de Esportes
            </Container>
            <Container>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>_ID</th>
                            <th>Produto</th>
                            <th>Categoria</th>
                            <th>Descrição</th>
                            <th>Preço</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </Container>
        <Footer />
    </>
}