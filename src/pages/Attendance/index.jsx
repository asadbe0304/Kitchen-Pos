import React from "react";
import "./style.scss";
import { useState } from "react";
import Webcam from "react-webcam";
const index = () => {
  // function streamvideo() {
  //   const video = document.querySelector(".video");
  //   const options = { video: true };
  //   navigator.mediaDevices.getUserMedia(options).then(strem => video.srcObject = strem).catch(err => console.log(err))
  // }
  // streamvideo()
  // const [video, setVideo] = useState([]);
  const videoConstraints = () => {
    facingMode: "user";
  };
  return (
    <>
      <div className="container">
        <div className="attendance shadow-2xl w-3/4 mx-24 mt-6 p-6 rounded-lg">
          <div className="attendance-track nav-title">
            <h3 className="nav-title text-lg">Worker Attendance Track</h3>
          </div>
          <div className="video-track flex items-start gap-6  justify-between w-full">
            {/* <video className="video w-1/2 rounded-md bg-slate-600"></video> */}
            <div className="video rounded-md w-1/2">
              <Webcam
                className="rounded-lg w-full"
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
              />
            </div>
            <div className="w-1/2 track-form">
              <form className=" flex flex-col items-start mt-6 justify-between w-full">
                <label
                  htmlFor="userName"
                  className="flex w-full nav-title font-medium flex-col items-start"
                >
                  UserName
                  <input
                    type="text"
                    required
                    id="userName"
                    placeholder="Please your User name"
                    className="border bg-slate-100 w-full text-black rounded-md my-4 p-2 focus:border-outline-400"
                  />
                </label>
                {/* {({ getScreenshot }) => { */}
                  <button
                    type="button"
                    className="nav-title font-medium hover:bg-orange-400 focus:ring-orange-600 focus:ring-2 bg-orange-500 py-1 px-3 rounded-2xl"
                    // onClick={() => {
                      // const ImgSrc = getScreenshot();
                    // }}
                  >
                    Save Time
                  </button>
                {/* }} */}
              </form>
              {/* <img src={imgSrc} width={200} height={200} alt="" /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
