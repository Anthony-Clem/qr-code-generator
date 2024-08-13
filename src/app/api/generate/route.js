import { NextResponse } from "next/server";
import QRCode from "qrcode";

export async function POST(req, res) {
  try {
    const { link } = await req.json();

    const imageUrl = await QRCode.toDataURL(link);

    return new NextResponse(
      JSON.stringify({
        message: "QR code successfully generated",
        imageUrl,
      })
    );
  } catch (error) {
    return new NextResponse(JSON.stringify({ error }));
  }
}
