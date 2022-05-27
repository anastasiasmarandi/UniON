from flask import Response
from modules.admin.models.get_faculty_response import GetFacultyResponse
from modules.admin.models.get_user_response import GetUserResponse
from bson import ObjectId
import jwt

from utils.database_context import db
from utils.constants import ADMIN_ROLE, STUDENT_ROLE

users = db.get_collection('users')
faculties = db.get_collection('faculties')
departments = db.get_collection('departments')
key = "testing"

def getUsers(auth_token):
    if auth_token:
        payload = jwt.decode(auth_token, key)
        id = payload['sub']
        user = users.find_one({"_id": ObjectId(id)})    
        if (user['role'] == ADMIN_ROLE):
            results = [str(GetUserResponse(str(u['_id']), u['lastName'], u['firstName'], u['email'])) for u in list(users.find({"role": STUDENT_ROLE}))]
            return Response(results) 
        else:
            return Response('{"status": "error", "message": "Requires authorization."}', 400)
    else:
        return Response('{"status": "error", "message": "Authentication error."}', 400)

def getFaculties(auth_token):
    if auth_token:
        payload = jwt.decode(auth_token, key)
        id = payload['sub']
        user = users.find_one({"_id": ObjectId(id)})    
        if (user['role'] == ADMIN_ROLE):
            results = [str(GetFacultyResponse(str(f['_id']), f['name'])) for f in list(faculties.find())]
            return Response(results) 
        else:
            return Response('{"status": "error", "message": "Requires authorization."}', 400)
    else:
        return Response('{"status": "error", "message": "Authentication error."}', 400)

def getDepartments(auth_token, faculty_id):
    if auth_token:
        payload = jwt.decode(auth_token, key)
        id = payload['sub']
        user = users.find_one({"_id": ObjectId(id)})    
        if (user['role'] == ADMIN_ROLE):
            results = [str(GetFacultyResponse(str(d['_id']), d['name'])) for d in list(departments.find({"faculty_id": ObjectId(faculty_id)}))]
            return Response(results) 
        else:
            return Response('{"status": "error", "message": "Requires authorization."}', 400)
    else:
        return Response('{"status": "error", "message": "Authentication error."}', 400)

def enroll(auth_token, enrollment, user_id):
    if auth_token:
        payload = jwt.decode(auth_token, key)
        id = payload['sub']
        user = users.find_one({"_id": ObjectId(id)})    
        if (user['role'] == ADMIN_ROLE):
            student = users.find_one_and_update(
                {"_id": ObjectId(user_id)}, 
                {"$set": 
                    {
                        'faculty_id': enrollment.faculty_id,
                        'department_id': enrollment.department_id
                    }
                }
            )
            if student == None:
                return Response('{"status": "error", "message": "User id not found"}', 400)
            else:
                return Response('{"status": "success", "message": "User enrolled"}', 200)
        else:
            return Response('{"status": "error", "message": "Requires authorization."}', 400)
    else:
        return Response('{"status": "error", "message": "Authentication error."}', 400)
