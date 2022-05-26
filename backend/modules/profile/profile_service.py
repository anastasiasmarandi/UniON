import logging
import jwt
from flask import Response
from bson import ObjectId

from utils.database_context import db
from modules.identity.models.user_login_response import UserLoginResponse


key = "testing"
users = db.get_collection('users')

def update_data(auth_token, user_changes):
    if auth_token:
        payload = jwt.decode(auth_token, key)
        id = payload['sub']
        user = users.find_one_and_update(
            {"_id": ObjectId(id)}, 
            {"$set": 
                {
                    'firstName': user_changes.firstName,
                    'lastName': user_changes.lastName,
                    'identityCardSerial': user_changes.identityCardSerial,
                    'identityCardNumber': user_changes.identityCardNumber,
                    'residence': user_changes.residence,
                    'nationality': user_changes.nationality
                }
            }
        )

        if user == None:
            return Response('{"status": "error", "message": "User id not found"}', 400)
        else:
            return Response('{"status": "success", "message": "User data updated"}', 200)
    else:
        return Response('{"status": "error", "message": "Authentication error."}', 400)
    