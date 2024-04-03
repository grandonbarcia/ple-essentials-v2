import Image from 'next/image';
import NavBar from './components/NavBar';
import Landing from './components/Landing';
import Services from './components/Services';

export default function Home() {
  return (
    <main>
      <NavBar />
      <Landing />
      <Services />
    </main>
  );
}
