from flask import Flask


from jsonschema import ValidationError

from modules.identity.identity_controller import identityBlueprint
from modules.profile.profile_controller import profileBlueprint
from modules.admin.admin_controller import adminBlueprint


app = Flask(__name__)

app.register_blueprint(identityBlueprint, url_prefix='/')
app.register_blueprint(profileBlueprint, url_prefix='/profile')
app.register_blueprint(adminBlueprint, url_prefix='/admin')

if __name__ == '__main__':
    app.run(debug=True)