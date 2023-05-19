import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase";

import Header from "../components/header";
import Sidebar from "../components/sidebar";

const jaren = [
  {
    name: "Jaar 1",
    klassen: [{ klas: "1A" }, { klas: "1B" }, { klas: "1C" }],
  },
  {
    name: "Jaar 2",
    klassen: [{ klas: "2A" }, { klas: "2B" }, { klas: "2C" }],
  },
  {
    name: "Jaar 3",
    klassen: [{ klas: "3A" }, { klas: "3B" }, { klas: "3C" }],
  },
  {
    name: "Jaar 4",
    klassen: [{ klas: "4A" }, { klas: "4B" }, { klas: "4C" }],
  },
  {
    name: "Jaar 5",
    klassen: [{ klas: "5A" }, { klas: "5B" }, { klas: "5C" }],
  },
  {
    name: "Jaar 6",
    klassen: [{ klas: "6A" }, { klas: "6B" }, { klas: "6C" }],
  },
];

function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);
  const [classMembers, setClassMembers] = useState([]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // Gebruiker ingelogd
        setLoggedIn(true);
      } else {
        window.location.replace("/not-logged-in");
      }
    });
  }, []);

  useEffect(() => {
    // Haal de leden van de geselecteerde klas op uit de database
    if (selectedClass) {
      const classRef = db.ref("gebruikerinfo");
      classRef
        .orderByChild("klas")
        .equalTo(selectedClass)
        .on("value", (snapshot) => {
          const members = [];
          snapshot.forEach((childSnapshot) => {
            const member = childSnapshot.val().name;
            members.push(member);
          });
          setClassMembers(members);
        });

      return () => {
        classRef.off(); // Stop met het luisteren naar wijzigingen in de database
      };
    } else {
      // Als er geen klas is geselecteerd, wis de ledenlijst
      setClassMembers([]);
    }
  }, [selectedClass]);

  const handleClassClick = (klas) => {
    setSelectedClass(klas);
  };

  return (
    <div className="w-screen h-screen bg-slate-700 overflow-hidden">
      <Header />
      <div className="flex">
        <div className="max-w-xs">
          <Sidebar />
        </div>
        <div className="p-8 w-full">
          <div className="relative top-10 flex flex-row">
            {jaren.map((jaar) => (
              <div key={jaar.name} className="mb-4 text-white">
                <button className="text-lg font-bold mb-2">{jaar.name}</button>
                <div className="flex flex-wrap">
                  {jaar.klassen.map((klas) => (
                    <button
                      key={klas.klas}
                      className={`block h-10 w-32 mr-2 mb-2 ${
                        selectedClass === klas.klas ? "bg-blue-500" : ""
                      }`}
                      onClick={() => handleClassClick(klas.klas)}
                    >
                      <div className="flex h-full bg-slate-800 rounded-md justify-between">
                        <h2 className="text-l font-small sm:text-2xl text-white w-full text-center mt-1">
                          {klas.klas}
                        </h2>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {selectedClass && classMembers.length > 0 && (
            <div className="mt-4 text-white">
              <h2 className="text-lg font-bold mb-2">{selectedClass}</h2>
              <ul>
                {classMembers.map((member) => (
                  <li key={member}>{member}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
