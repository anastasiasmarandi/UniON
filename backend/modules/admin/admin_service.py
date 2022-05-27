from flask import Response
from modules.admin.models.get_user_response import GetUserResponse
from bson import ObjectId
import jwt

from utils.database_context import db
from utils.constants import ADMIN_ROLE, STUDENT_ROLE

users = db.get_collection('users')
key = "testing"

def getUsers(auth_token):
    if auth_token:
        payload = jwt.decode(auth_token, key)
        id = payload['sub']
        user = users.find_one({"_id": ObjectId(id)})    
        if (user['role'] == ADMIN_ROLE):
            results = [str(GetUserResponse(u['lastName'], u['firstName'], u['email'])) for u in list(users.find({"role": STUDENT_ROLE}))]
            return Response(results) 
        else:
            return Response('{"status": "error", "message": "Requires authorization."}', 400)
    else:
        return Response('{"status": "error", "message": "Authentication error."}', 400)
