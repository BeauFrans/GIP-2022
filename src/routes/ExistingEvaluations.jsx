import { useEffect, useState } from "react";
import Header from "../components/header";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase";
import Sidebar from "../components/sidebar";
import EvaluationBox from "../components/evaluationbox";
import { collection, query, where, getDocs } from "firebase/firestore";

export default function ExistingEvaluations() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [evaluations, setEvaluations] = useState([]);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User signed in
        setLoggedIn(true);

        setUser(user);
        const q = query(
          collection(db, "evaluations"),
          where("user_uid", "==", user.uid)
        );

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          setEvaluations((prev) => [...prev, { ...doc.data(), id: doc.id }]);
          console.log(doc.id, " => ", doc.data());
        });

        console.log(evaluations);
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
              Existing evaluations
            </h1>

            <p className="max-w-lg mx-auto mt-4 text-white">
              Here you can view the existing evaluations.
            </p>
          </div>
          <div className="grid grid-cols-1  lg:grid-cols-3 gap-4">
            {evaluations.map((evaluation) => {
              return (
                <EvaluationBox
                  title={evaluation.title}
                  id={evaluation.id}
                  about={evaluation.about}
                  image={evaluation.image}
                  user_image={user.photoURL}
                  user_name={user.displayName}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
