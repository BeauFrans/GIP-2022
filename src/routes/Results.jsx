import { useEffect, useState } from "react";
import Header from "../components/header";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase";
import Sidebar from "../components/sidebar";
import ResultBox from "../components/resultbox";
import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";
import { Result } from "postcss";

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

        // Give me the klas property of the user with the uid of the current user (user.uid) from the gebruikerinfo collection in the database
        const colRef = collection(db, "gebruikerinfo");

        const q = query(colRef, where("user_uid", "==", user.uid));

        const querySnapshot = await getDocs(q);

        let klas;

        querySnapshot.forEach((doc) => {
          klas = doc.data().klas || null;
        });

        // Get all evaluations where the klas property is equal to the klas property of the current user
        const q2 = query(
          collection(db, "evaluations"),
          where("user_uid", "==", user.uid)
        );

        const querySnapshot2 = await getDocs(q2);

        querySnapshot2.forEach((doc) => {
          setEvaluations((prev) => [...prev, { ...doc.data(), id: doc.id }]);
          console.log(doc.id, " => ", doc.data());
        });

        // const querySnapshot = await getDocs(q);
        // querySnapshot.forEach((doc) => {
        //   setEvaluations((prev) => [...prev, { ...doc.data(), id: doc.id }]);
        //   console.log(doc.id, " => ", doc.data());
        // });

        // console.log(evaluations);
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {evaluations.map((evaluation) => (
              <a
                href={"/results-evaluation/" + evaluation.id}
                class="relative block overflow-hidden rounded-lg border border-slate-600 p-4 sm:p-6 lg:p-8"
              >
                <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

                <div class="sm:flex sm:justify-between sm:gap-4">
                  <div>
                    <h3 class="text-lg font-bold text-gray-200 sm:text-xl">
                      {evaluation.title}
                    </h3>
                  </div>

                  <div class="hidden sm:block sm:shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-school"
                      width="44"
                      height="44"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="white"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
                      <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
                    </svg>
                  </div>
                </div>

                <div class="mt-4">
                  <p class="max-w-[40ch] text-sm text-gray-500"></p>
                </div>

                <dl class="mt-6 flex gap-4 sm:gap-6">
                  <div class="flex flex-col-reverse">
                    <dt class="text-sm font-medium text-gray-300">
                      Created at
                    </dt>
                    <dd class="text-xs text-gray-500">{evaluation.date}</dd>
                  </div>

                  <div class="flex flex-col-reverse">
                    <dt class="text-sm font-medium text-gray-300">
                      Last updated
                    </dt>
                  </div>
                </dl>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
