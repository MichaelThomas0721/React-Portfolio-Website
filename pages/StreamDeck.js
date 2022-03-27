import React, { useState, useEffect } from "react";
import axios from "axios";
const https = require("https");
import styles from "./../styles/streamdeck.module.css";
import Head from "next/head";

export default function StreamDeck() {
  const [file, setFile] = useState("");

  function FileUpload() {
    //const url = 'https://localhost:4269/greeting';
    const url = "https://93.188.164.24:4269/greeting";
    const formData = new FormData();
    formData.append("file", file);
    const config = {
      responseType: "blob",
      headers: {
        "content-type": "multipart/form-data",
        "Access-Control-Allow-Origin": "true",
        httpsAgent: new https.Agent({
          rejectUnauthorized: false,
        }),
      },
    };

    if (file) {
      const plsWait = document.getElementById("waitHeader");
      plsWait.style.display = "block";
      const plsUpload = document.getElementById("uploadHeader");
      plsUpload.style.display = "none";

      axios
        .post(url, formData, config)
        .then((response) => {
          const url = window.URL.createObjectURL(
            new Blob([response.data], { type: "application/zip" })
          );
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "GifFrame_0.zip"); //or any other extension
          document.body.appendChild(link);
          link.click();
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      const plsUpload = document.getElementById("uploadHeader");
      plsUpload.style.display = "block";
    }
  }

  useEffect(() => {
    const dragText = document.getElementById("header");
    const dragArea = document.getElementById("drag_area");

    dragArea.addEventListener("dragover", (event) => {
      event.preventDefault();
      dragText.textContent = "Release to Upload";
      dragArea.style.borderColor = "#66FCF1";
    });

    dragArea.addEventListener("dragleave", () => {
      dragText.textContent = "Drag & Drop";
      dragArea.style.borderColor = "#e3e3e3";
    });

    dragArea.addEventListener("drop", (event) => {
      event.preventDefault();
      dragText.textContent = "File Received";
      dragArea.style.borderColor = "#00FF00";
      setFile(event.dataTransfer.files[0]);
    });
  }, [setFile]);

  return (
    <div className={styles.parentBox}>
      <Head>
        <title>Stream Deck Wallpaper</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <h1 className={styles.WallpaperHeader}>
        Stream Deck Wallpaper Generator
      </h1>
      <br></br>
      <div className={styles.fileBox}>
        <h3>Upload your file</h3>
        <div className={styles.drag_area} id="drag_area">
          <span className={styles.header} id="header">
            {" "}
            Drag & Drop{" "}
          </span>
          <span className={styles.support}>Suports: Gif</span>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.submitGifButton} onClick={FileUpload}>
          Process and Download!
        </button>
        <h1 id="waitHeader" style={{ display: "none" }}>
          Your download will begin soon
        </h1>
        <h1 id="uploadHeader" style={{ display: "none" }}>
          Please upload a file
        </h1>
      </div>
    </div>
  );
}
