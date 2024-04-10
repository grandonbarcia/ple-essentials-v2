import Image from 'next/image';
import Shop2 from '../assets/shop.svg';

function Button({ children }: { children: string }) {
  return (
    <>
      <a
        href="#_"
        className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
      >
        <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
        <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
        <span className="relative text-white">{children}</span>
      </a>
    </>
  );
}

function Circle() {
  return (
    <div className=" w-[700px] h-[700px] bg-pink-700 rounded-full opacity-30"></div>
  );
}

export default function Landing() {
  return (
    <section className="flex w-full justify-center items-center pt-12 pb-12">
      <div className="md:container flex justify-center items-center h-full w-full ">
        <div className="grid gap-10 w-1/3">
          <h1 className="text-5xl font-bold">Lorem ipsum dolor sit</h1>
          <p className="text-xl">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo
          </p>
          <div className="flex gap-5">
            <Button> Read More </Button>
            <Button> Contact Us </Button>
          </div>
        </div>
        <div className=" w-1/2 z-10">
          <Image src={Shop2} alt="shopping" />
        </div>
        <div className="absolute ml-[1000px] mt-[-100px]">
          <Circle />
        </div>
      </div>
    </section>
  );
}
