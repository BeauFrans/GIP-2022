import { useEffect, useState } from "react";
import Header from "../components/header";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase";
import Sidebar from "../components/sidebar";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";

export default function Home() {
  const [result, setResult] = useState();
  const { evaluationId, userId } = useParams();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Fetch the document from the antwoorden collection in Firestore with the given evaluationId and userId and set the answers state to the answers field of the document
        const colRef = collection(db, "antwoorden");

        const q = query(
          colRef,
          where("userId", "==", userId),
          where("evaluationId", "==", evaluationId)
        );

        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
          setResult(doc.data());
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
        <div className="w-full ">
          <section className=" bg-slate-700 text-white">
            <div className="p-8 w-full">
              <div className="flex"></div>
              <div className="overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left  text-gray-400">
                  <thead className="text-md bg-slate-600 text-white">
                    <tr>
                      <th className="px-6 py-3" scope="col">
                        Vraag
                      </th>
                      <th className="px-6 py-3" scope="col">
                        Antwoord
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {result?.answers?.map((answer, index) => (
                      <tr className=" border-b bg-slate-800 border-gray-700">
                        <td className="px-12 py-8 font-medium  whitespace-nowrap dark:text-white">
                          {answer.question}
                        </td>
                        <td className="px-12 py-8">{answer.answer}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
