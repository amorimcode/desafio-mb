import { useEffect } from "react";

import { Header } from "../../components/Header";
import { Card } from "../../components/Cards";

import { TicketsPage } from "./styles";
import { Container } from "react-bootstrap";

import Masonry from "react-masonry-css";

import { auth } from "../../services/firebase";

import { useAuth } from "../../hooks/useAuth";
import { useTickets } from "../../hooks/useTickets";

import { TicketsType } from "../../types/Types";

const breakpoints = {
  default: 3,
  1100: 2,
  700: 1,
};

export function Tickets() {
  const { user, setUser } = useAuth();
  const { tickets , setTickets } = useTickets();

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
      <TicketsPage>
        <Container>
          <br />
          <Masonry breakpointCols={breakpoints} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
            {tickets?.map((ticket: TicketsType) => (
              <Card
                title={ticket.title}
                price={ticket.price}
              >{ticket.description}</Card>
            ))}
          </Masonry>
        </Container>
      </TicketsPage>
    </>
  );
}
