from flask import Flask

from flask import make_response, jsonify
from jsonschema import ValidationError

from modules.identity.identity_controller import identityBlueprint


app = Flask(__name__)

app.register_blueprint(identityBlueprint, url_prefix='/')

if __name__ == '__main__':
    app.run(debug=True)