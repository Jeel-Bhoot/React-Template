import React from "react";
import { Helmet } from "react-helmet";
import data from "../../Data/Data.json";
import "./style.css";

export default function About() {
  return (
    <>
      <Helmet>
        <title>{data.about.aboutTitle}</title>
        <meta name="description" content="React boilerplate About Page"></meta>
      </Helmet>
      <div className="flex flex-col justify-center pt-24 h-screen py-10 sm:m-auto sm:pt-20 p-5">
        <p className="mb-4 text-sm leading-6 font-semibold text-sky-400">
          {data.about.installation}
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-200">
          {data.about.header}
        </h1>
        <p className="mt-4 text-md max-w-md text-slate-400">
          {data.about.details}{" "}
        </p>
        <p className="mt-2 text-md text-slate-400">{data.about.detailsSecond}</p>
        <h3 className="text-md tracking-tight font-bold mt-6 text-slate-200">
          {data.about.installation}
        </h3>
        <span className="flex mt-2">
          <svg
            viewBox="0 -9 3 24"
            aria-hidden="true"
            className="flex-none overflow-visible text-slate-400 w-auto h-6 mr-3"
          >
            <path
              d="M0 0L3 3L0 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <code className="flex-auto text-slate-400">
            {data.about.iCommand}
          </code>
        </span>
        <h3 className="text-md tracking-tight font-bold mt-6 text-slate-200">
          {data.about.build}
        </h3>
        <span className="flex mt-2">
          <svg
            viewBox="0 -9 3 24"
            aria-hidden="true"
            className="flex-none overflow-visible text-slate-400 w-auto h-6 mr-3"
          >
            <path
              d="M0 0L3 3L0 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <code className="flex-auto text-slate-400">
            {data.about.buildCommand}
          </code>
        </span>
      </div>
    </>
  );
}
