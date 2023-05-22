import { useRef, useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";
import toast, { Toaster } from "react-hot-toast";

export default function Reset() {
  const emailRef = useRef();
  // Firestore functie om een wachtwoord te resetten en een email te sturen naar het ingegeven email

  function resetPassword(e) {
    e.preventDefault();
    sendPasswordResetEmail(auth, emailRef.current.value)
      .then(() => {
        toast.success("Email sent!");
        setTimeout(() => {
          window.location.replace("/login");
        }, 1500);
      })
      .catch((error) => {
        toast.error(error.message);
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
              Reset my password
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
                  className="relative block w-full appearance-none rounded-md border border-slate-700 px-3 py-2 text-white placeholder-white focus:z-10 focus:border-blue-700 focus:outline-none focus:ring-indigo-500 sm:text-sm bg-slate-600"
                  placeholder="Email address"
                />
              </div>
            </div>

            <button
              type="submit"
              onClick={resetPassword}
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Reset password
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
