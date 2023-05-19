import React from "react";

export default function UserBox(props) {
  return (
    <section className="dark:bg-slate-700">
      <div className="container mx-auto">
        <div className="my-2">
          <a
            href="/Fill-Evaluation"
            className="mt-6 text-xl font-semibold text-white dark:text-white hover:text-blue-400 w-full"
          >
            {props.title}
          </a>
        </div>
      </div>
    </section>
  );
}
