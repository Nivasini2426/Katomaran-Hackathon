# Face Recognition Registration App

This project is a web application that allows users to register their faces using a webcam. The backend uses **Flask** and **face_recognition** library to detect and encode faces, storing the face encodings along with user names and timestamps in an SQLite database. The frontend is built with **React**, capturing webcam images and sending them to the backend for registration.

---

## About

This project is part of a hackathon run by (https://katomaran.com).

---

## Features

- Webcam-based face capture using React and `react-webcam`.
- Face detection and encoding using `face_recognition` in Flask.
- SQLite database to store face encodings, names, and registration timestamps.
- REST API endpoint `/register` to handle face registration.
- Cross-Origin Resource Sharing (CORS) enabled to allow React frontend to communicate with Flask backend.

---

## Technologies Used

- **Backend:** Python, Flask, face_recognition, SQLite, flask-cors
- **Frontend:** React, react-webcam, axios
- **Database:** SQLite

---


## Troubleshooting

- Ensure the Flask backend is running before using the frontend.
- Make sure CORS is enabled in the backend (`flask-cors` package and `CORS(app)` in `app.py`).
- Check browser developer console and Flask terminal logs for errors.
- Ensure you have a clear face in the webcam image for successful face detection.

---

## Here I have developed only till capturing the face.

