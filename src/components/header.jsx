import React from 'react'

export default function Header() {
    return (
        <header className="w-full p-4 flex items-center bg-slate-800 justify-between">
            <div className="flex items-center">
                <a href="/">
                    <img src="/logo-studento.png" alt="Studento" />
                </a>
                <h1 className="text-2xl font-medium text-white ml-5">Studento</h1>
            </div>

            <div>
                <a href="/login" className="bg-blue-700 text-white py-2 px-5 rounded-full font-semibold mr-5 hover:bg-blue-600">Login</a>
            </div>
        </header>
    )
}
