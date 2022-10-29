import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from "../firebase";
import toast, { Toaster } from 'react-hot-toast';

export default function Header() {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User signed in
                setLoggedIn(true);
            }
        })
    }, [])

    function logOut() {
        signOut(auth).then(() => {
            toast.success('Successfully logged out, redirecting...');
            setLoggedIn(false);

            setTimeout(() => {
                window.location.replace('/login');
            }, 800);

        }).catch((error) => {
            toast.error('A signout error occured!');
        });
    }

    return (
        <header className="w-full p-4 flex items-center bg-slate-800 justify-between">
            <Toaster />
            <div className="flex items-center">
                <a href="/">
                    <img src="/logo-studento.png" alt="Studento" />
                </a>
                <h1 className="text-2xl font-medium text-white ml-5">Studento</h1>
            </div>

            <div>
                {loggedIn ?
                    <button onClick={logOut} className="bg-blue-700 text-white py-2 px-5 rounded-full font-semibold mr-5 hover:bg-blue-600">Logout</button> :
                    <a href="/login" className="bg-blue-700 text-white py-2 px-5 rounded-full font-semibold mr-5 hover:bg-blue-600">Login</a>
                }
            </div>
        </header>
    )
}
