import { useEffect, useState } from "react";
import Header from "../components/header";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase";
import Sidebar from "../components/sidebar";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import StudentResult from "../components/studentresult";

export default function Home() {
  const [results, setResults] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Get the document where the id variable is equal to the evaluationId property of the document in the antwoorden collection
        const q = query(
          collection(db, "antwoorden"),
          where("evaluationId", "==", id)
        );

        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
          setResults((results) => [...results, doc.data()]);
        });
        console.log(id);
      } else {
        window.location.replace("/not-logged-in");
      }
    });
  }, [id]);

  return (
    <div className="w-screen h-screen bg-slate-700 overflow-hidden">
      <Header />
      <div className="flex">
        <div className="max-w-xs">
          <Sidebar />
        </div>
        <div className="w-full ">
          <section className="bg-slate-700 text-white ">
            <div className="p-8 w-full max-h-screen overflow-auto">
              <div className="text-center mt-6">
                <h1 className="text-2xl font-semibold text-white capitalize lg:text-3xl dark:text-white">
                  Evaluation results
                </h1>

                <p className="max-w-lg mx-auto mt-4 text-white">
                  Here you can see the results of the evaluation, you can see
                  the results for each student.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                {results.map((result) => (
                  <StudentResult {...result} />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
