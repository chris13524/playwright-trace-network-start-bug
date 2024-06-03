"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [gotResponse, setGotResponse] = useState(false);
  useEffect(() => {
    console.log("requesting...");
    fetch("/api").then(res => {
      res.json().then(data => {
        console.log("response: ", data);
        setGotResponse(true);
      });
    });
  }, []);

  if (gotResponse) {
    return <div>Got response</div>;
  } else {
    return <div>Loading...</div>;
  }
}
