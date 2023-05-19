import React, { useEffect, useState } from "react";

export default function ResultBox(props) {
  return (
    <div className="p-8 w-full">
      <div className="relative top-10">
        <a href="" className="group static block h-40 w-96">
          <div className="relative flex h-full  bg-slate-800 rounded-md ">
            <img src={props.image} alt="" />
            <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
              <h2 className="mt-6 text-xl font-medium sm:text-2xl text-white">
                Titel / Leerkracht
              </h2>
            </div>

            <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
              <h3 className="text-xl font-medium sm:text-2xl text-white">
                Titel / Leerkracht
              </h3>

              <p className="text-sm sm:text-base text-white">
                Feedback op je resultaten van de leerkracht die horen bij deze
                evaluatie.
              </p>

              <p className="font-bold text-white">Lees meer</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
