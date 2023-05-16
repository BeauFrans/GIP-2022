import { useEffect, useState } from "react";
import Header from "../components/header";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase";
import Sidebar from "../components/sidebar";
import toast, { Toaster } from "react-hot-toast";
import {
  doc,
  addDoc,
  collection,
  where,
  getDocs,
  updateDoc,
  query,
} from "firebase/firestore";
import DropdownMenu from "../components/dropdownmenu";

const jaren = [
  { name: "Jaar 1", klassen: [{ klas: "1A" }, { klas: "1B" }, { klas: "1C" }] },
  { name: "Jaar 2", klassen: [{ klas: "2A" }, { klas: "2B" }, { klas: "2C" }] },
  { name: "Jaar 3", klassen: [{ klas: "3A" }, { klas: "3B" }, { klas: "3C" }] },
  { name: "Jaar 4", klassen: [{ klas: "4A" }, { klas: "4B" }, { klas: "4C" }] },
  { name: "Jaar 5", klassen: [{ klas: "5A" }, { klas: "5B" }, { klas: "5C" }] },
  { name: "Jaar 6", klassen: [{ klas: "6A" }, { klas: "6B" }, { klas: "6C" }] },
];

export default function Home() {
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

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setIsOpen1(false);
  };

  const [selectedJaar, setSelectedJaar] = useState(null);
  const [isOpen1, setIsOpen1] = useState(false);
  const [selectedKlas, setSelectedKlas] = useState(null);

  const handleJaarClick = (jaar) => {
    setSelectedJaar(jaar);
    setIsOpen1(!isOpen1);
  };

  const handleKlasClick = (klas) => {
    setSelectedKlas(klas);
    setIsOpen(false);
    setIsOpen1(false);
  };

  const klassen =
    selectedJaar && selectedJaar.klassen ? selectedJaar.klassen : [];

  const klasButtonText = selectedKlas ? selectedKlas.klas : "Klas";

  async function saveToDb() {
    const usersRef = collection(db, "gebruikerinfo");
    const q = query(usersRef, where("user_uid", "==", auth.currentUser.uid));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.docs.length > 0) {
      // The user already has a document in the collection, update its klas
      const userDocRef = querySnapshot.docs[0].ref;
      await updateDoc(userDocRef, { klas: selectedKlas.klas });
      console.log("Document successfully updated!");
    } else {
      // The user doesn't have a document yet, create a new one
      try {
        const docRef = await addDoc(usersRef, {
          klas: selectedKlas.klas,
          user_uid: auth.currentUser.uid,
        });
        toast.success("Successfully created evaluation!");
      } catch (error) {
        console.error("Error writing document: ", error);
      }
    }
  }

  return (
    <div className="w-screen h-screen bg-slate-700 overflow-hidden">
      <Header />
      <div className="flex">
        <div className="sidebar max-w-xs w-1/5 bg-slate-700">
          <Sidebar />
        </div>
        <div className="w-4/5 mx-auto">
          <div className="content flex flex-col w-4/5">
            <div className="flex items-center">
              <div className="p-8 w-2/5">
                <label for="UserEmail" class="text-white">
                  Geef hier je klas is
                </label>
                <div className="relative">
                  <button
                    className="w-16 rounded-md bg-slate-800 px-3 py-2 shadow-sm focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm text-gray-200"
                    onClick={toggleDropdown}
                  >
                    {klasButtonText}
                  </button>

                  {isOpen && (
                    <div className="absolute top-0 left-0 bg-slate-800 mt-10 py-2 w-48 shadow-lg rounded-lg">
                      {jaren.map((jaar) => (
                        <button
                          className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 w-full text-left"
                          key={jaar.name}
                          onClick={() => handleJaarClick(jaar)}
                        >
                          {jaar.name}
                        </button>
                      ))}
                    </div>
                  )}

                  {isOpen1 && (
                    <div className="absolute mt-10 top-0 left-0 ml-52 bg-slate-800 py-2 w-48 shadow-lg rounded-lg">
                      {klassen.map((klas) => (
                        <button
                          className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 w-full text-left"
                          key={klas.klas}
                          selectedKlas={klas}
                          onClick={() => handleKlasClick(klas)}
                        >
                          {klas.klas}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={saveToDb}
                className="bg-blue-700 text-white py-2 px-5 rounded-full font-semibold ml-1 hover:bg-blue-600 w-32 b-0 l-0 mt-11"
              >
                Submit
              </button>
            </div>
            <div className="flex w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
