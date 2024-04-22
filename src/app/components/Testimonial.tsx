'use client';

import React from 'react';
import Headshot from '../assets/headshot.avif';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './../globals.css';

const data = [
  {
    name: 'John Morgan',
    img: Headshot,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ',
  },
  {
    name: 'John Morgan',
    img: Headshot,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ',
  },
  {
    name: 'John Morgan',
    img: Headshot,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ',
  },
];

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

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: '#be185d',
        borderRadius: '50%',
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: '#4f46e5',
        borderRadius: '50%',
        margin: 'auto',
      }}
      onClick={onClick}
    />
  );
}

export default function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <section className="flex flex-col justify-center items-center gap-16  mt-12 mb-48 ">
      <div className="w-4/5 md:w-2/4 m-auto ">
        <div className="mt-20 shadow-xl rounded-xl ">
          <Slider {...settings}>
            {data.map((d) => (
              <div
                key={d.name}
                className="!flex justify-center items-center rounded-xl "
              >
                <div className="h-56 rounded-t-xl flex justify-center items-center">
                  <Image
                    src={d.img}
                    alt=""
                    className="h-32 w-32 md:h-44 md:w-44 rounded-full"
                  />
                </div>
                <div className="flex flex-col w-2/3 gap-4 p-4 ">
                  <p className="text-xl font-semibold w-full md:w-1/2">
                    {d.name}
                  </p>
                  <p className="w-5/5">{d.review}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
