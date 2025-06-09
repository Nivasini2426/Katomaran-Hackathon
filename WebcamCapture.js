import React, { useRef, useCallback, useState } from "react";
import Webcam from "react-webcam";
import axios from "axios";

const videoConstraints = {
  width: 400,
  height: 300,
  facingMode: "user",
};

export default function WebcamCapture() {
  const webcamRef = useRef(null);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    axios.post("http://localhost:5000/register", {
      name: name,
      image: imageSrc
    })
    .then((res) => setStatus("Registered successfully"))
    .catch((err) => setStatus("Registration failed"));
  }, [webcamRef, name]);

  return (
    <div>
      <Webcam
        audio={false}
        height={300}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={400}
        videoConstraints={videoConstraints}
      />
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={capture}>Register Face</button>
      <p>{status}</p>
    </div>
  );
}
