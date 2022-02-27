import { Header } from "../../components/Header";

import { NewEventPage, Title } from "./styles";

import { Container, Form, Button, FloatingLabel, Row, Col } from "react-bootstrap";

export function NewEvent() {
  return (
    <>
      <Header />
      <NewEventPage>
        <br />
        <Container>
          <Row>
            <Col>
              <Title>Criar evento</Title>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Título</Form.Label>
                  <Form.Control type="text" placeholder="Digite o título do evento" maxLength={50} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Descrição</Form.Label>
                  <FloatingLabel controlId="floatingTextarea2" label="Digite a descrição">
                    <Form.Control as="textarea" style={{ height: "100px" }} />
                  </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Data e hora</Form.Label>
                  <Form.Control type="text" className="date-input" placeholder="dd/mm/yyyy" />
                  <Form.Text className="text-muted">dd/mm/yyyy hh:mm</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Preço</Form.Label>
                  <Form.Control type="number" placeholder="Digite o preço do ingresso" maxLength={10} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Imagem</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Criar evento
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </NewEventPage>
    </>
  );
}
