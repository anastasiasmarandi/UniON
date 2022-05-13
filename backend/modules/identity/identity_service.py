import logging
import jwt
from flask import render_template, Response

from utils.database_context import db
from utils.constants import page, login_page
from modules.identity.models.user_login_response import UserLoginResponse


key = "testing"
users = db.get_collection('users')

def login(user):
    databaseUser = users.find_one({"email": user.email, "password": user.password})
    if databaseUser == None:
        return Response('{"error": "Invalid username or password"}', 400)

    token = createToken(databaseUser['_id'], databaseUser['email'])
    
    return Response(str(UserLoginResponse(str(token), str(databaseUser['_id']), databaseUser['email'], databaseUser['firstName'], databaseUser['lastName'])), 200)

def register(user):
    databaseUser = users.find_one({"email": user.email})
    if databaseUser != None:
        return Response('{"error": "Email already in use"}', 400)

    databaseUser = users.find_one({"cnp": user.cnp})
    if databaseUser != None:
        return Response('{"error": "CNP already in use"}', 400)
    
    users.insert_one(user.__dict__)

    return login(user)

def createToken(userId, email):
    token = jwt.encode(
        payload= {
            'sub': str(userId),
            'name': email
        },
        key=key
    )
    
    return token    