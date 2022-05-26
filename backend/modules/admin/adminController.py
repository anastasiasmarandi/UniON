from flask import Blueprint, request, render_template, Response
from modules.admin.models.GetUserRequest import GetUserRequest
from modules.admin.models.GetUserRequest import schema as adminSchema
from flask_expects_json import expects_json
import jwt

import modules.admin.adminService as adminService

adminBlueprint = Blueprint('admin', __name__)

@adminBlueprint.route('', methods = ['GET'])
@expects_json(adminSchema)
def getUsers():
    #response = adminService.getUsers()
    user = GetUserRequest(request.get_json())
    result = adminService.getUsers()
    
    return result

    