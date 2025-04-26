
export interface Testimonial {
  id: number;
  clientName: string;
  role: string;
  quote: string;
  videoUrl: string;
  thumbnail: string;
}

export type TestimonialFormValues = Omit<Testimonial, 'id'>;
