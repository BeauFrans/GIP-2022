import { useEffect, useState } from "react";
import Header from "../components/header";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import Sidebar from "../components/sidebar";
import CreateForm from "../components/createform";
import DropdownMenu from "../components/dropdownmenu";

export default function MakeEvaluation() {
  const [loggedIn, setLoggedIn] = useState(false);

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
    <div className="h-screen w-screen overflow-hidden">
      <Header />
      <div className="flex h-screen justify-between">
        <div className="max-w-sm">
          <Sidebar />
        </div>
        <div className="w-full overflow-y-auto flex-row flex p-8 bg-slate-700">
          <CreateForm />
        </div>
      </div>
    </div>
  );
}
