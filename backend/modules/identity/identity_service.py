import logging
import jwt
from flask import Response

from utils.database_context import db
from modules.identity.models.user_login_response import UserLoginResponse


key = "testing"
users = db.get_collection('users')

def login(user):
    databaseUser = users.find_one({"email": user.email, "password": user.password})
    if databaseUser == None:
        return Response('{"status": "error", "message": "Invalid username or password"}', 400)

    token = create_token(databaseUser['_id'], databaseUser['email'])
    
    return Response(str(UserLoginResponse(str(token), str(databaseUser['_id']), databaseUser['email'], databaseUser['firstName'], databaseUser['lastName'])), 200)

def register(user):
    databaseUser = users.find_one({"email": user.email})
    if databaseUser != None:
        return Response('{"status": "error", "message": "Email already in use"}', 400)

    databaseUser = users.find_one({"cnp": user.cnp})
    if databaseUser != None:
        return Response('{"error": "CNP already in use"}', 400)
    
    users.insert_one(user.__dict__)

    return Response('{"status": "success", "message": "User registered"}', 200)

def create_token(userId, email):
    token = jwt.encode(
        payload= {
            'sub': str(userId),
            'name': email
        },
        key=key
    )
    
    return token    