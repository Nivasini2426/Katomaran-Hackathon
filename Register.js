import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import axios from "axios";

const videoConstraints = {
  width: 400,
  height: 300,
  facingMode: "user",
};

export default function Register() {
  const webcamRef = useRef(null);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const captureAndSend = async () => {
    if (!name) {
      setMessage("Please enter a name.");
      return;
    }

    const imageSrc = webcamRef.current.getScreenshot();

    setLoading(true);
    try {
      const response = await axios.post("http://127.0.0.1:5000/register", {
        name: name,
        image: imageSrc,
      });

      setMessage(response.data.message);
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Error registering face. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-4 space-y-4">
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        className="rounded-xl border"
      />

      <input
        type="text"
        placeholder="Enter your name"
        className="border p-2 rounded w-full max-w-sm"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button
        onClick={captureAndSend}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {loading ? "Registering..." : "Register Face"}
      </button>

      {message && (
        <div className="mt-2 text-center text-sm text-green-600">{message}</div>
      )}
    </div>
  );
}
