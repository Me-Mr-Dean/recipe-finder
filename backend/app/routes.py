from flask import Blueprint, jsonify, request

from app.services.api_service import get_analyzed_instructions, search_recipes

from .models import db, Recipe

main = Blueprint('main', __name__)

@main.route('/search', methods=['GET'])
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

@main.route('/instructions', methods=['GET'])
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

@main.route('/checking')
def checking():
    return 'Checking Succeeded!'

@main.route('/recipes', methods=['GET'])
def get_recipes():
    recipes = Recipe.query.all()
    return jsonify([recipe.as_dict() for recipe in recipes])

@main.route('/recipes/<int:id>', methods=['GET'])
def get_recipe(id):
    recipe = Recipe.query.get_or_404(id)
    return jsonify(recipe.as_dict())

@main.route('/recipes', methods=['POST'])
def add_recipe():
    data = request.get_json()
    new_recipe = Recipe(
        name=data['name'],
        ingredients=data['ingredients'],
        instructions=data['instructions']
    )
    db.session.add(new_recipe)
    db.session.commit()
    return jsonify(new_recipe.as_dict()), 201

@main.route('/recipes/<int:id>', methods=['PUT'])
def update_recipe(id):
    data = request.get_json()
    recipe = Recipe.query.get_or_404(id)
    recipe.name = data['name']
    recipe.ingredients = data['ingredients']
    recipe.instructions = data['instructions']
    db.session.commit()
    return jsonify(recipe.as_dict())

@main.route('/recipes/<int:id>', methods=['DELETE'])
def delete_recipe(id):
    recipe = Recipe.query.get_or_404(id)
    db.session.delete(recipe)
    db.session.commit()
    return '', 204