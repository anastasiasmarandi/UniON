from flask import Flask


from jsonschema import ValidationError

from modules.identity.identity_controller import identityBlueprint
from modules.profile.profile_controller import profileBlueprint


app = Flask(__name__)

app.register_blueprint(identityBlueprint, url_prefix='/')
app.register_blueprint(profileBlueprint, url_prefix='/profile')

if __name__ == '__main__':
    app.run(debug=True)