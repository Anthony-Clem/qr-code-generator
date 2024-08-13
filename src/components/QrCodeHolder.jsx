"use client";
import { useAppStore } from "@/store";
import React from "react";
import Spinner from "./Spinner";

const QrCodeHolder = () => {
  const { url, loading } = useAppStore();

  const downloadImg = async (url) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const fileURL = window.URL.createObjectURL(blob);

      const alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "QR-Code.png";
      alink.click();
    } catch (error) {
      console.log("Error while downloading the image:", error);
    }
  };

  return url ? (
    <>
      <div className="bg-[#2C7DFA] mt-5 w-full h-[288px] rounded-lg flex items-center justify-center overflow-hidden relative">
        <div className="size-[328px] absolute bg-[#3685FF] -top-[164px] right-[100px] rounded-full" />
        <div className="size-[328px] absolute bg-[#3685FF] top-[164px] left-[100px] rounded-full" />
        {loading ? (
          <Spinner />
        ) : (
          <img src={url} alt="" className="size-52 rounded-lg z-20" />
        )}
      </div>
      <button
        className="ml-auto bg-black py-3 px-4 rounded-full hover:scale-105 active:scale-100 transition font-bold text-white mt-5"
        onClick={() => downloadImg(url)}
      >
        Download Qr Code
      </button>
    </>
  ) : loading ? (
    <Spinner />
  ) : (
    <div className="my-8 text-lg font-bold">Enter a link to get started</div>
  );
};

export default QrCodeHolder;
