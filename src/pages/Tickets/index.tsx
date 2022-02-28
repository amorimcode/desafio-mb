import { useEffect } from "react";

import { Header } from "../../components/Header";
import { Card } from "../../components/Cards";
import { Loading } from "../../components/Loading";

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
  const { setUser } = useAuth();
  const { tickets, loading } = useTickets();

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
          {loading ? (
            <Loading />
          ) : (
            <Masonry breakpointCols={breakpoints} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
              {tickets?.map((ticket: TicketsType) => (
                <Card title={ticket.title} price={ticket.price} datetime={ticket.datetime} imgUrl={ticket.imgUrl}>
                  {ticket.description}
                </Card>
              ))}
            </Masonry>
          )}
        </Container>
      </TicketsPage>
    </>
  );
}
