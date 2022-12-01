import { useEffect, useState } from "react";
import Header from "../components/header";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import Sidebar from "../components/sidebar";

export default function Home() {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User signed in
                setLoggedIn(true);
            } else {
                window.location.replace("/not-logged-in");
            }
        });
    }, []);

    return (
        <div className="w-screen h-screen bg-slate-700 overflow-hidden">
            <Header />
            <div className="flex">
                <div className="max-w-xs">
                    <Sidebar />
                </div>
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
                </div>
            </div>
        </div>
    );
}
