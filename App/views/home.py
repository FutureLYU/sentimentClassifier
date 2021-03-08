import os
from flask import Blueprint, request, jsonify
from ..models.review import Review
from ..models import db
from datetime import datetime
from ..services.classifier import classify, update


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

@home.route('/api/predict', methods = ["GET"])
def predict():
    try:
        data_dict = request.args
        string = data_dict['data']
        result, proba = classify(string)
        return jsonify({"success" : True, "result" : {"prediction" : result, "probability" : proba}, "msg" : "predict successfully"})
    except:
        return jsonify({"success" : False, "msg" : "fail to predict, check your input"})

@home.route('/api/review', methods = ["POST"])
def api_review():
    try:
        data_dict = request.get_json()
        review = data_dict['review']
        sentiment = data_dict['sentiment']
        r = Review(review = review, sentiment = sentiment, date = datetime.now())
        r.save()
        return jsonify({"success" : True, "msg" : "save successfully"})
    except:
        return jsonify({"success" : False, "msg" : "fail to save"})

@home.route('/api/update', methods = ["GET", "POST"])
def api_update():
    try:
        review_list = Review.query.all()
        data = [[x.review, x.sentiment] for x in review_list]
        update(data)
        return jsonify({"success" : True, "msg" : "model update successfully"})
    except:
        return jsonify({"success" : False, "msg" : "fail to update model"})