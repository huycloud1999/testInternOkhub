import React from "react";
import styles from "./card.module.scss";
import card from "@/assets/imgs/Card.png";
import Image from "next/image";
const Card = (img, name, text) => {
  return (
    <div className={styles.container}>
      <div className={styles.filter}></div>
      <div className={styles.content}>
        <div className="flex flex-col items-center border-b-2 w-full pb-4">
          <span className="text-[16px] font-bold">Ms. Thao Nguyen</span>
          <span className="text-[16px]">Tour Leader</span>
        </div>
        <span>
          We are always available whenever and wherever you need any guidance or
          question!
        </span>
      </div>
      <Image src={card} alt="avt" />
      <div className={styles.info}>
        <span className="text-[16px] font-bold">Ms. Thao Nguyen</span>
        <span className="text-[16px]">Tour Leader</span>
      </div>
    </div>
  );
};

export default Card;
