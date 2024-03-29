from flask import Blueprint, request, Response
from flask_expects_json import expects_json

from modules.identity.models.user_login_request import UserLoginRequest
from modules.identity.models.user_login_request import schema as loginSchema

from modules.identity.models.user_register_request import UserRegisterRequest
from modules.identity.models.user_register_request import schema as registerSchema


import modules.identity.identity_service as identityService

identityBlueprint = Blueprint('identity', __name__)

@identityBlueprint.route('login', methods = ['POST'])
@expects_json(loginSchema)
def login():
    auth_header = request.headers.get('Authorization')
    if auth_header:
        return Response('{"error": "Already logged in"}', 400)
    user = UserLoginRequest(request.get_json())
    result = identityService.login(user)
    return result

@identityBlueprint.route('register', methods = ['POST'])
@expects_json(registerSchema)
def register():
    user = UserRegisterRequest(request.get_json())
    result = identityService.register(user)
    
    return result
