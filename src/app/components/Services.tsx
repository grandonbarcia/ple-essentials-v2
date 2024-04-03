import Image from 'next/image';
import Phone from '../assets/phone-svgrepo-com.svg';
import Sale from '../assets/sale-badge-svgrepo-com.svg';
import Shop from '../assets/shopping-card-svgrepo-com.svg';

function Circle() {
  return (
    <div className=" w-[300px] h-[300px] bg-pink-700 rounded-full opacity-30"></div>
  );
}

export default function Services() {
  return (
    <section className="flex flex-col gap-24 w-full justify-center items-center pt-12">
      <h1 className="text-3xl font-bold">Our Services</h1>
      <div className="flex  w-full justify-center items-center">
        <div className="grid gap-2 w-60 text-center">
          <div className="mx-auto">
            <Circle></Circle>
            <Image src={Phone} alt="phone" height={100} width={100} />
          </div>
          <h1 className="text-2xl">Lorme Ipmsum</h1>
          <p>Sed ut perspiciatis unde omnis iste natus error</p>
          <p>read more {'->'}</p>
        </div>
        <div className="grid gap-2 w-60 text-center">
          <div className="mx-auto">
            <Image src={Shop} alt="shop" height={100} width={100} />
          </div>
          <h1 className="text-2xl">Lorme Ipmsum</h1>
          <p>Sed ut perspiciatis unde omnis iste natus error</p>
          <p>read more {'->'}</p>
        </div>
        <div className="grid gap-2 w-60 text-center">
          <div className="mx-auto">
            <Image src={Sale} alt="sale" height={100} width={100} />
          </div>
          <h1 className="text-2xl">Lorme Ipmsum</h1>
          <p>Sed ut perspiciatis unde omnis iste natus error</p>
          <p>read more {'->'}</p>
        </div>
      </div>
    </section>
  );
}
