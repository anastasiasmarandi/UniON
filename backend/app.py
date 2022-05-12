import os

from pymongo import MongoClient
from flask import Flask


CONNECTION_STRING = "mongodb://user:example@localhost:27017/admin"
client = MongoClient(CONNECTION_STRING)
database = client["UniON"]

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"