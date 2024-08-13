import { NextResponse } from "next/server";
import QRCode from "qrcode";
import { writeFile } from "fs/promises";

export async function POST(req, res) {
  const { link } = await req.json();

  const generatedLink = await QRCode.toDataURL(link);

  const base64Data = generatedLink.split(",")[1];

  const buffer = Buffer.from(base64Data, "base64");

  const timestamp = Date.now();
  const fileName = `${timestamp}.png`;
  const path = `./public/${fileName}`;

  await writeFile(path, buffer);

  const imageUrl = `/${fileName}`;

  return new NextResponse(
    JSON.stringify({
      message: "Image created",
      imageUrl,
    })
  );

  generateQR();
}
