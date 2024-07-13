from flask import Blueprint, jsonify, request

from .models import db, Recipe

main = Blueprint('main', __name__)

@main.route('/')
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