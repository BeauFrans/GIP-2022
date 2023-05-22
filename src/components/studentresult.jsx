import React from "react";

export default function StudentResult(props) {
  return (
    <a
      href={`/viewresult/${props.evaluationId}/${props.userId}`}
      class="relative block overflow-hidden rounded-lg border border-slate-600 p-4 sm:p-6 lg:p-8"
    >
      <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r bg-blue-600"></span>

      <div class="sm:flex sm:justify-between sm:gap-4">
        <div>
          <h3 class="text-lg font-bold text-gray-200 sm:text-xl">
            {props.studentName}
          </h3>

          <p class="mt-1 text-xs font-medium text-gray-600">
            {props.answers.length > 1
              ? `${props.answers.length} questions`
              : `${props.answers.length} question`}
          </p>
        </div>

        <div class="hidden sm:block sm:shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-user"
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
            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          </svg>
        </div>
      </div>

      <div class="mt-4">
        <p class="max-w-[40ch] text-sm text-gray-500"></p>
      </div>

      <dl class="mt-6 flex gap-4 sm:gap-6">
        <div class="flex flex-col-reverse">
          <dt class="text-sm font-medium text-gray-300">Submitted at</dt>
          <dd class="text-xs text-gray-500">
            {new Date(props.uploaded_at).toLocaleString()}
          </dd>
        </div>
      </dl>
    </a>
  );
}
