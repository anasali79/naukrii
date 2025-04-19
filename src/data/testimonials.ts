
interface Testimonial {
  quote: string;
  content: string;
  rating: number;
  name: string;
  industry: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "I'm 100% satisfied with the tool",
    content: "I'm thrilled to share my exceptional experience with the AI Resume Maker! I'm 100% satisfied with the tool and would highly recommend it to friends and anyone.",
    rating: 5,
    name: "AMAN KR . KUSHWAHA",
    industry: "Banking",
    avatar: "/placeholder.svg"
  },
  {
    quote: "It's very user friendly resume",
    content: "Really, it's very user friendly and it's very easy to make resume. I don't see any anyother site which is this much user friendly.",
    rating: 4,
    name: "Sumit",
    industry: "Media",
    avatar: "/placeholder.svg"
  }
];
