from . import db

class Review(db.Model):
    __tablename__ = "review"
    id = db.Column(db.Integer, primary_key=True)
    review = db.Column(db.Text(), nullable=False)
    sentiment = db.Column(db.Integer, nullable=False)
    date = db.Column(db.DateTime())
    
    def save(self):
        db.session.add(self)
        db.session.commit()
