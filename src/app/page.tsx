import Image from 'next/image';
import NavBar from './components/NavBar';
import Landing from './components/Landing';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import WhyChooseUse from './components/WhyChooseUs';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main>
      <NavBar />
      <Landing />
      <Services />
      <AboutUs />
      <WhyChooseUse />
      <Testimonial />
      <Contact />
    </main>
  );
}
