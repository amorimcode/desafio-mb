export type TicketsType = { title: string; description: string; price: string } | any;

export type userType = {
  uid: string;
};

export type CardProps = {
  ticketId: string,
  location: string;
  title: string;
  children: string;
  datetime: string;
  price: string;
  imgUrl: string;
};

export type MyTicketsCardProps = {
  location?: string;
  title: string;
  children: string;
  datetime?: string;
  price?: string;
  imgUrl?: string;
}