"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import axios from "axios";
import { useAppStore } from "@/store";
import { toast } from "sonner";

const Form = () => {
  const [text, setText] = useState("");
  const { setUrl, url, setLoading } = useAppStore();

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("/api/generate", {
        link: text,
      });
      setUrl(response.data.imageUrl);
      toast.success(response.data.message);
    } catch (error) {
      console.error("Error generating QR code:", error);
      toast.error("Error while generating QR code");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className="w-full">
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full"
        placeholder="https://www.example.com"
      />
    </form>
  );
};

export default Form;
