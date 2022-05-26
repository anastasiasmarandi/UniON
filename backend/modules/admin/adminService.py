from flask import Response
from backend.modules.admin.models.GetUserRequest import GetUserRequest
from bson import ObjectId

import logging
import jwt

from utils.database_context import db
from modules.identity.models.user_login_response import UserLoginResponse

users = db.get_collection('users')

def getUsers():
    results = [GetUserRequest(x) for x in list(users.find({"_id": ObjectId(id)}{"$set":
    {
       'firstName': user_data.firstName,
       'lastName': user_data.lastName,
       'email': user_data.email 
    }
    }))]

    return Response(results)