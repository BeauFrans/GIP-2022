import React, { useEffect, useState } from "react";

export default function ResultBox() {
  return (
<div className="p-8 w-full">
                    <nav aria-label="Breadcrumb" className="flex">
                        <ol
                            role="list"
                            className="flex overflow-hidden rounded-lg border-none bg-blue-700 text-white"
                        >
                            <li className="flex items-center">
                                <a
                                    href="#"
                                    className="flex h-10 items-center bg-blue-700 px-4 transition "
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor"
                                        class="w-6 h-6">
                                        <path stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                                    </svg>
                                    <span className="ml-1.5 text-xs font-medium"> Results </span>
                                </a>
                            </li>

                            <li className="relative flex items-center">
                                <span
                                    className="absolute inset-y-0 -left-px h-10 w-4 bg-blue-700  [clip-path:_polygon(0_0,_0%_100%,_100%_50%)]"
                                >
                                </span>


                            </li>
                        </ol>
                    </nav>
                    <div className="text-center mt-6">
                        <h1 className="text-2xl font-semibold text-white capitalize lg:text-3xl dark:text-white">
                            Results
                        </h1>

                    <p className="max-w-lg mx-auto mt-4 text-white">
                        Here you can view your results
                    </p>
                    </div>
                        <div className="relative top-10">
                        <a href="" className="group static block h-80 w-80">
                            <span className="inset-0"></span>

                            <div
                                className="relative flex h-full transform items-end bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
                            >
                                <div
                                className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
                                >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-10 w-10 sm:h-12 sm:w-12"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>

                                <h2 className="mt-4 text-xl font-medium sm:text-2xl">Titel / Leerkracht</h2>
                                </div>

                                <div
                                className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
                                >
                                <h3 className="mt-4 text-xl font-medium sm:text-2xl">Titel / Leerkracht</h3>

                                <p className="mt-4 text-sm sm:text-base">
                                    Feedback op je resultaten van de leerkracht die horen bij deze evaluatie.
                                </p>

                                <p className="mt-8 font-bold">Lees meer</p>
                                </div>
                            </div>
                            </a>

                        </div>

                        
                </div>

  );
}