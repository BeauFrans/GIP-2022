import React from "react";

export default function NotLoggedIn() {
  return (
    <div class="relative grid h-screen place-content-center overflow-y-hidden bg-slate-700">
      <div class="z-30 text-center">
        <img
          src="/undraw-not-found.svg"
          alt="Undraw not found"
          className="h-72 w-72"
        />

        <h1 class="mt-6 text-2xl font-bold tracking-tight text-gray-300 sm:text-4xl">
          Uh-oh!
        </h1>

        <p class="mt-4 text-gray-400">You are not logged in.</p>
        <a
          class="relative font-medium text-blue-600 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-blue-600 before:transition hover:before:scale-100"
          href="/login"
        >
          Please log in first
        </a>
      </div>
      <img
        src="left-blob.png"
        alt="Blob"
        className="absolute bottom-0 left-0 z-20 w-96 hidden overflow-y-hidden xl:block"
      />
      <img
        src="right-blob.png"
        alt="Blob"
        className="absolute top-0 right-0 z-10 hidden overflow-y-hidden xl:block"
      />
    </div>
  );
}
