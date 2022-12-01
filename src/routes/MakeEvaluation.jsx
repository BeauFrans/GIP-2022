import { useEffect, useState } from "react";
import Header from "../components/header";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import Sidebar from "../components/sidebar";

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

  return (
    <div className="w-screen h-screen bg-slate-700 overflow-hidden">
      <Header />
      <div className="flex">
        <div className="max-w-xs">
          <Sidebar />
        </div>
        <div className="p-8 w-full">
          <nav
            aria-label="Breadcrumb"
            className="flex justify-between items-center"
          >
            <ol
              role="list"
              className="flex overflow-hidden rounded-lg border-none bg-blue-700 text-white"
            >
              <li className="flex items-center">
                <a
                  href="#"
                  className="flex h-10 items-center bg-blue-700 px-4 transition "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
                    />
                  </svg>

                  <span className="ml-1.5 text-xs font-medium">
                    {" "}
                    My evaluations{" "}
                  </span>
                </a>
              </li>

              <li className="relative flex items-center">
                <span className="absolute inset-y-0 -left-px h-10 w-4 bg-blue-700  [clip-path:_polygon(0_0,_0%_100%,_100%_50%)]"></span>

                <a
                  href="#"
                  className="flex h-10 items-center bg-blue-600  pl-8 pr-4 text-xs font-medium transition "
                >
                  Make Evaluation
                </a>
              </li>
            </ol>
            <div>
              <button className="bg-blue-700 hover:bg-blue-600 text-white rounded-lg px-3 py-2 transition-all duration-200">
                + Add question
              </button>
            </div>
          </nav>
          <div className="flex flex-col space-y-4 justify-between">
             <div className="mb-3 xl:w-96">
             <label for="TextareaVraag1" class="form-label inline-block mb-2 text-white"
             >Vraag 1</label>
             <textarea className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="TextareaVraag1" rows="2"
              placeholder="Schrijf hier uw vraag"></textarea>
        
             <label for="TextareaVraag2" class="form-label inline-block mb-2 text-white"
             >Vraag 2</label>
             <textarea className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="TextareaVraag2" rows="2"
              placeholder="Schrijf hier uw vraag"></textarea>

             <label for="TextareaVraag3" class="form-label inline-block mb-2 text-white"
             >Vraag 3</label>
             <textarea className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="TextareaVraag3" rows="2"
              placeholder="Schrijf hier uw vraag"></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
