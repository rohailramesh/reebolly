export type Event = {
  _id: string;
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  location: string;
  startDateTime: Date;
  endDateTime: Date;
};

export type CreateEvent = {
  title: string;
  description: string;
  location: string;
  imageUrl: string;
  startDateTime: Date;
  endDateTime: Date;
  price: string;
  path: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  imgSrc: string;
};
