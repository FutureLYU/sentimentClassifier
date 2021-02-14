from flask_sqlalchemy import SQLAlchemy
import os
THIS_FOLDER = os.path.dirname(os.path.abspath(__file__))
my_file = os.path.join(THIS_FOLDER, '../reviews.sqlite')
db = SQLAlchemy()

def init_model(app):
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + my_file
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.init_app(app)

