import { useEffect, useState } from "react";
import Header from "../components/header";
import { auth, db } from "../firebase";
import Sidebar from "../components/sidebar";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";

export default function ResultsEvaluation() {
  const [evaluation, setEvaluation] = useState({});
  const [name, setName] = useState("");
  const [userNames, setUserNames] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      const antwoordenCollection = collection(db, "antwoorden");
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
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          setName(user.displayName);

          const q = query(
            antwoordenCollection,
            where("userId", ">", ""),
            where("evaluationId", "===", evaluation.id)
          );

          const doc = await getDocs(q);
        }
      });

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
        <div className="">
          <h1 className="text-white center">Uploaded List</h1>
        </div>
      </div>
    </div>
  );
}
