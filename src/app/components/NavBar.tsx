'use client';
import Image from 'next/image';
import Logo from '../assets/logo-black.png';
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const openMenu =
  'fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500';
const closeMenu =
  'fixed left-[-100%] top-0 w-[0%] h-screen p-10 ease-in duration-500';

export default function NavBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  function handleNav() {
    setMenuOpen(!isMenuOpen);
  }
  return (
    <nav className="flex justify-center w-full shadow-xl bg-white z-50 sticky">
      <div className="md:container flex justify-between items-center h-full w-full px-2 2xl:px-10">
        <div className="flex items-center text-xl">
          <Link href="./">
            <Image src={Logo} alt="Logo" height={90} width={90} />
          </Link>
          <h1>PLE Essentials</h1>
        </div>

        <div className="hidden md:block">
          <ul className="flex">
            <Link href="/about">
              <li className="ml-10 uppercase hover:border-b text-xl">Why Us</li>
            </Link>
            <Link href="/contact">
              <li className="ml-10 uppercase hover:border-b text-xl">
                Contact Us
              </li>
            </Link>
            <Link href="/services">
              <li className="ml-10 uppercase hover:border-b text-xl">
                Our Services
              </li>
            </Link>
          </ul>
        </div>
        <div onClick={handleNav} className="md:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={25} />
        </div>
        <div className={isMenuOpen ? openMenu : closeMenu}>
          <div className="flex w-full items-center justify-end">
            <div onClick={handleNav} className="cursor-pointer">
              <AiOutlineClose size={25} />
            </div>
          </div>
          <div className="flex-col py-10">
            <ul>
              <Link href="/about">
                <li className="py-4 cursor-pointer" onClick={handleNav}>
                  Why Us
                </li>
              </Link>
              <Link href="/contact">
                <li className="py-4 cursor-pointer" onClick={handleNav}>
                  Contact Us
                </li>
              </Link>
              <Link href="/services">
                <li className="py-4 cursor-pointer" onClick={handleNav}>
                  Our Services
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
