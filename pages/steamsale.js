import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import saleData from "./api/data.json";

export default function SteamSale() {
  const num = useRef(0);
  const [data, setData] = useState();

  useEffect(() => {
    FetchSteam(num);
  }, []);

  async function FetchSteam() {
    let dropdown = document.querySelector("select");
    dropdown.value = num.current + 1;
    let APPID = GetAPPID(saleData.winter2022[num.current][0]);
    const response = await fetch("/api/steamapi", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        APPID: APPID,
        cc: "us",
      }),
    }).then((res) => {
      return res.json();
    });
    console.log(response.data.data);
    setData(response.data.data);
  }

  function Next() {
    num.current++;
    if (num.current > saleData.winter2022.length - 1) {
      num.current = 0;
    }
    FetchSteam();
  }

  function Previous() {
    num.current--;
    if (num.current < 0) {
      num.current = saleData.winter2022.length - 1;
    }
    FetchSteam();
  }

  function GetAPPID(url) {
    let temp = url.split("/app/");
    let temp2 = temp[1].split("/");
    return temp2[0];
  }

  function ChangePage(e) {
    num.current = e.target.value - 1;
    FetchSteam();
  }

  return (
    <div className="bg-black min-h-screen">
      <div className="flex flex-col">
        <div className="flex flex-row">
          <select
            className="text-xl text-white w-fit bg-slate-600"
            onChange={(e) => ChangePage(e)}
          >
            {saleData.winter2022.map((item, index) => {
              return (
                <option value={index + 1} key={`options.${index}`}>
                  {index + 1}
                </option>
              );
            })}
          </select>
          <p className="text-white text-xl">of {saleData.winter2022.length}</p>
        </div>

        <div className="flex flex-row w-fit m-auto">
          <button onClick={Previous}>
            <AiOutlineArrowLeft className="text-white text-4xl" />
          </button>

          <h1 className="text-center text-white text-3xl font-semibold">
            {data ? data.name : "Loading"}
          </h1>
          <button onClick={Next}>
            <AiOutlineArrowRight className="text-white text-4xl" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl m-auto px-12">
        <div className="relative w-1/2 h-96 m-auto">
          <Image
            src={data ? data.header_image : "/autoProject.gif"}
            alt="game image"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <p className="text-white text-xl">
          Price:{" "}
          {data
            ? data.price_overview
              ? data.price_overview.final_formatted
              : ""
            : ""}
        </p>
        <p className="text-white text-xl">
          Original Price:{" "}
          {data
            ? data.price_overview
              ? data.price_overview.initial_formatted
              : ""
            : ""}
        </p>
        <p className="text-white text-xl">
          Discount:{" "}
          {data
            ? data.price_overview
              ? data.price_overview.discount_percent
              : ""
            : ""}
          %
        </p>
        <p className="text-white text-xl">
          Release Date On Steam:{" "}
          {data ? (data.release_date ? data.release_date.date : "") : ""}
        </p>
        <a
          className="text-white text-xl"
          href={saleData.winter2022[num.current][0]}
          target="_blank"
          rel="noopener noreferrer"
        >
          URL
        </a>
        <br />
        {saleData.winter2022[num.current][1] ? (
          <p className="text-white text-xl">
            Michael&apos;s Description: {saleData.winter2022[num.current][1]}
          </p>
        ) : (
          ""
        )}
        {saleData.winter2022[num.current][2] ? (
          <p className="text-white text-xl">
            Will I Buy It: {saleData.winter2022[num.current][2]}
          </p>
        ) : (
          ""
        )}
        {saleData.winter2022[num.current][3] ? (
          <p className="text-white text-xl">
            Michael&apos;s Rating: {saleData.winter2022[num.current][3]}
          </p>
        ) : (
          ""
        )}
        {saleData.winter2022[num.current][4] ? (
          <p className="text-white text-xl">
            Side Notes: {saleData.winter2022[num.current][4]}
          </p>
        ) : (
          ""
        )}
        <br />
        <p
          className="text-white text-xl"
          dangerouslySetInnerHTML={{
            __html: data ? data.about_the_game : "Lorem ipsum",
          }}
        ></p>
        <p className="pt-12 text-white text-4xl font-bold">LIST OF GAMES</p>
        {saleData.winter2022.map((item, index) => {
          return (
            <>
              <a
                className="text-white text-xl"
                href={item[0]}
                target="_blank"
                rel="noopener noreferrer"
                key={`saledata.${index}`}
              >
                {item[0]}
              </a>
              <br />
            </>
          );
        })}
        <p className="pt-12 text-white text-3xl"></p>
      </div>
    </div>
  );
}