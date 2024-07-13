import { downloadImg } from "../lib/utlis";
import Circle from "./Circle";

export default function QrHolder({ qrCode }) {
  return (
    <div className="h-[288px] max-w-[288px] px-2 bg-[#2C7DFA] rounded-[10px] flex items-center justify-center relative overflow-hidden">
      <Circle y_position="top" x_position="left" />
      <Circle y_position="bottom" x_position="right" />
      <img
        src={qrCode}
        alt=""
        className="size-40 mb-5 z-10 rounded-xl overflow-hidden"
      />
      <button
        className="absolute bottom-3 text-white/75 hover:text-white transition border border-white px-3 py-2 rounded-full"
        onClick={() => {
          downloadImg(qrCode);
        }}
      >
        Download QR Code
      </button>
    </div>
  );
}
