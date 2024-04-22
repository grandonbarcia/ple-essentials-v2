import Image from 'next/image';
import Shop2 from '../assets/undraw_add_to_cart_re_wrdo.svg';

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

export default function Contact() {
  return (
    <section className="flex w-full justify-center items-center pt-12 pb-12">
      <div className="md:container flex flex-col md:flex-row justify-evenly items-center h-full w-full gap-10 md:gap-0 ">
        <div className="w-4/5 md:w-full lg:w-1/3 rounded-2xl ">
          <div className="flex">
            <h1 className="font-bold uppercase text-5xl">Send us a message</h1>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
            <input
              className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="First Name*"
            />
            <input
              className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Last Name*"
            />
            <input
              className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email*"
            />
            <input
              className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="number"
              placeholder="Phone*"
            />
          </div>
          <div className="my-4">
            <textarea
              placeholder="Message*"
              className="w-full h-32 bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <div className="my-2 w-1/2 lg:w-1/2">
            <Button>Send Message</Button>
          </div>
        </div>
        <div className="w-4/5 md:w-1/2 z-10">
          <Image src={Shop2} alt="shopping" />
        </div>
        <div className="absolute ml-[1000px] mt-[-100px]">
          <Circle />
        </div>
      </div>
    </section>
  );
}
