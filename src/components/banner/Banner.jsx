"use client";
import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./banner.module.scss";
import img1 from "@/assets/imgs/bannerBg1.jpg";
import img2 from "@/assets/imgs/bannerBg2.jpg";
import img3 from "@/assets/imgs/bannerBg3.jpg";
import img4 from "@/assets/imgs/bannerBg4.jpg";
import { Bounce, Zoom, Slide } from "react-awesome-reveal";
import icon1 from "@/assets/icons/map.svg";
import icon2 from "@/assets/icons/Group.svg";
import icon3 from "@/assets/icons/Group 2.svg";
import item1 from "@/assets/imgs/a.png";
import item2 from "@/assets/imgs/b.png";
import item3 from "@/assets/imgs/c.png";
import item4 from "@/assets/imgs/d.png";
import Image from "next/image";
import map from "@/assets/imgs/mapvn.avif";
import hoverBtn from "@/assets/icons/button.svg";
import { RxSpeakerLoud } from "react-icons/rx";
import { RxSpeakerOff } from "react-icons/rx";

const Banner = () => {
  const itemList = [
    { src: icon1, alt: "supportCall", width: 32, height: 32 },
    { src: icon2, alt: "hh2", width: 32, height: 32 },
    { src: icon3, alt: "hh3", width: 32, height: 32 },
  ];
  const [sound, setSound] = useState(false);
  const handleCick = () => {
    setSound(!sound);
  };
  const sliderRef = useRef(null);
  const slideIntervalRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    const scrollNext = () => {
      if (!slider) return;
      if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
        slider.scrollLeft = 0;
      } else {
        slider.scrollLeft += slider.clientWidth;
      }
    };

    slideIntervalRef.current = setInterval(scrollNext, 2000);

    const handleMouseEnter = () => {
      clearInterval(slideIntervalRef.current);
    };

    const handleMouseLeave = () => {
      slideIntervalRef.current = setInterval(scrollNext, 2000);
    };

    slider.addEventListener("mouseenter", handleMouseEnter);
    slider.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearInterval(slideIntervalRef.current);
      slider.removeEventListener("mouseenter", handleMouseEnter);
      slider.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  const videoRef = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const videoElement = videoRef.current;

    if (videoElement) {
      gsap.to(videoElement, {
        scrollTrigger: {
          trigger: videoElement,
          start: "top bottom",
          end: "top center",
          scrub: true,
          once: true,
        },
        scale: 1,
        duration: 2,
      });
    }
  }, [videoRef]);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const textElement1 = textRef1.current;
    const textElement2 = textRef2.current;
    const textElement3 = textRef3.current;

    if (textElement1 && textElement2 && textElement3) {
      gsap.to(textElement1, {
        scrollTrigger: {
          trigger: textElement1,
          start: "top bottom",
          end: "bottom center",
          scrub: true,
          markers: true,
          once: true,
        },
        color: "white",
        fontSize: "1rem",
      });

      gsap.to(textElement2, {
        scrollTrigger: {
          trigger: textElement2,
          start: "top bottom",
          end: "bottom center",
          scrub: true,
          once: true,
        },
        color: "white",
        fontSize: "3rem",
      });

      gsap.to(textElement3, {
        scrollTrigger: {
          trigger: textElement3,
          start: "top bottom",
          end: "bottom center",
          scrub: true,
          once: true,
        },
        color: "white",
        fontSize: " 2.9317rem",
      });
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.filter}></div>
      <div className={`${styles.bannerTop} `}>
        <Image
          src={img1}
          alt="test"
          className={`${styles.group} absolute opacity-[40%] w-auto h-[20%] -left-40 top-28 overflow-hidden rounded-xl -z-10`}
        />
        <Image
          src={img2}
          alt="test"
          className={`${styles.group} absolute opacity-[40%] w-auto h-[30%] -left-72 top-2/4 overflow-hidden rounded-xl -z-10`}
        />
        <Image
          src={img3}
          alt="test"
          className={`${styles.group} absolute opacity-[40%] w-auto h-[30%] -right-36 top-28 overflow-y-hidden rounded-xl -z-10 `}
        />
        <Image
          src={img4}
          alt="test"
          className={`${styles.group} absolute opacity-[40%] w-auto h-[20%] -right-40 top-2/4 overflow-y-hidden rounded-xl -z-10`}
        />
        <div
          className={`${styles.title} flex flex-col items-center pt-[112px] gap-y-8 `}
        >
          <div className=" flex flex-col items-center  text-white">
            <h3
              className={`${styles.titleW} font-heavitas text-[12px] text-[#B34B1E] `}
              ref={textRef1}
            >
              WELCOME TO
            </h3>
            <h1
              className={`${styles.titleH} font-heavitas text-[48px] text-[#B34B1E]`}
              ref={textRef2}
            >
              HA GIANG LOOP
            </h1>
          </div>
          <span
            className={`${styles.titleV} font-tomatoes text-[127px] text-[#FFD772]`}
            ref={textRef3}
          >
            VieTnam
          </span>
        </div>

        <div
          className={`${styles.info} z-50 absolute bottom-2 left-5  xl:flex  xl:w-full xl:justify-center xl:gap-x-6 xl:mb-7`}
        >
          {itemList.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-x-2"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
              />
              <div className="flex flex-col">
                <span className="text-white font-bold text-[16px]">300 km</span>
                <span className="text-white text-[12px]">North of HaNoi</span>
              </div>
            </div>
          ))}
        </div>
        <div
          className={`${styles.sound} z-50 absolute bottom-7 right-5 xl:right-28 border-solid border-2	p-2 border-white rounded-full `}
        >
          {sound ? (
            <RxSpeakerLoud
              className="text-white text-2xl font-bold "
              onClick={handleCick}
            />
          ) : (
            <RxSpeakerOff
              className="text-white text-2xl font-bold "
              onClick={handleCick}
            />
          )}
        </div>

        <video
          preload="none"
          autoPlay="true"
          loop
          playsInline
          muted
          className="mx-auto"
          ref={videoRef}
        >
          <source src="/video.mp4" />
        </video>
      </div>
      <div
        className={`${styles.bannerBot} grid grid-cols-2 min-h-[100vh] px-36 items-center`}
      >
        <div
          className={`${styles.botLeft}  flex flex-col justify-between gap-8`}
        >
          <div className={`${styles.leftTitle} flex flex-col gap-0`}>
            <h3 className="text-[16px] text-[#B34B1E] uppercase font-bold">
              Start with
            </h3>
            <Slide direction="up">
              <h1 className="text-[48px] text-[#B34B1E] uppercase font-bold">
                HA GIAng <br /> cheers tour
              </h1>
            </Slide>
          </div>
          <Image
            src={map}
            alt="map"
            className={`${styles.hiddenMap} mx-auto hidden`}
          />

          <div
            className={`${styles.main} grid grid-rows-2 grid-cols-2 gap-0`}
            ref={sliderRef}
          >
            <Image src={item1} alt="SUPPORT LOCAL - SUSTAINABLE TRAVEL" />
            <Image src={item2} alt="FREE 100% CANCELLATION" />
            <Image src={item3} alt="DAILY DEPARTURES" />
            <Image src={item4} alt="NO HAPPY - FULL REFUND" />
          </div>
          <div
            className={`${styles.text} text-[14px] flex flex-col gap-y-5 pt-5 text-[#727272]`}
          >
            <Slide direction="up">
              <span>
                The 3 Days Epic Ha giang Loop Tour with easy rider organized by
                <b className="text-[#2E2E2E]">Vietnam Cheers Hostel</b> is a
                must in Vietnam for any traveller. It is considered a highlight
                of South East Asia.
              </span>
              <p>
                Explore <b className="text-[#2E2E2E]">Ma Pi Leng</b>, one of The
                Big Four Passes in Vietnam, through thousands of conical
                limestone peaks as well as deep and meandering valleys. Party
                dinner, waterfall and local le at authentic{" "}
                <b className="text-[#2E2E2E]">Cheers Du Gia Homestay</b>. will
                be the unique experience also. This is designed for
                adventure-seekers — those who want to experience the biggest
                challenge Vietnam has to offer in a safe environment with our
                experienced easy riders.
              </p>
            </Slide>
          </div>
          <div className={`${styles.buttons} flex gap-x-3`}>
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
        <div className={styles.botRight}>
          <Slide direction="right">
            <Image src={map} alt="map" className="mx-auto" />
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Banner;
