interface Testimonial {
  id: number;
  text: string;
  author: string;
  position: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "The team at Win Power is very experience and reliable. They have being helping our organization with its civil and electrical works since last 10 years",
    author: "Mr. Harsh Biyani",
    position: "Vice President"
  },
  {
    id: 2,
    text: "Win Power has always proved that they can deliver on their commitments. They go beyond the requirements to ensure success of the project",
    author: "Mr. Rajneesh Baruah",
    position: "Head, Electrical Division"
  },
  // Add more testimonials here
];
