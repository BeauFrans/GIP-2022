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
  const [activeButton, setActiveButton] = useState(1); // Track the active button

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

  const handleButtonClick = (questionIndex) => {
    setActiveButton(questionIndex + 1);
  };

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
          <div className="gap-2 grid grid-cols-4">
            <a
              href="#"
              className={`px-3 py-1 rounded-md text-sm font-medium ${
                activeButton === 1
                  ? "text-white bg-blue-500"
                  : "text-gray-700 bg-gray-100"
              }`}
              onClick={() => handleButtonClick(0)}
            >
              slecht
            </a>
            <a
              href="#"
              className={`px-3 py-1 rounded-md text-sm font-medium ${
                activeButton === 2
                  ? "text-white bg-blue-500"
                  : "text-gray-700 bg-gray-100"
              }`}
              onClick={() => handleButtonClick(1)}
            >
              matig
            </a>
            <a
              href="#"
              className={`px-3 py-1 rounded-md text-sm font-medium ${
                activeButton === 3
                  ? "text-white bg-blue-500"
                  : "text-gray-700 bg-gray-100"
              }`}
              onClick={() => handleButtonClick(2)}
            >
              goed
            </a>
            <a
              href="#"
              className={`px-3 py-1 rounded-md text-sm font-medium ${
                activeButton === 4
                  ? "text-white bg-blue-500"
                  : "text-gray-700 bg-gray-100"
              }`}
              onClick={() => handleButtonClick(3)}
            >
              uitstekend
            </a>
          </div>
          <div className="mt-3 gap-8 flex justify-center">
            <button
              className="inline-block rounded-full border border-indigo-600 bg-indigo-600 p-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
              onClick={() => setActiveQuestion(activeQuestion - 1)}
            >
              <span className="sr-only">Previous</span>
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </button>

            <button
              className="inline-block rounded-full border border-indigo-600 bg-indigo-600 p-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
              onClick={() => setActiveQuestion(activeQuestion + 1)}
            >
              <span className="sr-only">Next</span>

              <svg
                className="h-5 w-5 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
