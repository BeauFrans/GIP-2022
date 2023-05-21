import { useEffect, useState } from "react";
import Header from "../components/header";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase";
import Sidebar from "../components/sidebar";
import { useParams } from "react-router-dom";
import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { toast } from "react-hot-toast";

export default function FillEvaluation() {
  const [evaluation, setEvaluation] = useState({});
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnwsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User signed in

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
  }, [id]);

  const handleButtonClick = (rate) => {
    if (answers[activeQuestion]) {
      const newAnswers = [...answers];
      newAnswers[activeQuestion].answer = rate;
      setAnwsers(newAnswers);
      return;
    }

    setAnwsers([
      ...answers,
      {
        question: activeQuestion,
        answer: rate,
      },
    ]);
  };

  const uploadAnswers = async () => {
    if (answers.length !== Object.keys(evaluation.questions || {}).length) {
      toast.error("Not all questions are answered!");
      return;
    }

    await addDoc(collection(db, "antwoorden"), {
      answers,
      evaluationId: id,
      userId: auth.currentUser.uid,
    });

    toast.success("Awnsers uploaded successfully!");
    setTimeout(() => {
      window.location.replace("/existingevaluations");
    }, 1000);
  };

  return (
    <div className="w-screen h-screen bg-slate-700 overflow-hidden">
      <Header />
      <div className="flex">
        <div className="max-w-xs">
          <Sidebar />
        </div>

        <div className="w-full justify-center items-center flex-col max-w-5xl my-20 mx-auto">
          <div className="space-y-6 bg-slate-800 px-4 py-5 sm:p-6 shadow rounded-md">
            <p className="text-white my-5">
              Evaluation title: <b>{evaluation.title}</b>
            </p>

            <h2 className="text-white font-semibold text-xl my-5">
              Question:{" "}
              {evaluation.questions && evaluation.questions[activeQuestion]}
            </h2>
            <div className="gap-2 grid grid-cols-4">
              <button
                href="#"
                className={`px-3 py-1 rounded-md text-sm font-medium ${
                  answers[activeQuestion] &&
                  answers[activeQuestion].answer === "slecht"
                    ? "text-white bg-indigo-600"
                    : "text-gray-100 bg-gray-700"
                }`}
                onClick={() => handleButtonClick("slecht")}
              >
                Bad
              </button>
              <button
                href="#"
                className={`p-3 rounded-md text-sm font-medium ${
                  answers[activeQuestion] &&
                  answers[activeQuestion].answer === "matig"
                    ? "text-white bg-indigo-600"
                    : "text-gray-100 bg-gray-700"
                }`}
                onClick={() => handleButtonClick("matig")}
              >
                Intermediate
              </button>
              <button
                href="#"
                className={`p-3 rounded-md text-sm font-medium ${
                  answers[activeQuestion] &&
                  answers[activeQuestion].answer === "goed"
                    ? "text-white bg-indigo-600"
                    : "text-gray-100 bg-gray-700"
                }`}
                onClick={() => handleButtonClick("goed")}
              >
                Good
              </button>
              <button
                href="#"
                className={`p-3 rounded-md text-sm font-medium ${
                  answers[activeQuestion] &&
                  answers[activeQuestion].answer === "uitstekend"
                    ? "text-white bg-indigo-600"
                    : "text-gray-100 bg-gray-700"
                }`}
                onClick={() => handleButtonClick("uitstekend")}
              >
                Perfect
              </button>
            </div>
            <div className="mt-3 gap-8 flex justify-center">
              {
                // If the active question is the first question, don't show the previous button
                activeQuestion === 0 ? null : (
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
                )
              }

              {activeQuestion ===
              Object.keys(evaluation.questions || {}).length - 1 ? (
                <button
                  title="Uploaden"
                  className="inline-block rounded-full border border-indigo-600 bg-indigo-600 p-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                  onClick={uploadAnswers}
                >
                  <span className="sr-only">Submit</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#ffffff"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                    <path d="M7 9l5 -5l5 5" />
                    <path d="M12 4l0 12" />
                  </svg>
                </button>
              ) : (
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
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
