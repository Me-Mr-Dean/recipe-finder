from flask import Blueprint, jsonify, request

from app.services.api_service import get_analyzed_instructions, search_recipes

from .models import db, Recipe

main = Blueprint('main', __name__)

@main.route('/api/search', methods=['GET'])
def search():
    query = request.args.get('query')
    cuisine = request.args.get('cuisine')
    diet = request.args.get('diet')
    intolerances = request.args.get('intolerances')
    includeIngredients = request.args.get('includeIngredients')
    excludeIngredients = request.args.get('excludeIngredients')
    number = request.args.get('number', default=10, type=int)
    
    if not query:
        return jsonify({"error": "Query parameter is required"}), 400
    
    result = search_recipes(query, cuisine, diet, intolerances, includeIngredients, excludeIngredients, number)
    return jsonify(result.get("results", result))  # Return the 'results' key if it exists

@main.route('/api/instructions', methods=['GET'])
def instructions():
    recipe_id = request.args.get('recipe_id')
    if recipe_id:
        instructions = get_analyzed_instructions(recipe_id)
        return jsonify(instructions)
    else:
        return jsonify({"error": "Recipe ID is required"}), 400

@main.route('/api')
def home():
    return 'Welcome to the Recipe Finder API!'