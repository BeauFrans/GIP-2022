import React, { useEffect, useState } from "react";

export default function EvaluationBox() {
  return (
    <section className=" dark:bg-slate-700">
      <div className="container px-6 py-10 mx-auto">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-white capitalize lg:text-3xl dark:text-white">
            Existing evaluations
          </h1>

          <p className="max-w-lg mx-auto mt-4 text-white">
            Here you can view the existing evaluations.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
          <div>
            <div className="relative">
              <img
                className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                src="https://lh3.googleusercontent.com/fife/AAbDypCtkF41Q25UJbSHOgUDKhEWeUPQD4G7leeACbDJXeKkClzeJYdKXCvTsQvsC9C8p5KNzLkbaQtG4ALbCSPzKCHUpCn7R06vIUrmDErE4mBkdXLwzyU4LWYHLkYR6_dIdq2tsfojWfoRhyG588dHiJs85NkzbKcH8wPPf_poFzW1ogC62eAVht6dWapWkySaBX9x68dEuy8tJ7E-jEtEU8wKyf2YgDyqz9vxzvBi7JQo1BsgyqLH2JnCNyEVWBXz7UUtsB2y-pIoNEGgceF6u9GEdMegeCLn2_NlD9q0OSvAU9s_mHIym5H7oHRXM5tkcSKvPbNw_XfOFqgj89ju5G-XmEc45J1CgDgwBKadL91c0h6UpABER4Z9hOfVnuNM9_YmIyJcwG1xCjTpMQcaVk3tZy4fjr_1-aVffrX928yoKEUbxwAZuzpy6HxPZlPcVXG4zrP0DLAwyLhfn8x4YIl7_63JIAocJqUsJvlkOs19OqmrK2UfyDunL99kGz3jRjEqZyGN36lMWzq_C2aljm6ArT3O1jMAtPkUbRjth1a5mFaGaBkU-wpnQlHZ_VKBJsdV6Y_oeOMZNLu5nip19LnYhUWtkEiU2DujPWhOvX8riTICzEbeQCwN7C4MFJecdHjaGw6rCkkR9Z1WLULRfQSOhBx5AhzZO5hNbbDvVElHg3txmPRL66MHB5asN8PpKKyc39nUdSvJSgFcAXkbOkjs3xLNx7zzdVC7nEgSnUV-zW1pqyMpHTHKwHtbk0ts60lk49ObR_ZYBP6nbWRnSF6UtgBaEOakuDeiQQLhtmVP02wsHTSArcBNVkB_Gef0gZivXObq3L5D2eQaXGtO8dgOtTpr1ksd5RhSX-oCoEQ8FUDTawofhF5hux8yJgEeYJ71ijlcCeAO0q05tvspDX14TriVOwYtgBqheFYGZZFF5WGQwuexn7kxuEjreiO0dT4KLgZWR0L1nWbQSw6m207V0KK6nSUqRMR1wicDe2xRWQq4PagO3bob7cTZD8y_Owf4_YKxISgp2QJbaSl9jlcV9sZC_ZRRMywiDU3lUmTqISIS_AmY2I2nvfOupWMG0yc5T300c0J734BupCDrnXUmn-J5nOQMjDSsRcLZmUuEWzyyq3B4GcxioavGTk1S3pEYj008dBsSSNcdO2t8NvbUzyDbgdRRM56KpxOJ8-ploes1SnJDv3UkZLVsfc9cuol7yjIQmzfUOQtu91VluVu8d1b35BIZMHSfruvdo_ZwNa1kmK0GQhRYQC9IwUPK0l22aNHZchv6eopS4wVdKVkU7MX07UWrpGQZG6x-gmpEDaewZovXm-WrCv8KKqWIlsFQyGoLxXl0_mo5sbPgyEwNsJQ317F6Rj7fdqnkvsspncTBgDtkTwgkGNXx8Rgd1SKPLunAVgHnBrc2vlm15ZK3O4aByyHe9hxjDE-J8VU8c1wh_FIhQGkANUM6fm9TBakCAl3FAF39pBkvFkw=w200-h190-p-k-nu"
                alt=""
              />

              <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900 ">
                <img
                  className="object-cover object-center w-10 h-10 rounded-full"
                  src="https://lh3.googleusercontent.com/fife/AAbDypCtkF41Q25UJbSHOgUDKhEWeUPQD4G7leeACbDJXeKkClzeJYdKXCvTsQvsC9C8p5KNzLkbaQtG4ALbCSPzKCHUpCn7R06vIUrmDErE4mBkdXLwzyU4LWYHLkYR6_dIdq2tsfojWfoRhyG588dHiJs85NkzbKcH8wPPf_poFzW1ogC62eAVht6dWapWkySaBX9x68dEuy8tJ7E-jEtEU8wKyf2YgDyqz9vxzvBi7JQo1BsgyqLH2JnCNyEVWBXz7UUtsB2y-pIoNEGgceF6u9GEdMegeCLn2_NlD9q0OSvAU9s_mHIym5H7oHRXM5tkcSKvPbNw_XfOFqgj89ju5G-XmEc45J1CgDgwBKadL91c0h6UpABER4Z9hOfVnuNM9_YmIyJcwG1xCjTpMQcaVk3tZy4fjr_1-aVffrX928yoKEUbxwAZuzpy6HxPZlPcVXG4zrP0DLAwyLhfn8x4YIl7_63JIAocJqUsJvlkOs19OqmrK2UfyDunL99kGz3jRjEqZyGN36lMWzq_C2aljm6ArT3O1jMAtPkUbRjth1a5mFaGaBkU-wpnQlHZ_VKBJsdV6Y_oeOMZNLu5nip19LnYhUWtkEiU2DujPWhOvX8riTICzEbeQCwN7C4MFJecdHjaGw6rCkkR9Z1WLULRfQSOhBx5AhzZO5hNbbDvVElHg3txmPRL66MHB5asN8PpKKyc39nUdSvJSgFcAXkbOkjs3xLNx7zzdVC7nEgSnUV-zW1pqyMpHTHKwHtbk0ts60lk49ObR_ZYBP6nbWRnSF6UtgBaEOakuDeiQQLhtmVP02wsHTSArcBNVkB_Gef0gZivXObq3L5D2eQaXGtO8dgOtTpr1ksd5RhSX-oCoEQ8FUDTawofhF5hux8yJgEeYJ71ijlcCeAO0q05tvspDX14TriVOwYtgBqheFYGZZFF5WGQwuexn7kxuEjreiO0dT4KLgZWR0L1nWbQSw6m207V0KK6nSUqRMR1wicDe2xRWQq4PagO3bob7cTZD8y_Owf4_YKxISgp2QJbaSl9jlcV9sZC_ZRRMywiDU3lUmTqISIS_AmY2I2nvfOupWMG0yc5T300c0J734BupCDrnXUmn-J5nOQMjDSsRcLZmUuEWzyyq3B4GcxioavGTk1S3pEYj008dBsSSNcdO2t8NvbUzyDbgdRRM56KpxOJ8-ploes1SnJDv3UkZLVsfc9cuol7yjIQmzfUOQtu91VluVu8d1b35BIZMHSfruvdo_ZwNa1kmK0GQhRYQC9IwUPK0l22aNHZchv6eopS4wVdKVkU7MX07UWrpGQZG6x-gmpEDaewZovXm-WrCv8KKqWIlsFQyGoLxXl0_mo5sbPgyEwNsJQ317F6Rj7fdqnkvsspncTBgDtkTwgkGNXx8Rgd1SKPLunAVgHnBrc2vlm15ZK3O4aByyHe9hxjDE-J8VU8c1wh_FIhQGkANUM6fm9TBakCAl3FAF39pBkvFkw=w200-h190-p-k-nu"
                  alt=""
                />

                <div className="mx-4 ">
                  <h1 className="text-sm text-gray-700 dark:text-gray-200">
                    Gebruiker
                  </h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Leerkrachtnaam
                  </p>
                </div>
              </div>
            </div> 
              <div className="my-2">
              <a 
            href= "#"
            className="mt-6 text-xl font-semibold text-white dark:text-white hover:text-blue-400">
              Titel evaluatie
            </a>

            <hr className="w-32 my-4 text-blue-500" />

            <p className="text-sm text-gray-500 dark:text-gray-400">
              beschrijving
            </p>  
              </div>
          </div>

          <div>
            <div className="relative">
              <img
                className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                src="https://lh3.googleusercontent.com/fife/AAbDypCtkF41Q25UJbSHOgUDKhEWeUPQD4G7leeACbDJXeKkClzeJYdKXCvTsQvsC9C8p5KNzLkbaQtG4ALbCSPzKCHUpCn7R06vIUrmDErE4mBkdXLwzyU4LWYHLkYR6_dIdq2tsfojWfoRhyG588dHiJs85NkzbKcH8wPPf_poFzW1ogC62eAVht6dWapWkySaBX9x68dEuy8tJ7E-jEtEU8wKyf2YgDyqz9vxzvBi7JQo1BsgyqLH2JnCNyEVWBXz7UUtsB2y-pIoNEGgceF6u9GEdMegeCLn2_NlD9q0OSvAU9s_mHIym5H7oHRXM5tkcSKvPbNw_XfOFqgj89ju5G-XmEc45J1CgDgwBKadL91c0h6UpABER4Z9hOfVnuNM9_YmIyJcwG1xCjTpMQcaVk3tZy4fjr_1-aVffrX928yoKEUbxwAZuzpy6HxPZlPcVXG4zrP0DLAwyLhfn8x4YIl7_63JIAocJqUsJvlkOs19OqmrK2UfyDunL99kGz3jRjEqZyGN36lMWzq_C2aljm6ArT3O1jMAtPkUbRjth1a5mFaGaBkU-wpnQlHZ_VKBJsdV6Y_oeOMZNLu5nip19LnYhUWtkEiU2DujPWhOvX8riTICzEbeQCwN7C4MFJecdHjaGw6rCkkR9Z1WLULRfQSOhBx5AhzZO5hNbbDvVElHg3txmPRL66MHB5asN8PpKKyc39nUdSvJSgFcAXkbOkjs3xLNx7zzdVC7nEgSnUV-zW1pqyMpHTHKwHtbk0ts60lk49ObR_ZYBP6nbWRnSF6UtgBaEOakuDeiQQLhtmVP02wsHTSArcBNVkB_Gef0gZivXObq3L5D2eQaXGtO8dgOtTpr1ksd5RhSX-oCoEQ8FUDTawofhF5hux8yJgEeYJ71ijlcCeAO0q05tvspDX14TriVOwYtgBqheFYGZZFF5WGQwuexn7kxuEjreiO0dT4KLgZWR0L1nWbQSw6m207V0KK6nSUqRMR1wicDe2xRWQq4PagO3bob7cTZD8y_Owf4_YKxISgp2QJbaSl9jlcV9sZC_ZRRMywiDU3lUmTqISIS_AmY2I2nvfOupWMG0yc5T300c0J734BupCDrnXUmn-J5nOQMjDSsRcLZmUuEWzyyq3B4GcxioavGTk1S3pEYj008dBsSSNcdO2t8NvbUzyDbgdRRM56KpxOJ8-ploes1SnJDv3UkZLVsfc9cuol7yjIQmzfUOQtu91VluVu8d1b35BIZMHSfruvdo_ZwNa1kmK0GQhRYQC9IwUPK0l22aNHZchv6eopS4wVdKVkU7MX07UWrpGQZG6x-gmpEDaewZovXm-WrCv8KKqWIlsFQyGoLxXl0_mo5sbPgyEwNsJQ317F6Rj7fdqnkvsspncTBgDtkTwgkGNXx8Rgd1SKPLunAVgHnBrc2vlm15ZK3O4aByyHe9hxjDE-J8VU8c1wh_FIhQGkANUM6fm9TBakCAl3FAF39pBkvFkw=w200-h190-p-k-nu"
                alt=""
              />

              <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900 ">
                <img
                  className="object-cover object-center w-10 h-10 rounded-full"
                  src="https://lh3.googleusercontent.com/fife/AAbDypCtkF41Q25UJbSHOgUDKhEWeUPQD4G7leeACbDJXeKkClzeJYdKXCvTsQvsC9C8p5KNzLkbaQtG4ALbCSPzKCHUpCn7R06vIUrmDErE4mBkdXLwzyU4LWYHLkYR6_dIdq2tsfojWfoRhyG588dHiJs85NkzbKcH8wPPf_poFzW1ogC62eAVht6dWapWkySaBX9x68dEuy8tJ7E-jEtEU8wKyf2YgDyqz9vxzvBi7JQo1BsgyqLH2JnCNyEVWBXz7UUtsB2y-pIoNEGgceF6u9GEdMegeCLn2_NlD9q0OSvAU9s_mHIym5H7oHRXM5tkcSKvPbNw_XfOFqgj89ju5G-XmEc45J1CgDgwBKadL91c0h6UpABER4Z9hOfVnuNM9_YmIyJcwG1xCjTpMQcaVk3tZy4fjr_1-aVffrX928yoKEUbxwAZuzpy6HxPZlPcVXG4zrP0DLAwyLhfn8x4YIl7_63JIAocJqUsJvlkOs19OqmrK2UfyDunL99kGz3jRjEqZyGN36lMWzq_C2aljm6ArT3O1jMAtPkUbRjth1a5mFaGaBkU-wpnQlHZ_VKBJsdV6Y_oeOMZNLu5nip19LnYhUWtkEiU2DujPWhOvX8riTICzEbeQCwN7C4MFJecdHjaGw6rCkkR9Z1WLULRfQSOhBx5AhzZO5hNbbDvVElHg3txmPRL66MHB5asN8PpKKyc39nUdSvJSgFcAXkbOkjs3xLNx7zzdVC7nEgSnUV-zW1pqyMpHTHKwHtbk0ts60lk49ObR_ZYBP6nbWRnSF6UtgBaEOakuDeiQQLhtmVP02wsHTSArcBNVkB_Gef0gZivXObq3L5D2eQaXGtO8dgOtTpr1ksd5RhSX-oCoEQ8FUDTawofhF5hux8yJgEeYJ71ijlcCeAO0q05tvspDX14TriVOwYtgBqheFYGZZFF5WGQwuexn7kxuEjreiO0dT4KLgZWR0L1nWbQSw6m207V0KK6nSUqRMR1wicDe2xRWQq4PagO3bob7cTZD8y_Owf4_YKxISgp2QJbaSl9jlcV9sZC_ZRRMywiDU3lUmTqISIS_AmY2I2nvfOupWMG0yc5T300c0J734BupCDrnXUmn-J5nOQMjDSsRcLZmUuEWzyyq3B4GcxioavGTk1S3pEYj008dBsSSNcdO2t8NvbUzyDbgdRRM56KpxOJ8-ploes1SnJDv3UkZLVsfc9cuol7yjIQmzfUOQtu91VluVu8d1b35BIZMHSfruvdo_ZwNa1kmK0GQhRYQC9IwUPK0l22aNHZchv6eopS4wVdKVkU7MX07UWrpGQZG6x-gmpEDaewZovXm-WrCv8KKqWIlsFQyGoLxXl0_mo5sbPgyEwNsJQ317F6Rj7fdqnkvsspncTBgDtkTwgkGNXx8Rgd1SKPLunAVgHnBrc2vlm15ZK3O4aByyHe9hxjDE-J8VU8c1wh_FIhQGkANUM6fm9TBakCAl3FAF39pBkvFkw=w200-h190-p-k-nu"
                  alt=""
                />

                <div className="mx-4">
                  <h1 className="text-sm text-gray-700 dark:text-gray-200">
                    leerkracht
                  </h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    leerkrachtnaam
                  </p>
                </div>
              </div>
            </div>

            <div className="my-2">
              <a 
            href= "#"
            className="mt-6 text-xl font-semibold text-white dark:text-white hover:text-blue-400">
              Titel evaluatie
            </a>

            <hr className="w-32 my-4 text-blue-500" />

            <p className="text-sm text-gray-500 dark:text-gray-400">
              beschrijving
            </p>  
              </div>
          </div>

          <div>
            <div className="relative">
              <img
                className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                src="https://lh3.googleusercontent.com/fife/AAbDypCtkF41Q25UJbSHOgUDKhEWeUPQD4G7leeACbDJXeKkClzeJYdKXCvTsQvsC9C8p5KNzLkbaQtG4ALbCSPzKCHUpCn7R06vIUrmDErE4mBkdXLwzyU4LWYHLkYR6_dIdq2tsfojWfoRhyG588dHiJs85NkzbKcH8wPPf_poFzW1ogC62eAVht6dWapWkySaBX9x68dEuy8tJ7E-jEtEU8wKyf2YgDyqz9vxzvBi7JQo1BsgyqLH2JnCNyEVWBXz7UUtsB2y-pIoNEGgceF6u9GEdMegeCLn2_NlD9q0OSvAU9s_mHIym5H7oHRXM5tkcSKvPbNw_XfOFqgj89ju5G-XmEc45J1CgDgwBKadL91c0h6UpABER4Z9hOfVnuNM9_YmIyJcwG1xCjTpMQcaVk3tZy4fjr_1-aVffrX928yoKEUbxwAZuzpy6HxPZlPcVXG4zrP0DLAwyLhfn8x4YIl7_63JIAocJqUsJvlkOs19OqmrK2UfyDunL99kGz3jRjEqZyGN36lMWzq_C2aljm6ArT3O1jMAtPkUbRjth1a5mFaGaBkU-wpnQlHZ_VKBJsdV6Y_oeOMZNLu5nip19LnYhUWtkEiU2DujPWhOvX8riTICzEbeQCwN7C4MFJecdHjaGw6rCkkR9Z1WLULRfQSOhBx5AhzZO5hNbbDvVElHg3txmPRL66MHB5asN8PpKKyc39nUdSvJSgFcAXkbOkjs3xLNx7zzdVC7nEgSnUV-zW1pqyMpHTHKwHtbk0ts60lk49ObR_ZYBP6nbWRnSF6UtgBaEOakuDeiQQLhtmVP02wsHTSArcBNVkB_Gef0gZivXObq3L5D2eQaXGtO8dgOtTpr1ksd5RhSX-oCoEQ8FUDTawofhF5hux8yJgEeYJ71ijlcCeAO0q05tvspDX14TriVOwYtgBqheFYGZZFF5WGQwuexn7kxuEjreiO0dT4KLgZWR0L1nWbQSw6m207V0KK6nSUqRMR1wicDe2xRWQq4PagO3bob7cTZD8y_Owf4_YKxISgp2QJbaSl9jlcV9sZC_ZRRMywiDU3lUmTqISIS_AmY2I2nvfOupWMG0yc5T300c0J734BupCDrnXUmn-J5nOQMjDSsRcLZmUuEWzyyq3B4GcxioavGTk1S3pEYj008dBsSSNcdO2t8NvbUzyDbgdRRM56KpxOJ8-ploes1SnJDv3UkZLVsfc9cuol7yjIQmzfUOQtu91VluVu8d1b35BIZMHSfruvdo_ZwNa1kmK0GQhRYQC9IwUPK0l22aNHZchv6eopS4wVdKVkU7MX07UWrpGQZG6x-gmpEDaewZovXm-WrCv8KKqWIlsFQyGoLxXl0_mo5sbPgyEwNsJQ317F6Rj7fdqnkvsspncTBgDtkTwgkGNXx8Rgd1SKPLunAVgHnBrc2vlm15ZK3O4aByyHe9hxjDE-J8VU8c1wh_FIhQGkANUM6fm9TBakCAl3FAF39pBkvFkw=w200-h190-p-k-nu"
                alt=""
              />

              <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900 ">
                <img
                  className="object-cover object-center w-10 h-10 rounded-full"
                  src="https://lh3.googleusercontent.com/fife/AAbDypCtkF41Q25UJbSHOgUDKhEWeUPQD4G7leeACbDJXeKkClzeJYdKXCvTsQvsC9C8p5KNzLkbaQtG4ALbCSPzKCHUpCn7R06vIUrmDErE4mBkdXLwzyU4LWYHLkYR6_dIdq2tsfojWfoRhyG588dHiJs85NkzbKcH8wPPf_poFzW1ogC62eAVht6dWapWkySaBX9x68dEuy8tJ7E-jEtEU8wKyf2YgDyqz9vxzvBi7JQo1BsgyqLH2JnCNyEVWBXz7UUtsB2y-pIoNEGgceF6u9GEdMegeCLn2_NlD9q0OSvAU9s_mHIym5H7oHRXM5tkcSKvPbNw_XfOFqgj89ju5G-XmEc45J1CgDgwBKadL91c0h6UpABER4Z9hOfVnuNM9_YmIyJcwG1xCjTpMQcaVk3tZy4fjr_1-aVffrX928yoKEUbxwAZuzpy6HxPZlPcVXG4zrP0DLAwyLhfn8x4YIl7_63JIAocJqUsJvlkOs19OqmrK2UfyDunL99kGz3jRjEqZyGN36lMWzq_C2aljm6ArT3O1jMAtPkUbRjth1a5mFaGaBkU-wpnQlHZ_VKBJsdV6Y_oeOMZNLu5nip19LnYhUWtkEiU2DujPWhOvX8riTICzEbeQCwN7C4MFJecdHjaGw6rCkkR9Z1WLULRfQSOhBx5AhzZO5hNbbDvVElHg3txmPRL66MHB5asN8PpKKyc39nUdSvJSgFcAXkbOkjs3xLNx7zzdVC7nEgSnUV-zW1pqyMpHTHKwHtbk0ts60lk49ObR_ZYBP6nbWRnSF6UtgBaEOakuDeiQQLhtmVP02wsHTSArcBNVkB_Gef0gZivXObq3L5D2eQaXGtO8dgOtTpr1ksd5RhSX-oCoEQ8FUDTawofhF5hux8yJgEeYJ71ijlcCeAO0q05tvspDX14TriVOwYtgBqheFYGZZFF5WGQwuexn7kxuEjreiO0dT4KLgZWR0L1nWbQSw6m207V0KK6nSUqRMR1wicDe2xRWQq4PagO3bob7cTZD8y_Owf4_YKxISgp2QJbaSl9jlcV9sZC_ZRRMywiDU3lUmTqISIS_AmY2I2nvfOupWMG0yc5T300c0J734BupCDrnXUmn-J5nOQMjDSsRcLZmUuEWzyyq3B4GcxioavGTk1S3pEYj008dBsSSNcdO2t8NvbUzyDbgdRRM56KpxOJ8-ploes1SnJDv3UkZLVsfc9cuol7yjIQmzfUOQtu91VluVu8d1b35BIZMHSfruvdo_ZwNa1kmK0GQhRYQC9IwUPK0l22aNHZchv6eopS4wVdKVkU7MX07UWrpGQZG6x-gmpEDaewZovXm-WrCv8KKqWIlsFQyGoLxXl0_mo5sbPgyEwNsJQ317F6Rj7fdqnkvsspncTBgDtkTwgkGNXx8Rgd1SKPLunAVgHnBrc2vlm15ZK3O4aByyHe9hxjDE-J8VU8c1wh_FIhQGkANUM6fm9TBakCAl3FAF39pBkvFkw=w200-h190-p-k-nu"
                  alt=""
                />

                <div className="mx-4">
                  <h1 className="text-sm text-gray-700 dark:text-gray-200">
                    Leerkracht
                  </h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Leerkrachtnaam
                  </p>
                </div>
              </div>
            </div>

            <div className="my-2">
              <a 
            href= "#"
            className="mt-6 text-xl font-semibold text-white dark:text-white hover:text-blue-400">
              Titel evaluatie
            </a>

            <hr className="w-32 my-4 text-blue-500" />

            <p className="text-sm text-gray-500 dark:text-gray-400">
              beschrijving
            </p>  
              </div>

          </div>
        </div>
      </div>
    </section>
  );
}
