import { Button } from "react-bootstrap";
import { CardWrapper } from "./styles";

const defaultImg =
  "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17e3f2986e7%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17e3f2986e7%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.68333435058594%22%20y%3D%22120.3%22%3ESem Imagem%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";

type CardProps = {
  title: string;
  children: string;
  price: string;
};

export function Card(props: CardProps) {
  return (
    <CardWrapper className="card mb-4 shadow-sm">
      <img className="card-img-top" src={defaultImg} />
      <div className="card-body">
        <h5 className="card-title text-center">{props.title}</h5>
        <p className="card-text">{props.children}</p>
        <div>
          <span>R$ {props.price}</span>
          <Button variant="primary" size="sm">
            Comprar
          </Button>
        </div>
      </div>
    </CardWrapper>
  );
}
