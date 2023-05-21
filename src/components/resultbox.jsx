import React from "react";

export default function Resultbox(props) {
  return (
    <section className=" dark:bg-slate-700">
      <div className="container px-6 py-10 mx-auto">
        <div className="relative">
          <img
            className=" object-cover object-center w-80 h-64 rounded-lg lg:h-80"
            src={props.image}
            alt={props.title}
          />

          <div className="absolute bottom-0 flex p-3 bg-gray-900 ">
            <img
              className="object-cover object-center w-10 h-10 rounded-full"
              src={props.user_image}
              alt={props.user_name}
            />

            <div className="mx-4 ">
              <h1 className="text-sm text-gray-700 dark:text-gray-200">User</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {props.user_name}
              </p>
            </div>
          </div>
        </div>
        <div className="my-2">
          <a
            href={"/results-evaluation/" + props.id}
            className="mt-6 text-xl font-semibold text-white dark:text-white hover:text-blue-400"
          >
            {props.title}
          </a>

          <hr className="w-32 my-4 text-blue-500" />

          <p className="text-sm text-gray-500 dark:text-gray-400">
            {props.about}
          </p>
        </div>
      </div>
    </section>
  );
}
