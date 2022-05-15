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
}