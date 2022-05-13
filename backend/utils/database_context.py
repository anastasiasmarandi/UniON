from pymongo import MongoClient
from utils.constants import CONNECTION_STRING

client = MongoClient(CONNECTION_STRING)

db = client['union']