import React from "react";
import "./style.scss";
import { useState, useRef, useEffect } from "react";
import Webcam from "react-webcam";
import { BsClock } from "react-icons/bs";
const index = () => {
  const [input, setInput] = useState();
  const [imgSrc, setImgSrc] = useState(null);
  const webcamRef = useRef(null);
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);
  const videoConstraints = () => {
    facingMode: "user";
  };
  let local = localStorage.getItem("user");
  const [data, setDateState] = useState(new Date());

  const close = () => {
    const [data2, setDateState2] = useState(new Date());
  };


  return (
    <>
      <div className="container">
        <div className="attendance mx-24 mt-32 p-6 rounded-lg">
          <div className="attendance-track flex items-center gap-1 nav-title">
            <BsClock />
            <h3 className="nav-title text-lg">Worker Attendance Track time</h3>
          </div>
          <div className="video-track flex items-start gap-6  justify-between w-full">
            {/* <video className="video w-1/2 rounded-md bg-slate-600"></video> */}
            <div className="video rounded-md w-1/2">
              <Webcam
                className="rounded-lg w-full"
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
                ref={webcamRef}
                audio={false}
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
                    value={local}
                    onChange={(e) => setInput(e.target.value)}
                    id="userName"
                    placeholder="Please your User name"
                    className="border bg-slate-100 w-full text-black rounded-md my-4 p-2 focus:border-outline-400"
                  />
                </label>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className="nav-title font-medium hover:bg-orange-400 focus:ring-orange-600 focus:ring-2 bg-orange-500 py-1 px-3 rounded-2xl"
                    onClick={capture}
                  >
                    Save Time
                  </button>
                  <button
                    type="button"
                    className="nav-title font-medium hover:bg-red-400 focus:ring-red-600 focus:ring-2 bg-red-500 py-1 px-3 rounded-2xl"
                    // onClick={close}
                  >
                    Close Time
                  </button>
                </div>
              </form>
              {imgSrc && (
                <div className="video-tracker">
                  <div className="track-time border rounded-md p-2 mt-5 flex items-start justify-between gap-3">
                    <div className="flex items-start justify-start gap-3">
                      <img
                        className="camera-screen-img  rounded-full m-0"
                        src={imgSrc}
                      />
                      <div className="flex flex-col item-start gap-2">
                        <h4>{local}</h4>
                        <p className="nav-title font-medium text-sm">
                          ID: <span>1234</span>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 justify-between m-0 p-0">
                      <div className="flex items-center gap-2">
                        <BsClock />
                        <span className="time-start">
                          {data.toLocaleDateString("en-US", {
                            hour: "numeric",
                            minute: "numeric",
                            second: "numeric",
                            hour12: false,
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BsClock />
                        <span className="time-start finally">00:00 </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      
      </div>
    </>
  );
};

export default index;
