from .home import home

def init_view(app):
    app.register_blueprint(home)