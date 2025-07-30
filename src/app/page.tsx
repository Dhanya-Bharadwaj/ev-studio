import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Services from '@/components/Services'; // The new interactive list
import Process from '@/components/Process'; // The new sticky scroll section

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Process />
        {/* Add Contact section and Footer here */}
      </main>
    </>
  );
}