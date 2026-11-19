// Tipos compartilhados do projeto FERVO

export interface Photo {
  id: string;
  url: string;
  alt: string;
}

export interface Album {
  id: string;
  title: string;
  date: string;
  photos: Photo[];
}

export interface Video {
  id: string;
  title: string;
  edition: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
}

export interface TicketLote {
  name: string;
  price: string;
  status: "available" | "sold" | "soon";
}

export interface Event {
  hasEvent: boolean;
  name: string;
  date: string;
  time: string;
  location: string;
  description: string;
  ticketLink: string;
  lotes: TicketLote[];
}
