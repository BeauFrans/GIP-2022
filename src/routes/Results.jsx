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

        <div className="p-8 w-full max-h-screen overflow-auto">
          <div className="text-center mt-6">
            <h1 className="text-2xl font-semibold text-white capitalize lg:text-3xl dark:text-white">
              Results
            </h1>

            <p className="max-w-lg mx-auto mt-4 text-white">
              Here you can view your results
            </p>
          </div>
          <div className="grid grid-flow-cols grid-cols-2 ml-24 border-t-2 mt-4">
            <ResultBox />
          </div>
        </div>
      </div>
    </div>
  );
}
