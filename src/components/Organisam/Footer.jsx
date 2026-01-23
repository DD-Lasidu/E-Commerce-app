import { Container ,Row,Col } from "react-bootstrap";

const Footer = () => {

    return (
        <footer className = "bg-dark text-light py-2 mt-2">
            <Container>
                <Row>
                    <Col className="text-center">
                    <p className="text-white mb-0">&copy:2026 Sport Shop.All Right Reserverd</p>
                    </Col>
                </Row>
                
            </Container>
        </footer>
    );
};



export default Footer;