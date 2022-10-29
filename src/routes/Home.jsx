import { useEffect, useState } from "react";
import Header from "../components/header";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
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
        <div className="w-screen h-screen bg-slate-700">
            <Header />
            <div className="flex items-end">

            </div>
        </div>
    );
}
