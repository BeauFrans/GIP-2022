import { Fragment, useState, useEffect } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { onAuthStateChanged } from "firebase/auth";
import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  getStorage,
} from "firebase/storage";
import { auth } from "../firebase";
import { PlusIcon } from "@heroicons/react/20/solid";
import { useRef } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import toast, { Toaster } from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

const categories = [
  { name: "Communication" },
  { name: "Using resources" },
  { name: "Planning and organising" },
  { name: "Independence and responsibility" },
  { name: "Taking the initiative" },
  { name: "Perseverance" },
];

export default function CreateForm() {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [categoryText, setCategoryText] = useState(null);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [inputValues, setInputValues] = useState({});
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter(counter + 1);
    console.log(counter);
  };

  // om de vragen te maken
  const handleOnChange = (e) => {
    const obj = {};
    obj[e.target.id] = e.target.value;
    setInputValues({ ...inputValues, ...obj });
  };

  const title = useRef();
  const about = useRef();
  const klas = useRef();
  const question = useRef();
  const category = useRef();
  const storage = getStorage();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        window.location.replace("/not-logged-in");
      }
    });
  }, []);
  //  voor het uploaden van de afbeelding
  function handleImageChange(event) {
    setImage(event.target.files[0]);

    const objectUrl = URL.createObjectURL(event.target.files[0]);
    setPreview(objectUrl);
    console.log(objectUrl);
  }
  // Voor het maken van de evaluatie en te kijken of alles is ingevuld en het naar de database te sturen
  async function insertEvaluation() {
    if (image === null) {
      toast.error("Please upload an image!");
      return;
    }
    const storageRef = ref(storage, `uploads/${uuidv4() + image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        alert(error);
      },
      async () => {
        await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          addDoc(collection(db, "evaluations"), {
            title: title.current.value,
            about: about.current.value,
            questions: inputValues,
            category: category.current.value,
            user_uid: user.uid,
            image: downloadURL,
            klas: klas.current.value,
            makerNaam: user.displayName || user.email,
            makerImage: user.photoURL || "/logo-studento.png",
          });
          toast.success("Successfully created evaluation!");

          setTimeout(() => {
            window.location.replace("/existingevaluations");
          }, 1000);
        });
      }
    );
  }

  return (
    <div>
      <Toaster />
      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-200">
                  Evaluation Form Profile
                </h3>
                <p className="mt-1 text-sm text-gray-400">
                  This information will be displayed publicly so be careful what
                  you share.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <div>
              <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-slate-800 px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="eval-title"
                        className="block text-sm font-medium text-gray-300"
                      >
                        Evaluation title
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="eval-title"
                          id="eval-title"
                          ref={title}
                          className="block w-full flex-1 text-white rounded-md  bg-slate-700 border-none focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                          placeholder="Your title...."
                        />
                      </div>
                    </div>
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="klas-title"
                        className="block text-sm font-medium text-gray-300"
                      >
                        Klas
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="klas-title"
                          id="klas-title"
                          ref={klas}
                          className="block w-full flex-1 text-white rounded-md  bg-slate-700 border-none focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                          placeholder="Your class...."
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium text-gray-300"
                    >
                      About
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="about"
                        name="about"
                        ref={about}
                        rows={3}
                        className="mt-1 block w-full text-white bg-slate-700 rounded-md border-none shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Here u can write the description of the evaluation form.
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300">
                      Cover photo
                    </label>
                    <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-slate-500 px-6 pt-5 pb-6">
                      {image ? (
                        <img src={preview} alt="Preview " />
                      ) : (
                        <div className="space-y-1 text-center">
                          <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <div className="flex text-sm text-gray-600">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer rounded-md bg-slate-800 font-medium text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 hover:text-blue-500"
                            >
                              <span>Upload a file</span>
                              <input
                                id="file-upload"
                                name="file-upload"
                                type="file"
                                accept="image/jpeg, image/png, image/gif"
                                className="sr-only"
                                onChange={handleImageChange}
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-500">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-600" />
        </div>
      </div>

      <div className="mt-10 sm:mt-0 mb-52">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-200">
                Evaluation Questions
              </h3>
              <p className="mt-1 text-sm text-gray-400">
                Create your questions here.
              </p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <div className="shadow sm:rounded-md bg-slate-800 mb-5">
              <div className="p-4">
                <div className="w-full">
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Category
                  </label>
                  <input
                    type="text"
                    name="title"
                    ref={category}
                    autoComplete="category"
                    className="mt-1 block w-full bg-slate-700 text-gray-200 rounded-md border-none shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="shadow sm:rounded-md bg-slate-800">
              {Array.from(Array(counter)).map((c, index) => {
                return (
                  <div className={`p-4 z-[${500 + index}]`}>
                    <div className="flex items-center justify-between space-x-10">
                      <div className="w-full">
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium text-gray-300"
                        >
                          Question
                        </label>
                        <input
                          type="text"
                          name="title"
                          onChange={handleOnChange}
                          id={index}
                          autoComplete="given-name"
                          className="mt-1 block w-full bg-slate-700 text-gray-200 rounded-md border-none shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                          ref={question}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="px-4 py-3 flex justify-between sm:px-6">
                <button
                  onClick={handleClick}
                  className="inline-flex justify-center space-x-2 items-center rounded-md border border-transparent bg-blue-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <PlusIcon className="w-4 h-4 text-white" />
                  <p>Add question</p>
                </button>
                <button
                  onClick={insertEvaluation}
                  className="inline-flex justify-center rounded-md border border-transparent bg-blue-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Save Evaluation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-20"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center bg-slate-400 bg-opacity-50">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-auto rounded-2xl bg-slate-700 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-300"
                  >
                    Create new category
                  </Dialog.Title>
                  <div className="mt-2">
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="text"
                        name="category-title"
                        id="category-title"
                        onChange={(e) => {
                          console.log(e.currentTarget.value);
                          setCategoryText(e.currentTarget.value);
                        }}
                        className="block w-full flex-1 text-white rounded-md bg-slate-700 border border-slate-600 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        placeholder="Your category title...."
                      />
                    </div>
                  </div>

                  <div className="mt-4 justify-end flex space-x-3">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => setIsOpen(false)}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => {
                        categories.push({ name: categoryText });
                        setIsOpen(false);
                      }}
                    >
                      Add category
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
