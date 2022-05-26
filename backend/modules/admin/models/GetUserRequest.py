import hashlib

class GetUserRequest():
    def __init__(self, user_data) -> None:
        self.firstName = user_data['firstName']
        self.lastName = user_data['lastName']
        self.email = user_data['email']

schema = {
    'type': 'object',
    'properties': {
        'firstName': {'type': 'string', 'minLength': 3, 'maxLength': 200},
        'lastName': {'type': 'string', 'minLength': 3, 'maxLength': 200},
        'email': {'type': 'string', "minLength": 5, "maxLength": 200},
    },
}