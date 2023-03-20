import React from "react";
import "./style.scss";
import Img from "./.././../assets/img/acc.png";

const index = () => {
  let user = localStorage.getItem("user");
  return (
    <>
      <div className="profile-page pt-20">
        <section className="relative block py-16 ">
          <div
            className="absolute top-0 w-full h-full bg-center"
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 "
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0px)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
          <div className=" mx-auto px-4">
            <div className="relative profile-inner ml-28 flex flex-col min-w-0 break-words w-12/12 mb-6 shadow-xl rounded-lg">
              <div className="px-6">
                <div className="flex w-full flex-wrap justify-center items-center flex-col">
                  <div className="w-full profile-top ">
                    <div className=" w-full profile-avatar flex items-center justify-center">
                      <div className="rounded-full p-2 animate animate-pulse"></div>
                      <img
                        alt="avatar profile"
                        width={120}
                        height={120}
                        src={Img}
                        className="shadow-xl  avatar rounded-full max-w-150-px"
                      />
                    </div>
                  </div>
                  <div className="w-full profile-bottom flex items-center flex-row-reverse justify-between ">
                    <div className="w-1/2 top-right flex items-end justify-end ">
                      <button
                        className="bg-amber-500 active:bg-amber-600 uppercase  nav-title font-bold  px-4 py-2 rounded outline-none focus:outline-none ease-linear transition-all text-sm duration-150"
                        type="button"
                      >
                        Connect
                      </button>
                    </div>
                    <div className="w-1/2 top-left flex justify-between items-start">
                      <div className="p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide nav-title text-blueGray-600">
                          22
                        </span>
                        <span className="text-sm nav-title">Achievement</span>
                      </div>
                      <div className="p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide nav-title text-blueGray-600">
                          10
                        </span>
                        <span className="text-sm nav-title">Deggre</span>
                      </div>
                      <div className=" p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide nav-title text-blueGray-600">
                          89
                        </span>
                        <span className="text-sm nav-title">Manager</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal nav-title mb-2">
                    {user}
                  </h3>
                  <div className="text-sm leading-normal mt-0 nav-title mb-nav-title font-bold uppercase">
                    WELCOME to system
                  </div>
                  <div className="mb-2 nav-title mt-10">
                    Creative Tim Officer
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-gray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed nav-title">
                        An artist of considerable range, Jenna the name taken by
                        Melbourne-raised, Brooklyn-based Nick Murphy writes,
                        performs and records all of his own music, giving it a
                        warm, intimate feel with a solid groove structure. An
                        artist of considerable range.
                      </p>
                      <button className="font-normal text-pink-500">
                        Show more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default index;
