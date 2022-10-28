import { useEffect, useState } from "react";
import Header from "../components/header";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase"

export default function Home() {
    const [status, setStatus] = useState('Not logged in');

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setStatus('Logged in!');
            } else {
                // No user is signed in.
            }
        })
    }, [])


    return (
        <div className="w-screen h-screen bg-slate-700">
            <Header />
            {status}
        </div>
    );
}
