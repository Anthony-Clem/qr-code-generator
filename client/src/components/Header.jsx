import React from "react";

export default function Header() {
  return (
    <header>
      <h1 className="font-bold text-[#1F314F] text-2xl mb-2">
        Enter a link to generate your{" "}
        <span className="text-blue-500 underline">QR</span> code
      </h1>
      <p className="text-sm text-[#7D889E] mb-2">
        If a word or phrase is entered a link to a search of that word or phrase
        will be generated.
      </p>
    </header>
  );
}
