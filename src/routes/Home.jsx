import { useEffect, useState } from "react";
import Header from "../components/header";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import Sidebar from "../components/sidebar";
import toast, { Toaster } from 'react-hot-toast';

export default function Home() {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User signed in
                setLoggedIn(true);
            }
        })
    }, [])



    return (
        <div className="w-screen h-screen bg-slate-700 overflow-hidden">
            <Header />
            <div className="max-w-xs">
                <Sidebar />
            </div>
        </div>
    );
}
