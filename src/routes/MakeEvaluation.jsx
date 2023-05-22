import { useEffect, useState } from "react";
import Header from "../components/header";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import Sidebar from "../components/sidebar";
import CreateForm from "../components/createform";

export default function MakeEvaluation() {
  const [loggedIn, setLoggedIn] = useState(false);
  //Om te kijken of de gebruiker is ingelogd
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User signed in
        setLoggedIn(true);
        console.log(user.uid);
      } else {
        window.location.replace("/not-logged-in");
      }
    });
  }, []);

  return (
    <div className="h-screen w-screen overflow-x-hidden overflow-y-auto">
      <Header />
      <div className="flex h-screen justify-between">
        <div className="max-w-sm">
          <Sidebar />
        </div>
        <div className="w-full flex-row flex p-8 bg-slate-700 max-h-screen overflow-y-auto">
          <CreateForm />
        </div>
      </div>
    </div>
  );
}
