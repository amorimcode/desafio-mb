import { useState, FormEvent } from "react";

import { Header } from "../../components/Header";

import { NewEventPage, Title } from "./styles";

import { Container, Form, Button, FloatingLabel, Row, Col } from "react-bootstrap";

export function NewEvent() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [datetime, setDatetime] = useState("");
  const [price, setPrice] = useState(0);

  function handleCreateEvent(event: FormEvent) {
    event.preventDefault();
    console.log(title);
    console.log(description);
    console.log(datetime);
    console.log(price);
  }

  return (
    <>
      <Header />
      <NewEventPage>
        <br />
        <Container>
          <Row>
            <Col>
              <Title>Criar evento</Title>
              <Form onSubmit={handleCreateEvent}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Título</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Digite o título do evento"
                    maxLength={50}
                    onChange={(title) => setTitle(title.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Descrição</Form.Label>
                  <FloatingLabel controlId="floatingTextarea2" label="Digite a descrição">
                    <Form.Control as="textarea" style={{ height: "100px" }} onChange={(description) => setDescription(description.target.value)} />
                  </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Data e hora</Form.Label>
                  <Form.Control type="text" className="date-input" placeholder="dd/mm/yyyy" onChange={(datetime) => setDatetime(datetime.target.value)}/>
                  <Form.Text className="text-muted">dd/mm/yyyy hh:mm</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Preço</Form.Label>
                  <Form.Control type="text" placeholder="Digite o preço do ingresso" maxLength={10} onChange={(price) => setPrice(parseFloat(price.target.value))}/>
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
