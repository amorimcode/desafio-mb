import { Header } from "../../components/Header";
import { Card } from "../../components/Cards";

import { TicketsPage } from "./styles";
import { Container } from "react-bootstrap";

import Masonry from "react-masonry-css";

const breakpoints = {
  default: 3,
  1100: 2,
  700: 1,
};

export function Tickets() {
  return (
    <>
      <Header />
      <TicketsPage>
        <Container>
          <br />
          <Masonry breakpointCols={breakpoints} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
            <Card title="Título" price="0,00">Descrição</Card>

          </Masonry>
        </Container>
      </TicketsPage>
    </>
  );
}
