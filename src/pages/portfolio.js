import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <AnimatedSection
        heading="Our Vehicle Line"
        text="From urban commuters to high-performance concepts, our electric vehicles set new standards."
        image="/images/ev-prototype.jpg"
      />
      <AnimatedSection
        heading="Design Process"
        text="We merge aesthetic form with optimal aerodynamics and state-of-the-art battery tech."
        image="/images/design-process.jpg"
        reverse
      />
      <Footer />
    </>
  );
}
