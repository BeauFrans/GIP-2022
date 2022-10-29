import { useEffect, useState } from "react";
import Header from "../components/header";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase"

export default function Home() {
    const [status, setStatus] = useState('Not logged in');
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setStatus(<div class="p-3 mb-1 text-sm text-green-700 bg-green-100 rounded-lg  dark:bg-green-200 dark:text-green-800 w-44">
                    <span class="font-medium">Successfully Logged in!</span>
                </div>);
            } else {
                // No user is signed in.
            }
        })
    }, [])


    return (
        <div className="w-screen h-screen bg-slate-700">
            <Header />
            <div className="flex items-end">
                {status}
            </div>
        </div>

    );
}
