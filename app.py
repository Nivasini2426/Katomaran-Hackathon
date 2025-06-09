from flask import Flask, request, jsonify
import face_recognition
import numpy as np
import sqlite3
import datetime
import base64
from io import BytesIO
from PIL import Image
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allows requests from frontend like React

# Initialize the database
def init_db():
    conn = sqlite3.connect("faces.db")
    cursor = conn.cursor()
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS faces (
            name TEXT,
            encoding BLOB,
            timestamp TEXT
        )
    """)
    conn.commit()
    conn.close()

# Root route to verify server is running
@app.route("/", methods=["GET"])
def home():
    return "Flask server is running!"

# Register face endpoint
@app.route("/register", methods=["POST"])
def register_face():
    try:
        data = request.get_json()
        name = data['name']
        image_data = base64.b64decode(data['image'].split(",")[1])

        image = Image.open(BytesIO(image_data)).convert('RGB')
        image_np = np.array(image)

        face_locations = face_recognition.face_locations(image_np)
        if not face_locations:
            return jsonify({"message": "No face detected!"}), 400

        encoding = face_recognition.face_encodings(image_np, face_locations)[0]

        conn = sqlite3.connect("faces.db")
        cursor = conn.cursor()
        cursor.execute("INSERT INTO faces (name, encoding, timestamp) VALUES (?, ?, ?)",
                       (name, encoding.tobytes(), datetime.datetime.now().isoformat()))
        conn.commit()
        conn.close()

        return jsonify({"message": f"{name} registered successfully!"})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    init_db()
    app.run(debug=True, port=5000, host='0.0.0.0')  # Makes accessible via LAN too
