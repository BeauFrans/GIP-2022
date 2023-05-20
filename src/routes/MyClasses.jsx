import React, { useEffect, useRef, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import { addDoc, collection, getDocs, query } from "firebase/firestore";
import { toast } from "react-hot-toast";

function Home() {
  const [classes, setClasses] = useState([]);
  const klasInput = useRef(null);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const q = query(collection(db, "klassen"));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);

          setClasses((prev) => [...prev, { ...doc.data(), id: doc.id }]);
        });
      } else {
        window.location.replace("/not-logged-in");
      }
    });
  }, []);

  const createClass = async () => {
    if (!klasInput.current.value) {
      toast.error("Please enter a class name");
      return;
    }

    await addDoc(collection(db, "klassen"), {
      name: klasInput.current.value,
      date: new Date().toLocaleDateString(),
      updated: new Date().toLocaleDateString(),
      leerlingen: [],
    });

    toast.success("Class created successfully");
  };

  // const handleClassClick = (klas) => {
  //   setSelectedClass(klas);
  // };

  // const addCustomClass = () => {
  //   if (customClassName) {
  //     const newClass = { name: customClassName, klassen: [] };
  //     db.ref("klassen").push(newClass);
  //     setCustomClassName("");
  //     if (selectedClass) {
  //       const selectedClassObj = classes.find(
  //         (klas) => klas.name === selectedClass
  //       );
  //       if (selectedClassObj) {
  //         selectedClassObj.klassen.push(customClassName);
  //         setSelectedClass(null);
  //         setSelectedClass(selectedClass); // Trigger re-render
  //       }
  //     }
  //   }
  // };

  // const handleMemberClick = (member) => {
  //   if (selectedClass) {
  //     const classRef = db.ref("gebruikerinfo");
  //     classRef
  //       .orderByChild("name")
  //       .equalTo(member)
  //       .once("value", (snapshot) => {
  //         snapshot.forEach((childSnapshot) => {
  //           const memberId = childSnapshot.key;
  //           const memberData = childSnapshot.val();

  //           // Implement logic to add or remove member from the selected class
  //           const selectedClassRef = db.ref(`klassen/${selectedClass}/klassen`);
  //           selectedClassRef.once("value", (classSnapshot) => {
  //             const classData = classSnapshot.val();

  //             if (classData && classData.includes(member)) {
  //               // Member exists in the selected class, remove them
  //               const updatedClassData = classData.filter(
  //                 (klasItem) => klasItem !== member
  //               );
  //               selectedClassRef.set(updatedClassData);
  //             } else {
  //               // Member doesn't exist in the selected class, add them
  //               const updatedClassData = classData
  //                 ? [...classData, member]
  //                 : [member];
  //               selectedClassRef.set(updatedClassData);
  //             }
  //           });

  //           // You can also update the member's class information in the user's node
  //           const memberRef = db.ref(`gebruikerinfo/${memberId}`);
  //           memberRef.update({ klas: selectedClass });
  //         });
  //       });
  //   }
  // };

  return (
    <div className="w-screen h-screen bg-slate-700 overflow-hidden">
      <Header />
      <div className="flex">
        <div className="max-w-xs">
          <Sidebar />
        </div>
        <div className="p-8 w-full">
          <div className="flex justify-start items-center space-x-3">
            <input
              type="text"
              ref={klasInput}
              placeholder="Enter class name"
              className="rounded bg-transparent border-md border-indigo-700 p-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            />
            <button
              onClick={createClass}
              class="inline-flex items-center rounded border border-indigo-600 bg-indigo-600 p-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring active:text-indigo-500"
            >
              <span>Create class</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="white"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 5l0 14" />
                <path d="M5 12l14 0" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {classes.map((klas) => (
              <a
                href={`/class/${klas.name}`}
                class="relative block overflow-hidden rounded-lg border border-slate-600 p-4 sm:p-6 lg:p-8"
              >
                <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

                <div class="sm:flex sm:justify-between sm:gap-4">
                  <div>
                    <h3 class="text-lg font-bold text-gray-200 sm:text-xl">
                      {klas.name}
                    </h3>

                    <p class="mt-1 text-xs font-medium text-gray-600">
                      {klas.leerlingen ? klas.leerlingen.length : 0} leerlingen
                    </p>
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
                    <dd class="text-xs text-gray-500">{klas.date}</dd>
                  </div>

                  <div class="flex flex-col-reverse">
                    <dt class="text-sm font-medium text-gray-300">
                      Last updated
                    </dt>
                    <dd class="text-xs text-gray-500">
                      {klas.updated || new Date().toLocaleDateString()}
                    </dd>
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

export default Home;
