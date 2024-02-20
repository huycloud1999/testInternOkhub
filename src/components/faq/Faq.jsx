"use client";
import React, { useState } from "react";
import Image from "next/image";
import hoverBtn from "@/assets/icons/button.svg";
import { FaChevronDown } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

import styles from "./faq.module.scss";
const Faq = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedItemJ, setSelectedItemJ] = useState(null);
  const [active, setActive] = useState("nature");
  const acticeN = () => {
    setActive("nature");
  };
  const acticeJ = () => {
    setActive("journey");
  };
  const toggleDescription = (index) => {
    setSelectedItem((prevSelectedItem) =>
      prevSelectedItem === index ? null : index
    );
  };
  const toggleDescriptionJ = (index) => {
    setSelectedItemJ((prevSelectedItemJ) =>
      prevSelectedItemJ === index ? null : index
    );
  };

  const items = [
    {
      question: "1. What is the Ha Giang loop?",
      answer:
        "The Ha Giang Loop is a motorcycle loop around Ha Giang, one of the northernmost provinces of Vietnam and 310 km from Hanoi. The loop begins and ends in Ha Giang city, about 5 hours North of Hanoi. The loop takes about 3-4 days to complete and offers breathtaking mountain and cliff views. You will find here many of the foremost stunning stretches of road in Southeast Asia, all of which are surrounded by towering mountains, lush rice fields, and flowing rivers. Visitors are also fascinated by the ethnic group tribe culture that’s authentically visible as they travel by motorbikes.",
    },
    {
      question: "2. Why should I visit the Ha Giang Loop?",
      answer:
        "The Ha Giang Loop in Vietnam is a must-visit destination for travelers seeking adventure and stunning landscapes. Ha Giang Loop ranks 25th in New York Times’s list of 52 best places to travel in 2023. It is also considered as The Forgotten Wonder of the world. Ha Giang Loop still keeps its nature and wilderness because of lack of tourist development and has to offer remarkable natural beauty, epic mountain passes and unique tribe culture from various ethnic minority groups. So take your time, pack your bags and get ready for an unforgettable journey now before it is too late!.",
    },
    {
      question: "3. What should I bring?",
      answer:
        "The Ha Giang Loop in Vietnam is a must-visit destination for travelers seeking adventure and stunning landscapes. Ha Giang Loop ranks 25th in New York Times’s list of 52 best places to travel in 2023. It is also considered as The Forgotten Wonder of the world. Ha Giang Loop still keeps its nature and wilderness because of lack of tourist development and has to offer remarkable natural beauty, epic mountain passes and unique tribe culture from various ethnic minority groups. So take your time, pack your bags and get ready for an unforgettable journey now before it is too late!.",
    },
    {
      question: "4. Travel insurance",
      answer:
        "The Ha Giang Loop in Vietnam is a must-visit destination for travelers seeking adventure and stunning landscapes. Ha Giang Loop ranks 25th in New York Times’s list of 52 best places to travel in 2023. It is also considered as The Forgotten Wonder of the world. Ha Giang Loop still keeps its nature and wilderness because of lack of tourist development and has to offer remarkable natural beauty, epic mountain passes and unique tribe culture from various ethnic minority groups. So take your time, pack your bags and get ready for an unforgettable journey now before it is too late!.",
    },
  ];
  const itemsJ = [
    {
      question: "5.	How do we get there?",
      answer:
        "The Ha Giang Loop is a motorcycle loop around Ha Giang, one of the northernmost provinces of Vietnam and 310 km from Hanoi. The loop begins and ends in Ha Giang city, about 5 hours North of Hanoi. The loop takes about 3-4 days to complete and offers breathtaking mountain and cliff views. You will find here many of the foremost stunning stretches of road in Southeast Asia, all of which are surrounded by towering mountains, lush rice fields, and flowing rivers. Visitors are also fascinated by the ethnic group tribe culture that’s authentically visible as they travel by motorbikes.",
    },
    {
      question: "6.	How hard about the loop?",
      answer:
        "The Ha Giang Loop in Vietnam is a must-visit destination for travelers seeking adventure and stunning landscapes. Ha Giang Loop ranks 25th in New York Times’s list of 52 best places to travel in 2023. It is also considered as The Forgotten Wonder of the world. Ha Giang Loop still keeps its nature and wilderness because of lack of tourist development and has to offer remarkable natural beauty, epic mountain passes and unique tribe culture from various ethnic minority groups. So take your time, pack your bags and get ready for an unforgettable journey now before it is too late!.",
    },
    {
      question: "7.	What should I bring?",
      answer:
        "The Ha Giang Loop in Vietnam is a must-visit destination for travelers seeking adventure and stunning landscapes. Ha Giang Loop ranks 25th in New York Times’s list of 52 best places to travel in 2023. It is also considered as The Forgotten Wonder of the world. Ha Giang Loop still keeps its nature and wilderness because of lack of tourist development and has to offer remarkable natural beauty, epic mountain passes and unique tribe culture from various ethnic minority groups. So take your time, pack your bags and get ready for an unforgettable journey now before it is too late!.",
    },
    {
      question: "8.	Drive my own or with an easy rider?",
      answer:
        "The Ha Giang Loop in Vietnam is a must-visit destination for travelers seeking adventure and stunning landscapes. Ha Giang Loop ranks 25th in New York Times’s list of 52 best places to travel in 2023. It is also considered as The Forgotten Wonder of the world. Ha Giang Loop still keeps its nature and wilderness because of lack of tourist development and has to offer remarkable natural beauty, epic mountain passes and unique tribe culture from various ethnic minority groups. So take your time, pack your bags and get ready for an unforgettable journey now before it is too late!.",
    },
  ];
  return (
    <div className={`${styles.container} px-36 py-6`}>
      <div className={`${styles.title}`}>
        <h3 className="uppercase text-[12px] xl:text-[16px] text-[#B34B1E] font-extrabold">
          faq about
        </h3>
        <h1 className="uppercase text-[#B34B1E] text-[24px] xl:text-[64px] font-extrabold">
          the trip
        </h1>
        <div
          className={`${styles.butn} bg-[#B34B1E] rounded-lg relative px-[24px] py-[12px] z-20 w-fit`}
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
      </div>
      <div className={`${styles.nature} w-full xl:w-[35%]`}>
        <div>
          <h1 className="text-[26px] font-heavitas">NATURE</h1>
          <span className="text-[14px] text-[#727272] ">
            Browse our full service agency services and prices or contact us for
            custom quotes.
          </span>
        </div>
        <div className={styles.main}>
          {items.map((item, index) => (
            <div
              className={`${styles.item}`}
              key={index}
              onClick={() => toggleDescription(index)}
            >
              <h3
                className={`${
                  selectedItem === index
                    ? "border-[#B34B1E] border-b-[1px]"
                    : " border-b-[1px]"
                }`}
              >
                <button
                  className={`font-bold ${
                    selectedItem === index ? "text-[#B34B1E]" : ""
                  }`}
                >
                  {item.question}
                </button>
                <IoIosArrowUp
                  className={`${
                    selectedItem === index
                      ? "text-[#B34B1E] font-bold rotate-180 ease-in-out duration-[0.7s]"
                      : "ease-in-out duration-[0.7s]"
                  }`}
                />
              </h3>
              <div
                className={`${styles.description} ${
                  selectedItem === index
                    ? "ease-in-out duration-[0.7s]"
                    : "hidden ease-in-out duration-1000"
                }`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={`${styles.journey} w-full xl:w-[35%]`}>
        <div>
          <h1 className="text-[26px] font-heavitas">JOURNEY</h1>
          <span className="text-[14px] text-[#727272]">
            Find inspiration and discover amazing knowledge for successful site
            building.
          </span>
        </div>
        <div className={styles.mainJ}>
          {itemsJ.map((item, index) => (
            <div
              className={`${styles.itemJ}`}
              key={index}
              onClick={() => toggleDescriptionJ(index)}
            >
              <h3
                className={`${
                  selectedItemJ === index
                    ? "border-[#B34B1E] border-b-[1px]"
                    : " border-b-[1px]"
                }`}
              >
                <button
                  className={`font-bold ${
                    selectedItemJ === index ? "text-[#B34B1E]" : ""
                  }`}
                >
                  {item.question}
                </button>
                <IoIosArrowUp
                  className={`${
                    selectedItemJ === index
                      ? "text-[#B34B1E] font-bold rotate-180 ease-in-out duration-[0.7s]"
                      : "ease-in-out duration-[0.7s]"
                  }`}
                />
              </h3>
              <div
                className={`${styles.descriptionJ} ${
                  selectedItemJ === index
                    ? "ease-in-out duration-[0.7s]"
                    : "hidden ease-in-out duration-1000"
                }`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className={`${styles.faqMobile} md:hidden flex flex-col gap-y-5 mt-4`}
      >
        <div className="menu flex  justify-around text-[16px] font-extrabold w-full">
          <h3
            className={
              active === "nature"
                ? "text-[#B34B1E] border-b-2 border-[#B34B1E] w-full flex justify-center"
                : " w-full flex justify-center text-[#B7B7B7]"
            }
            onClick={acticeN}
          >
            NATURE
          </h3>
          <h3
            className={
              active === "journey"
                ? "text-[#B34B1E] border-b-2 border-[#B34B1E] w-full flex justify-center"
                : " w-full flex justify-center text-[#B7B7B7] "
            }
            onClick={acticeJ}
          >
            JOURNEY
          </h3>
        </div>
        {active === "nature" ? (
          <div>
            <p className="text-[14px] text-[#727272] pb-2">
              Browse our full service agency services and prices or contact us
              for custom quotes.
            </p>
            <div className={styles.main}>
              {items.map((item, index) => (
                <div
                  className={`${styles.item}`}
                  key={index}
                  onClick={() => toggleDescription(index)}
                >
                  <h3
                    className={`${
                      selectedItem === index
                        ? "border-[#B34B1E] border-b-[1px]"
                        : " border-b-[1px]"
                    }`}
                  >
                    <button
                      className={`font-bold ${
                        selectedItem === index ? "text-[#B34B1E]" : ""
                      }`}
                    >
                      {item.question}
                    </button>
                    <IoIosArrowUp
                      className={`${
                        selectedItem === index
                          ? "text-[#B34B1E] font-bold rotate-180 ease-in-out duration-[0.7s]"
                          : "ease-in-out duration-[0.7s]"
                      }`}
                    />
                  </h3>
                  <div
                    className={`${styles.description} ${
                      selectedItem === index
                        ? "ease-in-out duration-[0.7s]"
                        : "hidden ease-in-out duration-1000"
                    }`}
                  >
                    {item.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <p className="text-[14px] text-[#727272] pb-2">
              Today is a beautiful day and Happiness isn’t a destination, it’s a
              journey we are on.
            </p>
            <div className={styles.mainJ}>
              {itemsJ.map((item, index) => (
                <div
                  className={`${styles.itemJ}`}
                  key={index}
                  onClick={() => toggleDescriptionJ(index)}
                >
                  <h3
                    className={`${
                      selectedItemJ === index
                        ? "border-[#B34B1E] border-b-[1px]"
                        : " border-b-[1px]"
                    }`}
                  >
                    <button
                      className={`font-bold ${
                        selectedItemJ === index ? "text-[#B34B1E]" : ""
                      }`}
                    >
                      {item.question}
                    </button>
                    <IoIosArrowUp
                      className={`${
                        selectedItemJ === index
                          ? "text-[#B34B1E] font-bold rotate-180 ease-in-out duration-[0.7s]"
                          : "ease-in-out duration-[0.7s]"
                      }`}
                    />
                  </h3>
                  <div
                    className={`${styles.descriptionJ} ${
                      selectedItemJ === index
                        ? "ease-in-out duration-[0.7s]"
                        : "hidden ease-in-out duration-1000"
                    }`}
                  >
                    {item.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Faq;
