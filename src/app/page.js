import Banner from "@/components/banner/Banner";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import backTop from "@/assets/icons/backTop.svg";
import call from "@/assets/icons/Call.svg";
import wave from "@/assets/icons/wave.svg";
import Image from "next/image";
import Faq from "@/components/faq/Faq";
import Cheer from "@/components/cheerFamily/Cheer";

export default function Home() {
  return (
    <div className=" min-h-[100vh] m-auto flex flex-col relative z-[9999]">
      <Header />
      <Banner />
      <Cheer />
      <Faq />
      <div class="overflow-hidden">
        <Image class="max-w-none" src={wave} width="2500" height="150" alt="" />
      </div>
      <Footer />
      <div className="fixed bottom-20 right-10 flex flex-col items-center justify-center gap-y-5">
        <Image
          src={backTop}
          alt="backTop"
          width={30}
          height={50}
          className=" border-[#FC692A] border-[1px] border-solid rounded-t-full rounded-b-full pt-3 pb-3 px-2 cursor-pointer "
        />
        <div className="border-solid border-white bg-[#FC692A] rounded-full w-[50px] h-[50px] font-[900] text-[12px] text-white flex flex-col justify-center items-center cursor-pointer animate-pulse">
          <p>Book</p>
          <p>Now</p>
        </div>

        <Image
          src={call}
          alt="supportCall"
          width={40}
          height={40}
          className="cursor-pointer animate-bounce relative "
        />
      </div>
    </div>
  );
}
