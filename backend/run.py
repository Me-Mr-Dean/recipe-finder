from app import create_app
from app.services.api_service import search_recipes

app = create_app()

if __name__ == '__main__':
    # print(search_recipes("pasta", number=5))
    app.run(debug=True)
