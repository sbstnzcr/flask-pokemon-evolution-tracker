from flask import Flask, jsonify, render_template, request

from web.models import get_evo_chain, get_pokemon_data

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/search", methods=["POST"])
def search():
    pokemon_name = request.form.get("pokemon_name")
    data = get_pokemon_data(pokemon_name)
    if not data:
        return jsonify({"error": "Pokemon not found"}), 404
    pokemon_id = data["id"]
    evolution_chain = get_evo_chain(pokemon_id)
    return jsonify({"data": data, "evolution_chain": evolution_chain})
