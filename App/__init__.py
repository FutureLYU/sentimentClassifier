from flask import Flask
from .views import init_view
from .models import init_model
def create_app():
    app = Flask(__name__, template_folder="templates",static_folder="static",static_url_path="/App/static/")
    init_view(app)
    init_model(app)
    return app