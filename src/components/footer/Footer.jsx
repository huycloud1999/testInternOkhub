"use client";
import React from "react";
import styles from "./footer.module.scss";
import Image from "next/image";
import logo from "@/assets/imgs/logo-footer.avif";
import phone from "@/assets/icons/phone.svg";
import mail from "@/assets/icons/mail.svg";
import home from "@/assets/icons/home.svg";
import world from "@/assets/icons/world.svg";
import moto from "@/assets/icons/moto.svg";
import locationfooter from "@/assets/icons/locationfoot.svg";
import { Slide } from "react-awesome-reveal";
const Footer = () => {
  const footerItems = [
    {
      title: "CONTACT US",
      content: [
        {
          icon: <Image src={phone} alt="phone" />,
          text: "+84 98 3333 986 (Linnete)",
        },
        {
          icon: <Image src={phone} alt="phone" />,
          text: "+84 85 668 0000 (Kevin)",
        },
        {
          icon: <Image src={mail} alt="phone" />,
          text: "Cheershostel1@gmail.com",
        },
        {
          icon: <Image src={home} alt="phone" />,
          text: "5 Au Trieu, Hoan Kiem, Ha Noi",
        },
        {
          icon: <Image src={world} alt="phone" />,
          text: "Vietnam Cheers Hostel Official Site",
        },
      ],
    },
    {
      title: "ALL TOUR",
      content: [
        {
          icon: <Image src={moto} alt="phone" />,
          text: "HA GIANG LOOP TOUR (4D4N)",
        },
        {
          icon: <Image src={moto} alt="phone" />,
          text: "HA GIANG LOOP TOUR (3D3N)",
        },
      ],
    },
    {
      title: "CHEERS TOURS",
      content: [
        {
          icon: <Image src={locationfooter} alt="phone" />,
          text: "Ha Long Bay on Social Cruise",
        },
        {
          icon: <Image src={locationfooter} alt="phone" />,
          text: "Sapa Trekking Tour",
        },
        {
          icon: <Image src={locationfooter} alt="phone" />,
          text: "Package Tour",
        },
      ],
    },
  ];
  return (
    <Slide triggerOnce="true">
      <div
        className={`${styles.container} px-1 md:px-36 md:pt-40 flex flex-col items-center pt-5  md:flex md:items-start md:flex-row md:justify-between bg-yellow-50 `}
      >
        <div className={styles.logo}>
          <Image src={logo} alt="logo" className="" />
        </div>
        <div className="right md:flex md:justify-around md:w-3/4 flex flex-col pt-4  md:flex-row text-center md:text-left ">
          {footerItems.map((item, index) => (
            <div key={index} className="flex flex-col gap-y-5 ">
              <h3 className="text-[14px] font-bold">{item.title}</h3>
              <ul className="md:flex md:flex-col md:gap-y-5 ">
                {item.content.map((contentItem, contentIndex) => (
                  <li
                    key={contentIndex}
                    className="md:flex md:items-center md:gap-x-2 flex gap-x-2 items-center text-center pb-2  "
                  >
                    <span className={contentItem.icon}>{contentItem.icon}</span>
                    <span className="text-[14px] text-[#727272]">
                      {contentItem.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
};

export default Footer;
