import os
from flask import jsonify
import requests
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

API_BASE_URL = os.getenv("API_BASE_URL")
API_KEY = os.getenv("API_KEY")

def search_recipes(query, cuisine=None, diet=None, intolerances=None, includeIngredients=None, excludeIngredients=None, number=10):
    url = f"{API_BASE_URL}/recipes/complexSearch"
    params = {
        "query": query,
        "cuisine": cuisine,
        "diet": diet,
        "intolerances": intolerances,
        "includeIngredients": includeIngredients,
        "excludeIngredients": excludeIngredients,
        "number": number,
        "apiKey": API_KEY
    }
    # Remove None values from params
    params = {k: v for k, v in params.items() if v is not None}
    
    response = requests.get(url, params=params)
    if response.status_code == 200:
        return response.json()
    else:
        return jsonify({"error": "Failed to fetch recipes"}), response.status_code

def get_analyzed_instructions(recipe_id):
    url = f"{API_BASE_URL}/recipes/{recipe_id}/analyzedInstructions"
    params = {
        "apiKey": API_KEY
    }
    response = requests.get(url, params=params)
    if response.status_code == 200:
        return response.json()
    else:
        return {"error": "Failed to fetch recipe instructions", "status_code": response.status_code}

# def search_recipes_by_ingredients(ingredients, number=10, ranking=1, ignore_pantry=True):
#     url = f"{API_BASE_URL}/recipes/findByIngredients"
#     params = {
#         "ingredients": ingredients,
#         "number": number,
#         "ranking": ranking,
#         "ignorePantry": str(ignore_pantry).lower(),
#         "apiKey": API_KEY
#     }
#     response = requests.get(url, params=params)
#     if response.status_code == 200:
#         return response.json()
#     else:
#         return jsonify({"error": "Failed to fetch recipes"}), response.status_code
