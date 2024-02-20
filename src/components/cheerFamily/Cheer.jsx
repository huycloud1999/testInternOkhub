"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./cheer.module.scss";
import teamImg from "@/assets/imgs/team.png";
import teamImg2 from "@/assets/imgs/team2.jpg";
import teamImg3 from "@/assets/imgs/team3.jpg";
import human from "@/assets/icons/human.svg";
import moto from "@/assets/icons/moto.svg";
import check from "@/assets/icons/check.svg";
import teamImg4 from "@/assets/imgs/team4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import hoverBtn from "@/assets/icons/button.svg";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import Card from "../Card/Card";
const Cheer = () => {
  const [activeMenu, setActiveMenu] = useState("Rider team");
  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentSlideIndex(swiper.realIndex);
  };
  const cheerItem = [
    {
      img: <Image src={teamImg} alt="phone" width={750} height={570} />,
      team: "H’MONG TEAM",
      description:
        "Blown away by our Tanzania safari, I never expected it to be that good — it totally exceeded my expectations and was all hassle free. Our guide was absolutely amazing too. Have re-booked and cannot wait for next year! Blown away by our Tanzania safari, I never expected it to be that good — it totally exceeded my expectations and was all hassle free. Our guide was absolutely amazing too. Have re-booked and cannot wait for .Our guide was absolutely amazing too. ",
      groupSize: 15,
      transport: "Motobike",
      completeDay: 154,
    },
    {
      img: <Image src={teamImg2} alt="phone" width={750} height={570} />,
      team: "KIM THACH TEAM",
      description:
        "Now, thanks to you who brought tourism to our area, we are provided with new opportunities to earn sustainable incomes, helping our families and our communities to prosper. With every trip experience, we are not just your Easyrider, but also your travel buddies. We are looking forward to meeting you! ",
      groupSize: 9,
      transport: "Motobike",
      completeDay: 134,
    },
    {
      img: <Image src={teamImg3} alt="phone" width={750} height={570} />,
      team: "TAY TEAM",
      description:
        "Blown away by our Tanzania safari, I never expected it to be that good — it totally exceeded my expectations and was all hassle free. Our guide was absolutely amazing too. Have re-booked and cannot wait for next year! Blown away by our Tanzania safari, I never expected it to be that good — it totally exceeded my expectations and was all hassle free. Our guide was absolutely amazing too. Have re-booked and cannot wait for .Our guide was absolutely amazing too. ",
      groupSize: 15,
      transport: "Motobike",
      completeDay: 154,
    },
    {
      img: <Image src={teamImg4} alt="phone" width={750} height={570} />,
      team: "DAO TEAM",
      description:
        "Blown away by our Tanzania safari, I never expected it to be that good — it totally exceeded my expectations and was all hassle free. Our guide was absolutely amazing too. Have re-booked and cannot wait for next year! Blown away by our Tanzania safari, I never expected it to be that good — it totally exceeded my expectations and was all hassle free. Our guide was absolutely amazing too. Have re-booked and cannot wait for .Our guide was absolutely amazing too. ",
      groupSize: 15,
      transport: "Motobike",
      completeDay: 154,
    },
  ];

  return (
    <div className={`${styles.container} md:px-36 md:py-5 px-4 py-5`}>
      <div className={styles.header}>
        <div className="title uppercase">
          <span className="md:text-[16px] font-extrabold text-[#b34b1e] text-[12px]">
            cheer
          </span>
          <h3 className="md:text-[64px] font-extrabold text-[#b34b1e] text-[24px]">
            FAmily
          </h3>
        </div>
        <div className={`${styles.menu} uppercase flex gap-x-5`}>
          <div
            className={`${
              activeMenu === "Rider team" ? styles.active : styles.noActive
            }`}
            onClick={() => handleMenuClick("Rider team")}
          >
            Rider team
          </div>
          <div
            className={`${
              activeMenu === "Special list" ? styles.active : styles.noActive
            }`}
            onClick={() => handleMenuClick("Special list")}
          >
            Special list
          </div>
          <div
            className={`${
              activeMenu === "localhost" ? styles.active : styles.noActive
            }`}
            onClick={() => handleMenuClick("localhost")}
          >
            localhost
          </div>
          <div
            className={`${
              activeMenu === "tour leader" ? styles.active : styles.noActive
            }`}
            onClick={() => handleMenuClick("tour leader")}
          >
            tour leader
          </div>
        </div>
      </div>
      <div className={styles.content}>
        {activeMenu === "Rider team" && (
          <div className={styles.item}>
            <div className={styles.info}>
              <div className="name md:text-[26px] text-[22px] md:pt-0 pt-2 text-[#727272] font-bold ">
                {cheerItem[currentSlideIndex]?.team}
              </div>
              <div className="description md:text-[14px] text-[#727272]">
                {cheerItem[currentSlideIndex]?.description}
              </div>
              <div className="infoDetail w-full flex flex-col gap-y-2 md:text-[14px] text-[12px] pt-3">
                <span className="groupSize flex gap-x-2 items-center  text-[#727272]">
                  <Image src={human} alt="" className=" w-[16px] h-[16px] " />
                  <span className="text-[#B34B1E]">Group size:</span>
                  {cheerItem[currentSlideIndex]?.groupSize}
                  <span>members</span>
                </span>
                <span className="transport flex gap-x-2 items-center text-[#727272] ">
                  <Image src={moto} alt="" className=" w-[16px] h-[16px]" />
                  <span className="text-[#B34B1E]">Transport:</span>
                  {cheerItem[currentSlideIndex]?.transport}
                </span>
                <span className="completeDay flex gap-x-2 items-center text-[#727272]">
                  <Image
                    src={check}
                    alt=""
                    className=" w-[16px] h-[16px] text-[#727272]"
                  />
                  <span className="text-[#B34B1E]">Trip completed:</span>
                  {cheerItem[currentSlideIndex]?.completeDay}
                  <span>trips</span>
                </span>
              </div>
              <div className={styles.buttons}>
                <div
                  className={`${styles.butn} bg-[#B34B1E] rounded-lg relative px-[24px] py-[12px] z-20`}
                >
                  <span className="text-[13px] font-bold text-white uppercase z-10">
                    Book now
                  </span>
                  <Image
                    src={hoverBtn}
                    alt="a"
                    className={`${styles.bg} absolute left-0 top-[7px] -z-10 opacity-0`}
                  />
                </div>
                <div
                  className={`${styles.butnSecond} bg-white rounded-lg relative px-[24px] py-[12px] z-10 w-fit border-[1px] boder-[#B34B1E]`}
                >
                  <span className="text-[13px] font-bold text-[#B34B1E] uppercase z-30 ">
                    read more
                  </span>
                  <Image
                    src={hoverBtn}
                    alt="a"
                    className={`${styles.bg} absolute left-0 top-[7px] -z-20 opacity-0 `}
                  />
                </div>
              </div>
            </div>
            <div className={`${styles.carousel}`}>
              <Swiper
                navigation={true}
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                onSlideChange={(swiper) => handleSlideChange(swiper)}
                onSlideChangeTransitionEnd={(swiper) =>
                  handleSlideChange(swiper)
                }
                className="w-full h-full max-w-[800px] max-h-[450px] z-30"
              >
                {cheerItem.map((item, index) => (
                  <SwiperSlide key={index} className="">
                    <div className="flex gap-x-6">
                      <div style={{ flex: 1 }}>{item.img}</div>
                      <div className="md:basis-1/5 hidden">
                        {cheerItem[(index + 1) % cheerItem.length].img}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        )}
        {activeMenu === "Special list" && (
          <div className="pt-5">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              loop={true}
              spaceBetween={100}
              onSlideChange={(swiper) => handleSlideChange(swiper)}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 4,
                },
              }}
              className="w-full"
            >
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
            </Swiper>
          </div>
        )}
        {activeMenu === "localhost" && (
          <div className="pt-5">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              loop={true}
              spaceBetween={100}
              onSlideChange={(swiper) => handleSlideChange(swiper)}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 4,
                },
              }}
              className="w-full"
            >
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
            </Swiper>
          </div>
        )}
        {activeMenu === "tour leader" && (
          <div className="pt-5">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              loop={true}
              spaceBetween={100}
              onSlideChange={(swiper) => handleSlideChange(swiper)}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 4,
                },
              }}
              className="w-full"
            >
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
            </Swiper>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cheer;
