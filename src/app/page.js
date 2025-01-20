import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Timeline } from "@/components/ui/timeline";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

import testimonial1 from './images/testimonial1.jpg';
import testimonial2 from './images/testimonial2.jpg';
import testimonial3 from './images/testimonial3.jpg';
import { FocusCards } from "@/components/ui/focus-cards";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { TypewriterEffectSmoothDemo } from "@/components/ui/typewriter";

const data = [
  {
    src: testimonial1,
    alt: "Testimonial 1",
    title: "Started the Journey",
    content: "Embarked on the journey with a vision to innovate and deliver exceptional results."
  },
  {
    src: testimonial2,
    alt: "Testimonial 2",
    title: "Milestone Achieved",
    content: "Achieved a significant milestone with groundbreaking solutions and client success."
  },
  {
    src: testimonial3,
    alt: "Testimonial 3",
    title: "Looking Ahead",
    content: "Continuing the journey with ambitious goals and a commitment to excellence."
  }
];


const testimonials = [
  {
    src: testimonial1,
    name: "John Doe",
    designation: "CEO of ExampleCorp",
    quote: "This service has completely revolutionized the way we work. Highly recommended!"
  },
  {
    src: testimonial2,
    name: "Jane Smith",
    designation: "Marketing Manager at MarketPro",
    quote: "The team was outstanding and delivered results beyond our expectations. A+ experience!"
  },
  {
    src: testimonial3,
    name: "Alice Brown",
    designation: "Freelance Designer",
    quote: "Fantastic quality and attention to detail. I love collaborating with this team!"
  }
];

const cards = [
  {
    src: testimonial1,
    title: "Serene Mountains",
  },
  {
    src: testimonial2,
    title: "Calm Beachside",
  },
  {
    src: testimonial3,
    title: "Lush Forests",
  },
  {
    src: testimonial1,
    title: "Modern Cityscape",
  },
  {
    src: testimonial2,
    title: "Golden Desert",
  },
  {
    src: testimonial3,
    title: "Peaceful Lake",
  },
];

const items = [
  {
    name: "Alice Johnson",
    title: "Software Engineer",
    quote: "This service has completely transformed the way I work. It's seamless and highly efficient!",
  },
  {
    name: "Michael Smith",
    title: "Product Manager",
    quote: "The experience was outstanding! I would recommend it to anyone looking for top-notch quality.",
  },
  {
    name: "Sofia Lee",
    title: "UI/UX Designer",
    quote: "An absolute game-changer. I can't imagine my workflow without it now.",
  },
  {
    name: "David Brown",
    title: "Entrepreneur",
    quote: "I love how intuitive and well-designed the platform is. Truly remarkable!",
  },
  {
    name: "Emma Davis",
    title: "Marketing Specialist",
    quote: "This has streamlined my work process so much. A must-have for professionals.",
  },
];




export default function Home() {
  return (
    <div className='p-10'>
          <TypewriterEffectSmoothDemo />
          <AnimatedTestimonials testimonials={testimonials} />
          <Timeline data={data} />
          {/* <InfiniteMovingCards items={items} />  */}
          <FocusCards cards={cards} />

    </div>
    

  );
}
