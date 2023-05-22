import { useRef, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  OAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase";
import toast, { Toaster } from "react-hot-toast";

export default function () {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [error, setError] = useState(false);

  function signInGoogle() {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((res) => {
        toast.success("Sign Up successful!");
        console.log(res);
      })
      .catch(() => alert("A login error occured"));
      toast.error("Something went wrong!");
  }

  function signInMicrosoft() {
    signInWithPopup(auth, new OAuthProvider("microsoft.com"))
      .then(() => {
        toast.success("Something went wrong!");
        setTimeout(() => {
          window.location.replace("/");
        }, 700);
      })
      .catch((err) => console.log(err));
  }

  function signUpPassword(e) {
    e.preventDefault();

    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredential) => {
        setError(false);
        window.location.replace("/");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          setError("Email already in use");
        } else if (error.code === "auth/weak-password") {
          setError("Password must be 6 characters or more");
        } else {
          setError(error.message);
        }
      });
  }

  return (
    <>
      <div className="flex min-h-full h-screen w-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-700">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="/logo-studento.png"
              alt="Studento"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
              Create your account
            </h2>
          </div>
          <form className="mt-8 space-y-4" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <p className="text-red-500 text-xs font-semibold">
              {error ? error : null}
            </p>
            <div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  ref={emailRef}
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-slate-700 px-3 py-2 text-white placeholder-white focus:z-10 focus:border-blue-700 focus:outline-none focus:ring-indigo-500 sm:text-sm bg-slate-600"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  ref={passwordRef}
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-slate-700 px-3 py-2 text-white placeholder-white focus:z-10 focus:border-blue-700 focus:outline-none focus:ring-indigo-500 sm:text-sm bg-slate-600"
                  placeholder="Password"
                />
              </div>
            </div>

            <button
              type="submit"
              onClick={signUpPassword}
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Sign Up
            </button>

            <div className="flex justify-between items-center">
              <div className="border-b border-slate-600 w-full" />
              <p className="text-center text-white font-semibold mx-2">Or</p>
              <div className="border-b border-slate-600 w-full" />
            </div>

            <div className="flex justify-center gap-2">
              <button
                onClick={signInGoogle}
                className="p-2 rounded-full bg-slate-600 hover:bg-slate-500 transition duration-200 hover:scale-[1.1]"
              >
                <img src="/google.png" alt="Google" className="w-6 h-6" />
              </button>
              <button
                onClick={signInMicrosoft}
                className="p-2 rounded-full bg-slate-600 hover:bg-slate-500 transition duration-200 hover:scale-[1.1]"
              >
                <img src="/microsoft.png" alt="Google" className="w-6 h-6" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
