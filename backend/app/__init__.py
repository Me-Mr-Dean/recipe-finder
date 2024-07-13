from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://dean_git_gud:fruitjuiceblend13@localhost/recipe_finder'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False #vra chat
    db.init_app(app)
    CORS(app)

    from .routes import main as main_blueprint
    app.register_blueprint(main_blueprint)

    with app.app_context():
        db.create_all()

    return app
