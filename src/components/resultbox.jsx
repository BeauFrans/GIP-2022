import React, { useEffect, useState } from "react";

export default function ResultBox() {
  return (
<div className="p-8 w-full">
                    
                    <div className="text-center mt-6">
                        <h1 className="text-2xl font-semibold text-white capitalize lg:text-3xl dark:text-white">
                            Results
                        </h1>

                    <p className="max-w-lg mx-auto mt-4 text-white">
                        Here you can view your results
                    </p>
                    </div>
                        <div className="relative top-10">
                        <a href="" className="group static block h-40 w-96">
                            <span className="inset-0"></span>

                            <div className="relative flex h-full bg-slate-700 rounded-md border-2 border-white">
                                <div
                                className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
                                >
                               

                                <h2 className="mt-6 text-xl font-medium sm:text-2xl text-white">Titel / Leerkracht</h2>
                                </div>

                                <div
                                className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
                                >
                                <h3 className="text-xl font-medium sm:text-2xl text-white">Titel / Leerkracht</h3>

                                <p className="text-sm sm:text-base text-white">
                                    Feedback op je resultaten van de leerkracht die horen bij deze evaluatie.
                                </p>

                                <p className="font-bold text-white">Lees meer</p>
                                </div>
                            </div>
                            </a>

                        </div>

                        
                </div>

  );
}