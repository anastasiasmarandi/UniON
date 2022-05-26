from flask import Blueprint, request, render_template
from flask_expects_json import expects_json
import jwt

from modules.profile.models.change_profile_request import ChangeProfileRequest
from modules.profile.models.change_profile_request import schema as changeProfileSchema


import modules.profile.profile_service as profileService

profileBlueprint = Blueprint('profile', __name__)

@profileBlueprint.route('', methods = ['PATCH'])
@expects_json(changeProfileSchema)
def change_profile_data():
    auth_header = request.headers.get('Authorization')
    if auth_header:
        auth_token = auth_header
    else:
        auth_token = ''

    user = ChangeProfileRequest(request.get_json())
    result = profileService.update_data(auth_token, user)
    return result