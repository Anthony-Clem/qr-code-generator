import React from "react";

export default function Form({ text, setText, handleSubmit }) {
  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <input
        name="link_address"
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        className="w-full p-2 border rounded-md outline-none focus:border-[#2C7DFA] transition"
      />
      <button
        type="submit"
        className="w-full p-2 mt-2 bg-blue-500 text-white rounded-md hover:bg-blue-500/80 transition"
      >
        Generate QR Code
      </button>
    </form>
  );
}
