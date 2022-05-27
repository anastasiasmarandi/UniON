from flask import Blueprint, request, render_template, Response
from modules.admin.models.get_user_response import GetUserResponse
from flask_expects_json import expects_json
import jwt

import modules.admin.admin_service as adminService

adminBlueprint = Blueprint('admin', __name__)

@adminBlueprint.route('', methods = ['GET'])
def getUsers():
    auth_header = request.headers.get('Authorization')
    if auth_header:
        auth_token = auth_header
    else:
        auth_token = ''
    result = adminService.getUsers(auth_token)
    
    return result

    