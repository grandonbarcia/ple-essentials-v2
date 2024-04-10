import Headshot from '../assets/headshot.avif';
import Image from 'next/image';

function Slide() {
  return (
    <div className="flex justify-center items-center w-[1000px] h-4/6 shadow-xl  z-20 bg-zinc-100 ">
      <div className="flex justify-center items-center w-1/3 h-full bg-orange-400 relative">
        <div className="absolute ml-[100px]">
          <div className="flex h-[110px] w-[110px] bg-white rounded-full">
            <Image
              src={Headshot}
              alt="headshot"
              className="h-[100px] w-[100px] object-cover rounded-full my-auto mx-auto"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 pl-20 pr-14">
        <div>
          <h3 className="text-2xl text-orange-400 font-semibold">John Smith</h3>
          <span className="text-xl">customer</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugia
        </p>
      </div>
    </div>
  );
}

export default function Testimonial() {
  const slides = [<Slide key={1} />, <Slide key={2} />, <Slide key={3} />];
  return (
    <section className="flex flex-col justify-center items-center gap-16 h-[600px] mt-12 mb-12">
      <div className="flex flex-col text-center w-1/3 gap-5">
        <h1 className="text-3xl font-semibold">Testimonial</h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation{' '}
        </p>
      </div>
      <div className="h-full w-full flex justify-evenly  items-center">
        {/* <div className="text-4xl font-semibold bg-orange-500 p-5 text-white">
          {'<'}
        </div> */}
        <div className="flex w-full h-full overflow-hidden  ">
          {' '}
          {slides.map((slide) => slide)}
        </div>

        {/* <div className="text-4xl font-semibold bg-orange-500 p-5 text-white">
          {'>'}
        </div> */}
      </div>
    </section>
  );
}
