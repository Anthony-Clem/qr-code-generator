import React from "react";
import Form from "./Form";
import QrCodeHolder from "./QrCodeHolder";

const Holder = () => {
  return (
    <div className="w-[320px] bg-white rounded-2xl flex flex-col items-center p-5">
      <h1 className="font-bold text-2xl mb-3">QR Code Generator</h1>
      <p className="text-xs opacity-60 mb-3">
        Enter a link or phrase below to generate your code
      </p>
      <Form />
      <QrCodeHolder />
      <p className="mr-auto mt-2 text-xs text-muted-foreground">
        &copy; Anthony Clement
      </p>
    </div>
  );
};

export default Holder;
