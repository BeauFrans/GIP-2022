import { useEffect, useState } from "react";
import Header from "../components/header";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import Sidebar from "../components/sidebar";
import ResultBox from "../components/resultbox";

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
                    <ResultBox />
                </div>
            </div>
        </div>
    );
}
