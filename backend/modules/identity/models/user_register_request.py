import hashlib

class UserRegisterRequest():
    def __init__(self, user_data) -> None:
        self.firstName = user_data['firstName']
        self.lastName = user_data['lastName']
        self.cnp = user_data['cnp']
        self.email = user_data['email']
        self.password = hashlib.sha256(user_data['password'].encode('utf-8')).hexdigest()
        

schema = {
    'type': 'object',
    'properties': {
        'firstName': {'type': 'string', "minLength": 3, "maxLength": 200},
        'lastName': {'type': 'string', "minLength": 3, "maxLength": 200},
        'email': {'type': 'string', "minLength": 5, "maxLength": 200},
        'cnp': {'type': 'string', "length": 13},
        'password': {'type': 'string', "minLength": 8, "maxLength": 200}
    },
    'required': ['firstName', 'lastName', 'cnp', 'email', 'password']
}