import React from "react";


const Navbar = () => {
  return (
    <>
      <section className="p-3 md:px-14 py-3 mx-auto bg-purple-950 border  border-b-purple-500">
        <nav className="flex items-center justify-between  ">
          <div>
            <a href="/" className=" flex text-3xl font-semibold text-white ">
              <svg
                class="w-10 h-10 text-white mx-2 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="square"
                  stroke-width="1.1"
                  d="M8 15h7.01v.01H15L8 15Z"
                />
                <path
                  stroke="currentColor"
                  stroke-linecap="square"
                  stroke-width="1.1"
                  d="M20 6H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Z"
                />
                <path
                  stroke="currentColor"
                  stroke-linecap="square"
                  stroke-width="1.1"
                  d="M6 9h.01v.01H6V9Zm0 3h.01v.01H6V12Zm0 3h.01v.01H6V15Zm3-6h.01v.01H9V9Zm0 3h.01v.01H9V12Zm3-3h.01v.01H12V9Zm0 3h.01v.01H12V12Zm3 0h.01v.01H15V12Zm3 0h.01v.01H18V12Zm0 3h.01v.01H18V15Zm-3-6h.01v.01H15V9Zm3 0h.01v.01H18V9Z"
                />
              </svg>

              <span className="font-mono">Typily</span>
            </a>
          </div>
          <div>
            <ul>
              <button className="md:hidden text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
              <li className="flex">
                <a
                  className="mx-2 border px-4 py-2 rounded-2xl border-purple-950 hover:border-purple-400 hover:border-dashed  text-purple-400 font-bold shadow-2xl hover:text-white hidden md:block"
                  href=""
                >
                  Leaderboard
                </a>
                <a
                  className="mx-2 border px-4 py-2 rounded-2xl border-purple-950 hover:border-purple-400 hover:border-dashed  text-purple-400 font-bold shadow-2xl hover:text-white hidden md:block"
                  href=""
                >
                  Pracitce
                </a>
                <a
                  className="mx-2 border px-4 py-2 rounded-2xl border-purple-950 hover:border-purple-400 hover:border-dashed  text-purple-400 font-bold shadow-2xl hover:text-white hidden md:block"
                  href=""
                >
                  Stats
                </a>

                <a
                  className="mx-3 px-6 py-2 rounded-2xl bg-fuchsia-500 font-bold shadow-2xl hover:text-white hidden md:block"
                  href=""
                >
                  Sign In
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
