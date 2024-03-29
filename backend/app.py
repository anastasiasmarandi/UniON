from flask import Flask
from flask_cors import CORS


from jsonschema import ValidationError

from modules.identity.identity_controller import identityBlueprint
from modules.profile.profile_controller import profileBlueprint
from modules.admin.admin_controller import adminBlueprint
from modules.contracts.contracts_controller import contractsBlueprint


app = Flask(__name__)
CORS(app)

app.register_blueprint(identityBlueprint, url_prefix='/')
app.register_blueprint(profileBlueprint, url_prefix='/profile')
app.register_blueprint(adminBlueprint, url_prefix='/admin')
app.register_blueprint(contractsBlueprint, url_prefix='/contracts')

if __name__ == '__main__':
    app.run(debug=True)