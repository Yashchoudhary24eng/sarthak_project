import { FaqItem, JourneyStep, ProgramInclusion, TestimonialPlaceholder } from "../types";

const cloudinaryVideo = (fileName: string) =>
  `https://res.cloudinary.com/dxhbqfjl/video/upload/q_auto,w_720/${fileName}.mp4`;

const cloudinaryPoster = (fileName: string) =>
  `https://res.cloudinary.com/dxhbqfjl/video/upload/so_0,w_720,q_auto,f_jpg/${fileName}.jpg`;

export const testimonialPlaceholders: TestimonialPlaceholder[] = [
  {
    id: "testimonial-1",
    label: "Client Testimonial Video 1",
    src: cloudinaryVideo("WhatsApp_Video_1"),
    poster: cloudinaryPoster("WhatsApp_Video_1"),
  },
  {
    id: "testimonial-2",
    label: "Client Testimonial Video 2",
    src: cloudinaryVideo("WhatsApp_Video_2"),
    poster: cloudinaryPoster("WhatsApp_Video_2"),
  },
  {
    id: "testimonial-3",
    label: "Client Testimonial Video 3",
    src: cloudinaryVideo("WhatsApp_Video_3"),
    poster: cloudinaryPoster("WhatsApp_Video_3"),
  },
];

export const journeySteps: JourneyStep[] = [
  {
    stepNumber: "01",
    title: "Book Your Call",
    description:
      "Schedule a one-on-one conversation to discuss your current challenges, goals, and what you wish to transform in your life.",
    lang: "en",
  },
  {
    stepNumber: "02",
    title: "Understand Your Personalized Roadmap",
    description:
      "Hum aapki problem ko detail mein samjhenge aur aapki kundali aur situation ke according aapko ek personalized roadmap explain karenge.",
    lang: "hi",
  },
  {
    stepNumber: "03",
    title: "Decide With Clarity",
    description:
      "Agar aapko hamare discussion ke baad vishwas hota hai ki yeh program aapke liye suitable hai, tabhi aap program mein enroll karne ka decision le sakte hain.",
    lang: "hi",
  },
];

export const programInclusions: ProgramInclusion[] = [
  {
    title: "Vedic Mantras According to Your Birth Chart",
    description:
      "Explore mantras selected according to your kundali and the intentions you want to work toward.",
  },
  {
    title: "Personalized Vedic Remedies",
    description:
      "Discover traditional Vedic remedies selected according to your chart and individual concerns.",
  },
  {
    title: "Wristwatch Remedies",
    description:
      "Explore personalized wristwatch-related remedies as part of your program's approach.",
  },
  {
    title: "Kundali-Aligned Manifestation Techniques",
    description:
      "Learn manifestation practices tailored to your birth chart, intentions, and personal goals.",
  },
  {
    title: "Energy Alignment Techniques",
    description:
      "Explore structured practices intended to support focus, self-awareness, and alignment with your intentions.",
  },
  {
    title: "Dedicated 1:1 Personalized Program",
    description:
      "Receive individual guidance based on your circumstances, with a roadmap designed specifically for you rather than a generic solution.",
  },
];

export const faqData: FaqItem[] = [
  {
    question: "Do I need prior knowledge of Vedic astrology?",
    answer:
      "No. The program can be explained in a simple, structured way, even if you're new to Vedic astrology.",
  },
  {
    question: "Is the program personalized?",
    answer:
      "Yes. The program is designed around your birth chart, concerns, and goals.",
  },
  {
    question: "Do I have to pay before discussing my problem?",
    answer:
      "First, book a call and discuss your concerns. If you feel the proposed approach is suitable for you, you can then decide whether to enroll and pay for the program.",
  },
];
