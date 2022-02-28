import { useState, FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

import { Header } from "../../components/Header";

import { NewEventPage, Title } from "./styles";

import { Container, Form, Button, FloatingLabel, Row, Col } from "react-bootstrap";

import { storage, db } from "../../services/firebase";
import { auth } from "../../services/firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export function NewEvent() {
  const { setUser } = useAuth();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [datetime, setDatetime] = useState("");
  const [price, setPrice] = useState(0);
  const [imageAsFile, setImageAsFile] = useState<File>();
  const [disable, setDisable] = useState(false)
  const navigate = useNavigate();

  async function setTicket(url: string) {
    console.log(url)
    const docRef = await addDoc(collection(db, "tickets"), {
      title: title,
      description: description,
      datetime: datetime,
      price: price,
      imgUrl: url,
    }).then(() => {
      alert("Evento criado com sucesso");
      navigate('/')
    });
  }

  const handleImageAsFile = (e: any) => {
    const image = e.target.files[0];
    setImageAsFile((imageFile) => image);
  };

  async function handleCreateEvent(event: FormEvent) {
    event.preventDefault();
    setDisable(true)

    if (imageAsFile) {
      const storageRef = ref(storage, "images/" + imageAsFile.name);
      const metadata = {
        contentType: "image/jpeg",
      };

      const uploadTask = uploadBytesResumable(storageRef, imageAsFile, metadata);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
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
          switch (error.code) {
            case "storage/unauthorized":
              break;
            case "storage/canceled":
              break;
            case "storage/unknown":
              break;
          }
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            const url = downloadURL
            console.log(url)
            setTicket(url);
          });
        }
      );
    }
  }

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser({
          email: user.email,
          uid: user.uid,
        });
      }
    });
  }, []);

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

                <Button variant="primary" type="submit" disabled={disable}>
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
