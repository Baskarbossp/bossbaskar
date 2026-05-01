import React, { useState } from "react";

const Times = () => {
  const [time, setTime] = useState(15);
  
  return (
    <>
      <div className=" flex mt-15 font-medium justify-center items-center gap-5">
        <div className="flex itams-center justify-center border rounded-4xl border-purple-400 bg-[#21113a] px-3">
          <div className="flex itams-center justify-center w-full gap-3 text-white py-2 px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-5  text-purple-400 m-auto"
            >
              <path
                fill-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                clip-rule="evenodd"
              />
            </svg>
            <span className="m-auto">Times:</span>
            <button
              className="mx-auto px-4 py-1 text-purple-500 hover:bg-purple-500 rounded-xl hover:text-white"
              href="/"
            >
              15s
            </button>
            <button
              className="mx-auto px-4 py-1 text-purple-500 hover:bg-purple-500 rounded-xl hover:text-white"
              href="/"
            >
              30s
            </button>
            <button
              className="mx-auto px-4  py-1 text-purple-500 hover:bg-purple-500 rounded-xl hover:text-white"
              href="/"
            >
              60s
            </button>
            <button
              className="mx-auto px-4  py-1 text-purple-500 hover:bg-purple-500 rounded-xl hover:text-white"
              href="/"
            >
              120s
            </button>
          </div>
        </div>
        <div className="md:flex itams-center justify-center border rounded-4xl border-purple-400 bg-[#21113a] px-3 hidden ">
          <div className="flex itams-center justify-center gap-3 w-full text-white py-3 px-2">
            <svg
              class="w-5 h-5 fill-[#c64dff] mt-1"
              viewBox="0 0 384 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M221.5 51.7C216.6 39.8 204.9 32 192 32s-24.6 7.8-29.5 19.7l-120 288-40 96c-6.8 16.3 .9 35 17.2 41.8s35-.9 41.8-17.2L93.3 384H290.7l31.8 76.3c6.8 16.3 25.5 24 41.8 17.2s24-25.5 17.2-41.8l-40-96-120-288zM264 320H120l72-172.8L264 320z"></path>
            </svg>
            Mode:
            <ul>
              <li>
                <a
                  className="mx-2 px-4 py-1 text-purple-500 hover:bg-purple-500 rounded-xl hover:text-white"
                  href="/"
                >
                  Words
                </a>
                <a
                  className="mx-2 px-4  py-1 text-purple-500 hover:bg-purple-500 rounded-xl hover:text-white"
                  href="/"
                >
                  Sentences
                </a>
                <a
                  className="mx-2 px-4  py-1 text-purple-500 hover:bg-purple-500 rounded-xl hover:text-white"
                  href="/"
                >
                  Code
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Typing Places */}
      <div className="border border-purple-400 md:mt-10 mx-25 mt-6 bg-[#1d0f34] rounded-2xl shadow-2xl">
        <div className="text-white flex text-center p-6">
          <div className="border-r border-purple-400">
            <span className="text-4xl p-9 font-mono">{time}</span>
            <p className="font-medium text-purple-300">Seconds</p>
          </div>
          <div>
            <span className="text-4xl p-9 text-purple-500 font-mono">0</span>
            <p lassName="font-medium text-purple-300">WPM</p>
          </div>
          <div>
            <span className="text-4xl p-9 text-pink-400 font-mono">100</span>
            <p lassName="font-medium text-purple-300">% Accuracy</p>
          </div>
          <div className="flex items-center justify-end md:w-full mr-9">
            <svg
              class="w-12 h-12 fill-[#ffffff] text-white bg-purple-700 p-3 rounded-4xl"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H464c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0s-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3s163.8-62.5 226.3 0L386.3 160z"></path>
            </svg>
          </div>
        </div>
        <div className="border border-purple-400 rounded-2xl p-10 m-8">
          <div className="text-2xl font-mono">
            <p className="text-purple-300">
              the quick brown fox jumps over the lazy dog near the riverbank
              where children play
            </p>
          </div>
        </div>
        <div>
          <input
            type="text"
            className="text-white p-7 m-8 mt-1 w-270 rounded-3xl border border-purple-400 font-mono text-2xl"
            placeholder="Start typing here..."
          />
        </div>
      </div>
    </>
  );
};

export default Times;
