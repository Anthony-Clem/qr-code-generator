import express from "express";
import bodyParser from "body-parser";
import qr from "qr-image";
import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import cors from "cors";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.post("/link", (req, res) => {
  const link = req.body.link_address;

  try {
    const qr_svg = qr.image(link, { type: "png" });
    const qrFilePath = path.join("../client/public/", "qr_img.png");
    const writeStream = fs.createWriteStream(qrFilePath);

    qr_svg.pipe(writeStream);
  } catch (error) {
    console.error("Unexpected error:", error);
    res.status(500).send("Unexpected error occurred");
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

module.exports = app;
