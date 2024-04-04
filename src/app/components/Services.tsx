import Image from 'next/image';
import Phone from '../assets/phone-svgrepo-com.svg';
import Sale from '../assets/sale-badge-svgrepo-com.svg';
import Shop from '../assets/shopping-card-svgrepo-com.svg';

const pink = 'bg-pink-700';
const purple = 'bg-purple-600';

function Circle({ color }: { color: string }) {
  return (
    <div
      className={`absolute w-[160px] h-[160px] ${color} rounded-full opacity-30 mt-[-5px]`}
    ></div>
  );
}

export default function Services() {
  return (
    <section className="flex flex-col gap-24 w-full justify-center items-center pt-12 pb-12">
      <h1 className="text-3xl font-bold">Our Services</h1>
      <div className="flex w-2/3 justify-evenly items-center">
        <div className="grid gap-2 w-1/4  text-center bg-white pt-10 pb-10 px-5 rounded shadow z-20">
          <div className=" flex justify-center mx-auto w-full relative">
            <Image
              src={Phone}
              alt="phone"
              height={150}
              width={150}
              className="z-10"
            />
            <Circle color={pink}></Circle>
          </div>
          <h1 className="text-2xl font-semibold">Lorme Ipmsum</h1>
          <p>Sed ut perspiciatis unde omnis iste natus error</p>
          <p>read more {'->'}</p>
        </div>
        <div className="grid gap-2 w-1/4 text-center bg-white pt-10 pb-10 px-5 rounded shadow">
          <div className=" flex justify-center mx-auto w-full relative h-[150px]">
            <Image
              src={Shop}
              alt="shop"
              height={100}
              width={100}
              className="z-10"
            />
            <Circle color={purple}></Circle>
          </div>
          <h1 className="text-2xl font-semibold">Lorme Ipmsum</h1>
          <p>Sed ut perspiciatis unde omnis iste natus error</p>
          <p>read more {'->'}</p>
        </div>
        <div className="grid gap-2 w-1/4 text-center bg-white pt-10 pb-10 px-5 rounded shadow">
          <div className=" flex justify-center mx-auto w-full relative h-[150px]">
            <Image
              src={Sale}
              alt="sale"
              height={120}
              width={120}
              className="z-10"
            />
            <Circle color={pink}></Circle>
          </div>
          <h1 className="text-2xl font-semibold ">Lorme Ipmsum</h1>
          <p>Sed ut perspiciatis unde omnis iste natus error</p>
          <p>read more {'->'}</p>
        </div>
      </div>
    </section>
  );
}
