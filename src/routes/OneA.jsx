import React, { useEffect, useState } from "react";
import Header from "../components/header";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase";
import Sidebar from "../components/sidebar";
import EvaluationBox from "../components/evaluationbox";
import {
  collection,
  query,
  where,
  getDocs,
  onSnapshot,
} from "firebase/firestore";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [evaluations, setEvaluations] = useState([]);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User signed in
        setLoggedIn(true);

        // Get evaluations for user
        setUser(user);
        const q = query(
          collection(db, "evaluations"),
          where("klas", "==", "1A")
        );
        onSnapshot(q, (querySnapshot) => {
          const docs = [];
          querySnapshot.forEach((doc) => {
            docs.push({ id: doc.id, ...doc.data() });
          });
          setEvaluations(docs);
        });
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
        <div className="max-h-screen overflow-y-auto">
          <p className="text-white font-bold text-4xl mt-12 ml-12 ">Klas 1A</p>
          <div className="grid grid-cols-3 grid-gap-4">
            {evaluations.map((evaluation) => (
              <EvaluationBox
                key={evaluation.id}
                title={evaluation.title}
                about={evaluation.about}
                image={evaluation.image}
                user_image={user.photoURL}
                user_name={user.displayName}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
