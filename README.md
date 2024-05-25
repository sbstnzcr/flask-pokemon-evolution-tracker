# Pokémon Evolution Tracker

The Pokémon Evolution Tracker is a web application built with Flask and Bootstrap that allows users to search for a Pokémon and display its evolution chain.

## Features

- Search for a Pokémon by name
- Display the Pokémon's evolution chain with images and names
- Responsive design using Bootstrap

## Technologies Used

- Flask
- Bootstrap
- JavaScript
- PokéAPI

## Installation

1. **Clone the repository:**

    ```bash
    git clone git@github.com:sbstnzcr/flask-pokemon-evolution-tracker.git
    cd flask-pokemon-evolution-tracker
    ```

2. **Create and activate a virtual environment:**

    ```bash
    python3 -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3. **Install the dependencies:**

    ```bash
    pip install -r requirements.txt
    ```

4. **Run the application:**

    ```bash
    python web/app.py
    ```

5. **Visit the application in your browser:**

    Open [http://127.0.0.1:5000/](http://127.0.0.1:5000/) in your web browser.

## Project Structure

```
Pokemon-Evolution-Tracker/
├── web/
│   ├── __init__.py
│   ├── app.py
│   ├── models.py
│   ├── static/
│   │   └── js/
│   │       └── script.js
│   └── templates/
│       ├── base.html
│       └── index.html
├── venv/
├── .gitignore
├── README.md
└── requirements.txt
```

## Usage

1. **Enter a Pokémon name** in the search bar and click the "Search" button.
2. **View the evolution chain** of the Pokémon, displayed with images and names.

## Acknowledgments

- [PokéAPI](https://pokeapi.co/) for providing the Pokémon data
- [Bootstrap](https://getbootstrap.com/) for the CSS framework