from flask import Blueprint, request, Response
from modules.admin.models.enroll_request import EnrollRequest
from modules.admin.models.get_user_response import GetUserResponse
from flask_expects_json import expects_json
import jwt

import modules.contracts.contracts_service as contractsService

contractsBlueprint = Blueprint('contracts', __name__)

@contractsBlueprint.route('current', methods = ['GET'])
def getCurrentContract():
    auth_header = request.headers.get('Authorization')
    if auth_header:
        auth_token = auth_header
    else:
        auth_token = ''
    return contractsService.getCurrentContract(auth_token)
