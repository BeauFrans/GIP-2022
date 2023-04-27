import { useEffect, useState } from "react";
import Header from "../components/header";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import Sidebar from "../components/sidebar";
import DropdownMenu from "../components/dropdownmenu";

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
        <div className="sidebar max-w-xs w-1/5 bg-slate-700">
          <Sidebar />
        </div>
        <div className="w-4/5 mx-auto">
          <div className="content flex flex-col w-4/5">
            <div className="flex items-center">
              <div className="p-8 w-2/5">
                <label for="UserEmail" class="text-white">
                  Geef hier je nieuwe E-mail in
                </label>
                <input
                  id="UserEmail"
                  placeholder="kobe.vervaele2@gmail.com"
                  class="w-full rounded-md bg-slate-800 px-3 py-2 shadow-sm focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm text-gray-200"
                />
              </div>
              <div className="p-8 w-2/5">
                <label for="UserEmail" class="text-white">
                  Geef hier je klas is
                </label>
                <DropdownMenu />
              </div>
            </div>

            <div className="p-8 w-2/5">
              <label for="UserName" class="text-white">
                Geef hier je voornaam in
              </label>
              <input
                id="UserName"
                placeholder="naam"
                class=" w-full rounded-md bg-slate-800 px-3 py-2 shadow-sm focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm text-gray-200"
              />

              <label for="UserLName" class="text-white ">
                Geef hier je achternaam in
              </label>
              <input
                id="UserLName"
                placeholder="familie naam"
                class=" w-full rounded-md bg-slate-800 px-3 py-2 shadow-sm focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm text-gray-200"
              />
              <button className="bg-blue-700 text-white py-2 px-5 rounded-full font-semibold ml-1 hover:bg-blue-600 w-32 b-0 l-0 mt-11">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
