import sqlite3
import json
from datetime import datetime
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

DB_FILE = 'datastore.db'

def init_db():
    conn = sqlite3.connect(DB_FILE)
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS datastore (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            json_data TEXT NOT NULL,
            updated_at TEXT NOT NULL
        )
    ''')
    conn.commit()
    conn.close()

@app.route('/api/datastore', methods=['GET'])
def get_latest():
    try:
        conn = sqlite3.connect(DB_FILE)
        cursor = conn.cursor()
        cursor.execute('SELECT name, json_data, updated_at FROM datastore ORDER BY id DESC LIMIT 1')
        row = cursor.fetchone()
        conn.close()
        
        if row:
            return jsonify({
                'name': row[0],
                'jsonData': row[1],
                'updatedAt': row[2]
            })
        else:
            return jsonify({'message': 'No datastore saved yet.'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/datastore', methods=['POST'])
def save_datastore():
    try:
        data = request.json
        name = data.get('name')
        json_data = data.get('jsonData')
        updated_at = datetime.utcnow().isoformat()
        
        if not name or not json_data:
            return jsonify({'message': 'Name and jsonData are required.'}), 400
            
        conn = sqlite3.connect(DB_FILE)
        cursor = conn.cursor()
        cursor.execute('INSERT INTO datastore (name, json_data, updated_at) VALUES (?, ?, ?)',
                       (name, json_data, updated_at))
        conn.commit()
        conn.close()
        
        return jsonify({'message': 'Saved successfully', 'updatedAt': updated_at})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Serve static files
@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

@app.route('/<path:path>')
def static_proxy(path):
    return send_from_directory('.', path)

if __name__ == '__main__':
    init_db()
    port = int(os.environ.get('PORT', 8000))
    print(f"Server running at http://0.0.0.0:{port}")
    app.run(host='0.0.0.0', port=port, debug=False)
