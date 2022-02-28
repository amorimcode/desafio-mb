import { useState, FormEvent } from "react";

import { Header } from "../../components/Header";

import { NewEventPage, Title } from "./styles";

import { Container, Form, Button, FloatingLabel, Row, Col } from "react-bootstrap";

import { storage } from "../../services/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export function NewEvent() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [datetime, setDatetime] = useState("");
  const [price, setPrice] = useState(0);
  const allInputs = { imgUrl: "" };
  const [imageAsFile, setImageAsFile] = useState<File>();
  const [imageAsUrl, setImageAsUrl] = useState(allInputs);

  const handleImageAsFile = (e: any) => {
    const image = e.target.files[0];
    setImageAsFile((imageFile) => image);
  };

  function handleCreateEvent(event: FormEvent) {
    event.preventDefault();

    if (imageAsFile) {
      const storageRef = ref(storage, "images/" + imageAsFile.name);
      const metadata = {
        contentType: "image/jpeg",
      };

      const uploadTask = uploadBytesResumable(storageRef, imageAsFile, metadata);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case "storage/unauthorized":
              // User doesn't have permission to access the object
              break;
            case "storage/canceled":
              // User canceled the upload
              break;

            // ...

            case "storage/unknown":
              // Unknown error occurred, inspect error.serverResponse
              break;
          }
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
          });
        }
      );
    }
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
                  <Form.Control
                    type="text"
                    className="date-input"
                    placeholder="dd/mm/yyyy"
                    onChange={(datetime) => setDatetime(datetime.target.value)}
                  />
                  <Form.Text className="text-muted">dd/mm/yyyy hh:mm</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Preço</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Digite o preço do ingresso"
                    maxLength={10}
                    onChange={(price) => setPrice(parseFloat(price.target.value))}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Imagem</Form.Label>
                  <Form.Control type="file" onChange={handleImageAsFile} />
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
