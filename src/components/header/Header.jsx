"use client";
import React, { useState, useEffect } from "react";
import styles from "./header.module.scss";
import logo from "@/assets/imgs/logo.png";
import text from "@/assets/imgs/text.png";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
import location from "@/assets/icons/location.svg";
import human from "@/assets/icons/human.svg";
import { JackInTheBox } from "react-awesome-reveal";
import { AiFillHome } from "react-icons/ai";
import { FaMotorcycle } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";
import { IoCloseCircleSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [self, setSelf] = useState(1);
  const [privateD, setPrivateD] = useState(1);
  const [price, setPrice] = useState(self * 100 + privateD * 150);
  useEffect(() => {
    setPrice(self * 100 + privateD * 150);
  }, [self, privateD]);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleAddSelf = () => {
    setSelf(self + 1);
  };
  const handleMinusSelf = () => {
    if (self == 0) {
      setSelf(0);
    } else {
      setSelf(self - 1);
    }
  };
  const handleAddPrivate = () => {
    setPrivateD(privateD + 1);
  };
  const handleMinusP = () => {
    if (privateD == 0) {
      setPrivateD(0);
    } else {
      setPrivateD(privateD - 1);
    }
  };
  return (
    <div className={styles.container}>
      <div
        className={` ${styles.nav} max-w-[1400px] flex items-center bg-white  w-full  mx-auto rounded-2xl p-4 justify-between`}
      >
        <div className={`${styles.logo} cursor-pointer`}>
          <Image src={logo} alt="supportCall" width={70} height={60} />
        </div>
        <div className={`${styles.link}  text-[14px] font-bold uppercase `}>
          <ul className="flex gap-10 ">
            <li>
              <div className={styles.item}>
                <Link href="/">home</Link>
                <span></span>
              </div>
            </li>
            <li>
              <div className={styles.item}>
                <Link href="/">About Us</Link>
                <span></span>
              </div>
            </li>
            <li>
              <div className={styles.item}>
                <Link href="/" className="flex items-center">
                  tour <FaAngleDown />
                </Link>
                <span></span>
              </div>
            </li>
            <li>
              <div className={styles.item}>
                <Link href="/">destinations</Link>
                <span></span>
              </div>
            </li>
            <li>
              <div className={styles.item}>
                <Link href="/">Blog</Link>
                <span></span>
              </div>
            </li>
            <li>
              <div className={styles.item}>
                <Link href="/">faq</Link>
                <span></span>
              </div>
            </li>
            <li>
              <div className={styles.item}>
                <Link href="/">contact</Link>
                <span></span>
              </div>
            </li>
            <li>
              <div className={styles.item}>
                <Link href="/">vietnam cheer hostel</Link>
                <span></span>
              </div>
            </li>
          </ul>
        </div>
        <div className={`${styles.socials} flex gap-x-2 `}>
          <FaFacebookF className="bg-[#b34b1e]  rounded-full p-[6px] w-7 h-7 text-white cursor-pointer hover:bg-red-500" />
          <FaYoutube className="bg-[#b34b1e]  rounded-full p-[6px] w-7 h-7 text-white cursor-pointer hover:bg-red-500" />
        </div>
      </div>
      <JackInTheBox>
        <div className={`${styles.title}`}>
          <Image src={text} alt="title" />
        </div>
      </JackInTheBox>

      <div
        className={`${styles.funtion} flex w-full mx-auto max-w-[1183px] bg-white rounded-[12px] justify-between px-[30px] py-[20px] uppercase items-center`}
      >
        <div
          className={`${styles.funItemFirst} flex flex-col gap-y-3  w-[25%]`}
        >
          <span className="text-[14px] text-gray-400">Tour</span>
          <div className="flex gap-x-2">
            <label>
              <Image src={location} alt="backTop" width={25} height={25} />
            </label>
            <select id="tour" className="font-bold w-full focus:outline-none">
              <option value="volvo">HAGIANG LOOP TOOR1</option>
              <option value="audi" selected>
                HAGIANG LOOP TOOR
              </option>
            </select>
          </div>
        </div>
        <div
          className={` ${styles.colFirst} border-solid border-[1px] mt-2 mb-2 `}
        ></div>
        <div
          className={`${styles.funItemSecond} flex flex-col gap-y-3 justify-start  w-[25%]`}
        >
          <span className="text-[14px] text-gray-400">SELF - DRIVING</span>
          <div className="flex gap-x-2 ">
            <label>
              <Image src={human} alt="backTop" width={20} height={20} />
            </label>
            <div className="flex items-center gap-x-3 ">
              <div className="lowercase font-bold text-[14px] xl:text-xl">
                {self}
                <span> pax</span>
              </div>
              <div className="flex items-center gap-x-1 xl:gap-x-2">
                <FaPlus
                  className="border-[1px] p-[6px] text-3xl rounded-full cursor-pointer shadow-lg hover:bg-[#B34B1E] hover:text-white"
                  onClick={handleAddSelf}
                />
                <FaMinus
                  className="border-[1px] p-[6px] text-3xl rounded-full cursor-pointer shadow-lg"
                  onClick={handleMinusSelf}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${styles.colSecond} border-solid border-[1px] mt-2 mb-2 `}
        ></div>
        <div
          className={`${styles.funItemThird} flex flex-col gap-y-3  w-[25%]`}
        >
          <span className="text-[14px] text-gray-400">PRIVATE DRIVER</span>
          <div className="flex gap-x-2">
            <label>
              <Image src={human} alt="backTop" width={25} height={25} />
            </label>
            <div className="flex items-center gap-x-3 ">
              <div className="lowercase font-bold text-[14px] xl:text-xl">
                {privateD}
                <span> pax</span>
              </div>
              <div className="flex items-center gap-x-1 xl:gap-x-2">
                <FaPlus
                  className="border-[1px] p-[6px] text-3xl rounded-full cursor-pointer shadow-lg hover:bg-[#B34B1E] hover:text-white"
                  onClick={handleAddPrivate}
                />
                <FaMinus
                  className="border-[1px] p-[6px] text-3xl rounded-full cursor-pointer shadow-lg"
                  onClick={handleMinusP}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${styles.button} bg-[#B34B1E] flex items-center flex-col px-[24px] py-[12px] rounded-[4px] cursor-pointer hover:bg-red-500 `}
        >
          <div className="price text-[26px] font-bold text-white select-none">
            ${price}
          </div>
          <span className="text-[14px] font-bold text-white select-none">
            BOOK NOW
          </span>
        </div>
      </div>
      <div className={`${styles.menuExtra} hidden mb-0 `}>
        <div className={styles.itemExtra}>
          <AiFillHome />
          <span>Home</span>
        </div>
        <div className={styles.itemExtra}>
          <FaMotorcycle />
          <span>Tour</span>
        </div>
        <div className={styles.itemExtra}>
          <IoLogoWhatsapp />
          <span>WhatsApp</span>
        </div>
        <div className={styles.itemExtra}>
          <IoMdMail />
          <span>Book Now</span>
        </div>
        <div className={styles.itemExtra} onClick={toggleMenu}>
          <TiThMenu />
          <span>Menu</span>
        </div>
      </div>
      <div
        className={`${styles.menuResponsive} ${
          isMenuOpen ? "" : "hidden"
        } bg-white absolute w-full h-full z-50`}
      >
        <div>
          <div className="uppercase flex  flex-col  items-center gap-y-7 text-xl font-bold font-heavitas mt-36 ">
            <span>Home</span>
            <span>about us</span>
            <span>tour 3d3n</span>
            <span>tour 4n4d</span>
            <span>destination</span>
            <span>blog</span>
            <span>faq</span>
            <span>contact</span>
            <span>vietnam cheers hostel</span>
            <div className="flex gap-x-5">
              <FaFacebookF className="bg-[#b34b1e]  rounded-full p-[6px] w-10 h-10 text-white cursor-pointer hover:bg-red-500" />
              <FaYoutube className="bg-[#b34b1e]  rounded-full p-[6px] w-10 h-10 text-white cursor-pointer hover:bg-red-500" />
            </div>
          </div>
        </div>
        <IoCloseCircleSharp
          onClick={toggleMenu}
          className="w-14 h-14 absolute right-1 top-[50%] text-red-500"
        />
      </div>
    </div>
  );
};

export default Header;
