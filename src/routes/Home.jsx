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
        <div className="w-full ">
          <section className=" bg-slate-700 text-white">
            <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
              <div className="mx-auto max-w-3xl text-center">
                <h1 className="bg-gradient-to-r from-blue-500 to-blue-700  bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                  Welcome to Studento
                </h1>

                <p className="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
                  Start making evaluations for your students today!
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4"></div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
