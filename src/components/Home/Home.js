import React from "react";
import data from "../../Data/Data.json";
import "./style.css";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center pt-24 h-screen py-10 gap-5 sm:m-auto sm:pt-20 p-5">
      <h1 className="md:max-w-lg sm:w-full font-semibold text-white text-3xl sm:text-4xl tracking-tight">
        {data.main.header}
      </h1>
      <p className="mt-6 text-md md:max-w-lg sm:w-full mx-auto text-slate-400">
        {data.main.details}{" "}
        <code className="font-mono font-medium text-sky-500 text-sky-400">
          {data.main.reactRouter}
        </code>
        ,{" "}
        <code className="font-mono font-medium text-sky-400">
          {" "}
          {data.main.helmet}
        </code>{" "}
        and{" "}
        <code className="font-mono font-medium text-sky-400">
          {data.main.tailwind}
        </code>{" "}
        {data.main.details_second}
      </p>
    </div>
  );
}
