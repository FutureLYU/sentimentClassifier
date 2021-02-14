import os
from flask import Blueprint, request
from ..models.review import Review
from ..models import db
from datetime import datetime
from ..services.classifier import classify
home = Blueprint("home", __name__)

@home.route('/')
def index():
    return "movie review classifier home page"

@home.route('/review/')
def review():
    review_list = Review.query.all()
    return "\n".join([x.review for x in review_list])

@home.route('/createdb')
def createdb():
    THIS_FOLDER = os.path.dirname(os.path.abspath(__file__))
    my_file = os.path.join(THIS_FOLDER, '../reviews.sqlite')
    if not os.path.exists(my_file):
        db.create_all()
        return "create successfully"
    return "database already exists"

@home.route('/addreview')
def addreview():
    r = Review(review = "I like the movie", sentiment = 1, date = datetime.now())
    r.save()
    return "success"

@home.route('/predict', methods = ["GET"])
def predict():
    data_dict = request.args
    string = data_dict['data']
    result, proba = classify(string)
    return f"result is {result} and the probability is {proba}"