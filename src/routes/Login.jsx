import { useRef, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import toast, { Toaster } from "react-hot-toast";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  function signInGoogle() {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((res) => {
        toast.success("Login successful!");
        setTimeout(() => {
          window.location.replace("/");
        }, 700);
      })
      .catch(() => alert("A login error occured"));
  }

  function signInPassword(e) {
    e.preventDefault();

    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then(() => {
        window.location.replace("/");
      })
      .catch((error) => {
        if (error.code === "auth/wrong-password") {
          toast.error("Wrong password");
        } else if (error.code === "auth/user-not-found") {
          toast.error("Email is not used");
        } else {
          toast.error("A login error occured");
        }
      });
  }

  return (
    <>
      <div className="flex min-h-full h-screen w-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-700">
        <Toaster />
        <div className="w-full max-w-md space-y-4">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="/logo-studento.png"
              alt="Studento"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
              Sign in to your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
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
              <a
                href="/reset"
                className="font-medium  text-gray-200 hover:underline text-xs"
              >
                Forgot your password?
              </a>
            </div>
            <div>
              <a
                href="/signup"
                className="font-medium text-gray-200 hover:underline text-xs"
              >
                Don't have an account? Sign Up
              </a>
            </div>

            <button
              type="submit"
              onClick={signInPassword}
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Sign in
            </button>

            <div className="flex justify-between items-center">
              <div className="border-b border-slate-600 w-full" />
              <p className="text-center text-white font-semibold mx-2">Or</p>
              <div className="border-b border-slate-600 w-full" />
            </div>

            <div className="flex justify-center">
              <button
                onClick={signInGoogle}
                className="p-2 rounded-full bg-slate-600 hover:bg-slate-500 transition duration-200 hover:scale-[1.1]"
              >
                <img src="/google.png" alt="Google" className="w-6 h-6" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
