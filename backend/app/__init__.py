from flask import Flask
from flask_cors import CORS
from app.routes import init_routes

def create_app():
    app = Flask(__name__)
    CORS(app)  # Enable CORS for cross-origin requests
    init_routes(app)  # Register the routes
    return app
