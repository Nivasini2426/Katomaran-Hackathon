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

## Setup and Running the Project

### Backend (Flask)

1. Navigate to the backend folder:

    ```bash
    cd face-backend
    ```

2. Create and activate your virtual environment (if not already done):

    ```bash
    python -m venv .venv
    .venv\Scripts\activate  # Windows
    # OR
    source .venv/bin/activate  # macOS/Linux
    ```

3. Install required packages:

    ```bash
    pip install -r requirements.txt
    ```

4. Run the Flask app:

    ```bash
    python app.py
    ```

5. The backend will run on: `http://127.0.0.1:5000`

---

### Frontend (React)

1. Navigate to the React frontend folder:

    ```bash
    cd client
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the React development server:

    ```bash
    npm start
    ```

4. Open your browser and visit:

    ```
    http://localhost:3000
    ```

---

## How to Use

1. Open the frontend app in your browser.
2. Enter your name in the input field.
3. Make sure your face is clearly visible in the webcam preview.
4. Click the **Register Face** button.
5. The app will send your face image and name to the backend for registration.
6. You will receive feedback on success or failure of the registration.

---

## Troubleshooting

- Ensure the Flask backend is running before using the frontend.
- Make sure CORS is enabled in the backend (`flask-cors` package and `CORS(app)` in `app.py`).
- Check browser developer console and Flask terminal logs for errors.
- Ensure you have a clear face in the webcam image for successful face detection.

---

## Here I have developed only till capturing the face.

