import QrHolder from "./QrHolder";
import { useEffect, useState } from "react";
import qr from "/qr_img.png?url";
import Form from "./Form";
import { storedImg, submitLink } from "../lib/utlis";
import Header from "./Header";

export default function Holder() {
  const [text, setText] = useState(() => {
    const storedText = localStorage.getItem("text");
    return storedText || "";
  });

  const [img, setImg] = useState(() => {
    return storedImg || qr;
  });
  const [display, setDisplay] = useState(() => {
    return storedImg ? true : false;
  });

  const handleSubmit = (e) => {
    submitLink(e, text, setImg, qr, setDisplay, display);
  };

  useEffect(() => {
    localStorage.setItem("text", text);
  }, [text]);

  useEffect(() => {
    localStorage.setItem("qr", img);
  }, [img]);

  return (
    <div className="bg-white p-4 max-h-[850px] max-w-[320px] rounded-[20px] text-center mb-5">
      <Header />
      <Form text={text} setText={setText} handleSubmit={handleSubmit} />
      {display && <QrHolder qrCode={img} />}
    </div>
  );
}
