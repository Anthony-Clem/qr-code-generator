export const submitLink = async (
  event,
  text,
  setImg,
  qr,
  setDisplay,
  display
) => {
  event.preventDefault();
  if (!text.trim()) {
    if (display) {
      setDisplay(false);
    }
    return;
  }
  try {
    const response = await fetch("http://localhost:3000/link", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({ link_address: text }),
    });
    const responseBody = await response.text();
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${responseBody}`);
    }
    setImg(qr);
    setDisplay(true);
    console.log("Link submitted successfully");
  } catch (error) {
    console.error("Error submitting link:", error);
  }
};

export const storedImg = localStorage.getItem("qr");

export const downloadImg = (qrCode) => {
  fetch(qrCode).then((response) => {
    response.blob().then((blob) => {
      const fileURL = window.URL.createObjectURL(blob);

      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "QR-Code.png";
      alink.click();
    });
  });
};
