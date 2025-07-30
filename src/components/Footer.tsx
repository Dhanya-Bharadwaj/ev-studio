'use client';

import { motion } from 'framer-motion';
import styled from 'styled-components';

interface SectionProps {
  reverse?: boolean;
}

const Section = styled.section<SectionProps>`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  align-items: center;
  justify-content: center;
  padding: 6em 10%; /* Increased padding for more breathing room */
  background: #131d2c;
  color: #fff;
  gap: 6em; /* Increased gap for better separation */

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 3em; /* Adjusted gap for mobile */
    padding: 4em 1.5em; /* Adjusted padding for mobile */
    text-align: center; /* Center text on mobile */
  }
`;

const Img = styled.img`
  max-width: 420px; /* Slightly larger image */
  width: 100%;
  border-radius: 20px; /* Slightly more rounded corners */
  box-shadow: 0 15px 40px rgba(1, 16, 41, 0.35); /* More pronounced shadow */
  object-fit: cover; /* Ensure image covers the area without distortion */
  aspect-ratio: 4/3; /* Maintain a consistent aspect ratio for images */

  @media (max-width: 900px) {
    max-width: 350px;
  }
`;

const TextBlock = styled(motion.div)`
  max-width: 520px; /* Wider text block */

  h2 {
    font-size: 3.2em; /* Larger heading */
    margin-bottom: 0.6em;
    line-height: 1.2;
    background: linear-gradient(
      90deg,
      #00aaff,
      #00ecbc
    ); /* Gradient for headings */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 900px) {
      font-size: 2.5em;
    }
  }

  p {
    font-size: 1.3em; /* Larger paragraph text */
    line-height: 1.7;
    color: #e0e0e0; /* Slightly off-white for better readability */

    @media (max-width: 900px) {
      font-size: 1.1em;
    }
  }
`;

interface AnimatedSectionProps {
  heading: string;
  text: string;
  image: string;
  reverse?: boolean;
}

export default function AnimatedSection({ heading, text, image, reverse = false }: AnimatedSectionProps) {
  const textVariants = {
    hidden: { opacity: 0, x: reverse ? 100 : -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
        ease: [0.6, 0.05, -0.01, 0.9] as [number, number, number, number], // Custom cubic-bezier for a snappier feel
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.85, opacity: 0, rotate: -5 }, // Slightly more pronounced initial state
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 1.0,
        delay: 0.3, // Delay the image reveal slightly after text
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number], // Custom cubic-bezier for a smooth bounce
      },
    },
  };

  return (
    <Section reverse={reverse}>
      <TextBlock
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }} // Trigger earlier when more of it is visible
      >
        <h2>{heading}</h2>
        <p>{text}</p>
      </TextBlock>
      <motion.div
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }} // Trigger when half of it is visible
      >
        <Img src={image} alt={heading} />
      </motion.div>
    </Section>
  );
}