import { useEffect } from "react";

import { Header } from "../../components/Header";
import { useAuth } from "../../hooks/useAuth";
import { auth, db } from "../../services/firebase";
import { doc, getDocs, collection } from "firebase/firestore";

import { Container } from "react-bootstrap";
import Masonry from "react-masonry-css";
import { MyTicketsCard } from "../../components/MyTicketsCard";
import { Loading } from "../../components/Loading";

import { MyTicketsPage } from "./styles";
import { useMyTickets } from "../../hooks/useMyTickets";

import { TicketsType } from "../../types/Types";

const breakpoints = {
  default: 3,
  1100: 2,
  700: 1,
};

export function MyTickets() {
  const { user, setUser } = useAuth();
  const { myTickets, loading } = useMyTickets();

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
      <MyTicketsPage>
        <Container>
          <br />
          {loading ? (
            <Loading />
          ) : (
            <Masonry breakpointCols={breakpoints} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
              {myTickets?.map((ticket: TicketsType) => (
                <MyTicketsCard title={ticket.title} price={ticket.price} location={ticket.location} datetime={ticket.datetime} imgUrl={ticket.imgUrl}>
                  {ticket.description}
                </MyTicketsCard>
              ))}
            </Masonry>
          )}
        </Container>
      </MyTicketsPage>
    </>
  );
}
