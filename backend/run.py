from flask import Flask
# from flask_cors import CORS
# from app import create_app

# app = create_app()

app = Flask(__name__)
# CORS(app)

@app.route('/')
def home():
    return 'Welcome to the Recipe Finder API!'

# if __name__ == '__main__':
    
#     print("App running!")
#     app.run()
