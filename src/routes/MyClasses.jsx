import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase";
import Header from "../components/header";
import Sidebar from "../components/sidebar";

function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);
  const [classMembers, setClassMembers] = useState([]);
  const [customClassName, setCustomClassName] = useState("");
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        window.location.replace("/not-logged-in");
      }
    });
  }, []);

  useEffect(() => {
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
        classRef.off();
      };
    } else {
      setClassMembers([]);
    }
  }, [selectedClass]);

  useEffect(() => {
    const classesRef = db.ref("klassen");
    classesRef.on("value", (snapshot) => {
      const classesData = snapshot.val();
      if (classesData) {
        const classesArray = Object.values(classesData);
        setClasses(classesArray);
      } else {
        setClasses([]);
      }
    });

    return () => {
      classesRef.off();
    };
  }, []);

  const handleClassClick = (klas) => {
    setSelectedClass(klas);
  };

  const addCustomClass = () => {
    if (customClassName) {
      const newClass = { name: customClassName, klassen: [] };
      db.ref("klassen").push(newClass);
      setCustomClassName("");
      if (selectedClass) {
        const selectedClassObj = classes.find(
          (klas) => klas.name === selectedClass
        );
        if (selectedClassObj) {
          selectedClassObj.klassen.push(customClassName);
          setSelectedClass(null);
          setSelectedClass(selectedClass); // Trigger re-render
        }
      }
    }
  };

  const handleMemberClick = (member) => {
    if (selectedClass) {
      const classRef = db.ref("gebruikerinfo");
      classRef
        .orderByChild("name")
        .equalTo(member)
        .once("value", (snapshot) => {
          snapshot.forEach((childSnapshot) => {
            const memberId = childSnapshot.key;
            const memberData = childSnapshot.val();

            // Implement logic to add or remove member from the selected class
            const selectedClassRef = db.ref(`klassen/${selectedClass}/klassen`);
            selectedClassRef.once("value", (classSnapshot) => {
              const classData = classSnapshot.val();

              if (classData && classData.includes(member)) {
                // Member exists in the selected class, remove them
                const updatedClassData = classData.filter(
                  (klasItem) => klasItem !== member
                );
                selectedClassRef.set(updatedClassData);
              } else {
                // Member doesn't exist in the selected class, add them
                const updatedClassData = classData
                  ? [...classData, member]
                  : [member];
                selectedClassRef.set(updatedClassData);
              }
            });

            // You can also update the member's class information in the user's node
            const memberRef = db.ref(`gebruikerinfo/${memberId}`);
            memberRef.update({ klas: selectedClass });
          });
        });
    }
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
            {/* Input to add a custom class */}
            <div className="mb-4 text-white">
              <input
                type="text"
                value={customClassName}
                onChange={(e) => setCustomClassName(e.target.value)}
                placeholder="Enter class name"
                className="text-lg font-bold mb-2"
              />
              <button
                className="text-lg font-bold mb-2"
                onClick={addCustomClass}
              >
                Add Custom Class
              </button>
            </div>
            {/* Display existing classes */}
            {classes.map((klas) => (
              <div key={klas.name} className="mb-4 text-white">
                <button
                  className={`text-lg font-bold mb-2 ${
                    selectedClass === klas.name ? "bg-blue-500" : ""
                  }`}
                  onClick={() => handleClassClick(klas.name)}
                >
                  {klas.name}
                </button>
                <div className="flex flex-wrap">
                  {klas.klassen.map((klasItem) => (
                    <button
                      key={klasItem}
                      className={`block h-10 w-32 mr-2 mb-2 ${
                        selectedClass === klasItem ? "bg-blue-500" : ""
                      }`}
                      onClick={() => handleClassClick(klasItem)}
                    >
                      <div className="flex h-full bg-slate-800 rounded-md justify-between">
                        <h2 className="text-l font-small sm:text-2xl text-white w-full text-center mt-1">
                          {klasItem}
                        </h2>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 text-white">
            <h2 className="text-lg font-bold mb-2">{selectedClass}</h2>
            <ul>
              {classMembers.map((member) => (
                <li
                  key={member}
                  onClick={() => handleMemberClick(member)}
                  style={{ cursor: "pointer" }}
                >
                  {member}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
