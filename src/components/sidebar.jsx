import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "../firebase"

export default function Sidebar() {
    const [mail, setMail] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setMail(user.email);
                setName(user.displayName);
            }
        })
    }, [])

    return (
        <div>
            <div className="flex h-screen flex-col justify-between border-r border-slate-600 bg-slate-800">
                <div className="px-4 py-6">
                    <div className='border-b border-slate-600 w-full' />
                    <div className='flex items-center py-2'>
                        <p className='text-sm font-semibold text-gray-200'>{mail}</p>
                    </div>
                    <div className='border-b border-slate-600 w-full' />
                    <nav className="mt-6 flex flex-col space-y-1">
                        <a
                            href="#"
                            className="flex items-center rounded-lg bg-slate-700 px-4 py-2 text-gray-200 hover:bg-slate-600"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 opacity-75"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                />
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>

                            <span className="ml-3 text-sm font-medium"> Homepagina </span>
                        </a>

                        <details className="group">
                            <summary
                                className="flex cursor-pointer items-center rounded-lg px-4 py-2 text-gray-200 hover:bg-slate-600  bg-slate-700"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 opacity-75"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>

                                <span className="ml-3 text-sm font-medium"> Mijn evaluaties </span>

                                <span
                                    className="ml-auto shrink-0 transition duration-300 group-open:-rotate-180"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </span>
                            </summary>

                            <nav aria-label="Teams Nav" className="mt-1.5 ml-8 flex flex-col">
                                <a
                                    href="#"
                                    className="flex items-center rounded-lg px-4 py-2 text-gray-200 hover:bg-slate-600 "
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 opacity-75"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                                        />
                                    </svg>

                                    <span className="ml-3 text-sm font-medium"> (Gemaakte evaluatie komt hier) </span>
                                </a>

                                <a
                                    href="#"
                                    className="flex items-center rounded-lg px-4 py-2 text-gray-200 hover:bg-slate-600 "
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 opacity-75"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                    </svg>


                                </a>
                            </nav>
                        </details>

                        <a
                            href="#"
                            className="flex items-center rounded-lg px-4 py-2 text-gray-200 hover:bg-slate-600  bg-slate-700"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 opacity-75"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                                />
                            </svg>
        
                            <span className="ml-3 text-sm font-medium hover:bg-slate-600"> Resultalten </span>

                        </a>

                        <a
                            href="#"
                            className="flex items-center rounded-lg px-4 py-2 text-gray-200 hover:bg-slate-600  bg-slate-700"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 opacity-75"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                                />
                            </svg>

                            <span className="ml-3 text-sm font-medium"> Evaluatie maken </span>
                        </a>

                        <details className="group">
                            <summary
                                className="flex cursor-pointer items-center rounded-lg px-4 py-2 text-gray-200 hover:bg-slate-600  bg-slate-700   "
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 opacity-75"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>

                                <span className="ml-3 text-sm font-medium"> Instellingen </span>

                                <span
                                    className="ml-auto shrink-0 transition duration-300 group-open:-rotate-180"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </span>
                            </summary>

                            <nav aria-label="Account Nav" className="mt-1.5 ml-8 flex flex-col">
                                <a
                                    href="#"
                                    className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-slate-600 "
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 opacity-75"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                                        />
                                    </svg>

                                    <span className="ml-3 text-sm font-medium"> Details </span>
                                </a>

                                <a
                                    href="#"
                                    className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-slate-600 "
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 opacity-75"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                        />
                                    </svg>

                                    <span className="ml-3 text-sm font-medium"> Security </span>
                                </a>

                                <form action="/logout">
                                    <button
                                        type="submit"
                                        className="flex w-full items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-slate-600 "
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 opacity-75"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            stroke-width="2"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                            />
                                        </svg>

                                        <span className="ml-3 text-sm font-medium"> Logout </span>
                                    </button>
                                </form>
                            </nav>
                        </details>
                    </nav>
                </div>

                <div className="sticky inset-x-0 bottom-0">
                    <img src="/wave-haikei.svg" alt="Wave" />
                    <a
                        href="#"
                        className="flex shrink-0 items-center bg-slate-700 p-4 hover:bg-slate-600 text-gray-200"
                    >
                        <div className="h-10 w-10 rounded-full object-cover flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>

                        <div className="ml-1.5">
                            <p className="text-xs">
                                <strong className="block font-medium">{name}</strong>

                                <span> {mail} </span>
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </div>

    )
}
