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
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="w-6 h-6">
                                        <path stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
                                    </svg>

                                    <span className="ml-1.5 text-xs font-medium"> Instellingen </span>
                                </a>
                            </li>

                            <li className="relative flex items-center">
                                <span
                                    className="absolute inset-y-0 -left-px h-10 w-4 bg-blue-700  [clip-path:_polygon(0_0,_0%_100%,_100%_50%)]"
                                >
                                </span>

                                <a
                                    href="#"
                                    className="flex h-10 items-center bg-blue-600  pl-8 pr-4 text-xs font-medium transition "
                                >
                                    Account Settings
                                </a>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    );
}
