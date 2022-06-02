from flask import Blueprint, request, render_template, Response
from modules.admin.models.enroll_request import EnrollRequest
from modules.admin.models.get_user_response import GetUserResponse
from flask_expects_json import expects_json
import jwt

import modules.admin.admin_service as adminService

adminBlueprint = Blueprint('admin', __name__)

@adminBlueprint.route('users', methods = ['GET'])
def getUsers():
    auth_header = request.headers.get('Authorization')
    if auth_header:
        auth_token = auth_header
    else:
        auth_token = ''
    result = adminService.getUsers(auth_token)
    
    return result

@adminBlueprint.route('users/<user_id>')
def getUser(user_id):
    auth_header = request.headers.get('Authorization')
    if auth_header:
        auth_token = auth_header
    else:
        auth_token = ''
    result = adminService.getUser(auth_token, user_id)
    return result

@adminBlueprint.route('faculties', methods = ['GET'])
def getFaculties():
    auth_header = request.headers.get('Authorization')
    if auth_header:
        auth_token = auth_header
    else:
        auth_token = ''
    result = adminService.getFaculties(auth_token)
    return result

@adminBlueprint.route('faculties/<faculty_id>', methods = ['GET'])
def getFaculty(faculty_id):
    auth_header = request.headers.get('Authorization')
    if auth_header:
        auth_token = auth_header
    else:
        auth_token = ''
    result = adminService.getFaculty(auth_token, faculty_id)
    return result

@adminBlueprint.route('departments', methods = ['GET'])
def getDepartments():
    auth_header = request.headers.get('Authorization')
    if auth_header:
        auth_token = auth_header
    else:
        auth_token = ''
    args = request.args
    result = adminService.getDepartments(auth_token, args.get("facultyId"))
    return result

@adminBlueprint.route('enroll', methods = ['PATCH'])
def enroll():
    auth_header = request.headers.get('Authorization')
    if auth_header:
        auth_token = auth_header
    else:
        auth_token = ''
    args = request.args
    enrollment = EnrollRequest(request.get_json())
    result = adminService.enroll(auth_token, enrollment, args.get("userId"))
    return result

    