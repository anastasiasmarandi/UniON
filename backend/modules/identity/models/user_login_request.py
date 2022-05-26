<<<<<<< HEAD
import hashlib

class UserLoginRequest():
    def __init__(self, credentials) -> None:
        self.email = credentials['email']
        self.password = hashlib.sha256(credentials['password'].encode('utf-8')).hexdigest()

schema = {
    'type': 'object',
    'properties': {
        'email': {'type': 'string', "minLength": 5, "maxLength": 200},
        'password': {'type': 'string', "minLength": 8, "maxLength": 200}
    },
    'required': ['email', 'password']
=======
import hashlib

class UserLoginRequest():
    def __init__(self, dictionary) -> None:
        self.email = dictionary['email']
        self.password = hashlib.sha256(dictionary['password'].encode('utf-8')).hexdigest()

schema = {
    'type': 'object',
    'properties': {
        'email': {'type': 'string', "minLength": 3, "maxLength": 200},
        'password': {'type': 'string', "minLength": 8, "maxLength": 200}
    },
    'required': ['email', 'password']
>>>>>>> 9c334c4a5c808e248f04e1d49af7d1d9308f7b2f
}