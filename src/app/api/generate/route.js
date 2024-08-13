import { NextResponse } from "next/server";
import QRCode from "qrcode";

export async function POST(req, res) {
  const { link } = await req.json();

  const generatedLink = await QRCode.toDataURL(link);

  return new NextResponse(
    JSON.stringify({
      message: "Image created",
      imageUrl: generatedLink,
    })
  );

  generateQR();
}
