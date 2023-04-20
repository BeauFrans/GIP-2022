import { useEffect, useState } from "react";
import Header from "../components/header";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import Sidebar from "../components/sidebar";
import EvaluationBox from "../components/evaluationbox";

export default function ExistingEvaluations() {
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
        <div className="text-center mt-6">
          <h1 className="text-2xl font-semibold text-white capitalize lg:text-3xl dark:text-white">
            Existing evaluations
          </h1>

          <p className="max-w-lg mx-auto mt-4 text-white">
            Here you can view the existing evaluations.
          </p>
        </div>
          <div className="justify-self-auto">
            <EvaluationBox />
            <EvaluationBox />
            <EvaluationBox />
            <EvaluationBox />
          </div>
         
        </div>
       
      </div>
    </div>
    
  );
}
