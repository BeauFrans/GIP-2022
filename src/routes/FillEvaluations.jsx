import { useEffect, useState } from "react";
import Header from "../components/header";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase";
import Sidebar from "../components/sidebar";
import Experiencebox from "../components/experiencebox";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";

export default function FillEvaluation() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [evaluation, setEvaluation] = useState({});
  const [activeQuestion, setActiveQuestion] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User signed in
        setLoggedIn(true);
        console.log(id);

        const docRef = doc(db, "evaluations", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          setEvaluation(docSnap.data());
        } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
        }
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
        <div>
          <p className="text-white">Evaluation title: {evaluation.title}</p>
          <p className="text-white my-20 font-semibold">
            Active Question:
            {evaluation.questions && evaluation.questions[activeQuestion]}
          </p>

          <button
            class="inline-block rounded-full border border-indigo-600 bg-indigo-600 p-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
            onClick={() => setActiveQuestion(activeQuestion - 1)}
          >
            <span class="sr-only">Previous</span>
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </button>

          <button
            class="inline-block rounded-full border border-indigo-600 bg-indigo-600 p-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
            onClick={() => setActiveQuestion(activeQuestion + 1)}
          >
            <span class="sr-only">Next</span>

            <svg
              class="h-5 w-5 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
          
          
        </div>
      </div>
    </div>
  );
}
