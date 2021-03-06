from .vectorizer import vect
import os
import pickle
import numpy as np

cur_dir = os.path.dirname(__file__)
clf = pickle.load(open(os.path.join(cur_dir,
                 'pkl_objects',
                 'classifier.pkl'), 'rb'))

def classify(document):
    label = {0: 'negative', 1: 'positive'}
    X = vect.transform([document])
    y = clf.predict(X)[0]
    proba = np.max(clf.predict_proba(X))
    return label[y], proba

def train(document, y):
    X = vect.transform([document])
    clf.partial_fit(X, [y])

def update(results):
    data = np.array(results)
    X = data[:, 0]
    y = data[:, 1].astype(int)
    classes = np.array([0, 1])
    X_train = vect.transform(X)
    clf.partial_fit(X_train, y, classes=classes)