import React, { useEffect, useState } from "react";
import Header from "../components/header";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import Sidebar from "../components/sidebar";

const jaren = [
  {
    name: "Jaar 1",
    klassen: [
      { klas: "1A", href: "/1A" },
      { klas: "1B", href: "/1B" },
      { klas: "1C", href: "/1C" },
    ],
  },
  {
    name: "Jaar 2",
    klassen: [
      { klas: "2A", href: "/2A" },
      { klas: "2B", href: "/2B" },
      { klas: "2C", href: "/2C" },
    ],
  },
  {
    name: "Jaar 3",
    klassen: [
      { klas: "3A", href: "/3A" },
      { klas: "3B", href: "/3B" },
      { klas: "3C", href: "/3C" },
    ],
  },
  {
    name: "Jaar 4",
    klassen: [
      { klas: "4A", href: "/4A" },
      { klas: "4B", href: "/4B" },
      { klas: "4C", href: "/4C" },
    ],
  },
  {
    name: "Jaar 5",
    klassen: [
      { klas: "5A", href: "/5A" },
      { klas: "5B", href: "/5B" },
      { klas: "5C", href: "/5C" },
    ],
  },
  {
    name: "Jaar 6",
    klassen: [
      { klas: "6A", href: "/6A" },
      { klas: "6B", href: "/6B" },
      { klas: "6C", href: "/6C" },
    ],
  },
];

function Home() {
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
          <div className="relative top-10 flex flex-row">
            {jaren.map((jaar) => (
              <div key={jaar.name} className="mb-4 text-white">
                <h2 className="text-lg font-bold mb-2">{jaar.name}</h2>
                <div className="flex flex-wrap">
                  {jaar.klassen.map((klas) => (
                    <a
                      key={klas.klas}
                      href={klas.href}
                      className="block h-10 w-32 mr-2 mb-2"
                    >
                      <div className="flex h-full bg-slate-800 rounded-md justify-between">
                        <h2 className="text-l font-small sm:text-2xl text-white w-full text-center mt-1">
                          {klas.klas}
                        </h2>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
