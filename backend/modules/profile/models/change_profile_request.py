import hashlib

class ChangeProfileRequest():
    def __init__(self, user_data) -> None:
        self.firstName = user_data['firstName']
        self.lastName = user_data['lastName']
        self.identityCardSerial = user_data['identityCardSerial']
        self.identityCardNumber = user_data['identityCardNumber']
        self.residence = user_data['residence']
        self.nationality = user_data['nationality']
        

schema = {
    'type': 'object',
    'properties': {
        'firstName': {'type': 'string', 'minLength': 3, 'maxLength': 200},
        'lastName': {'type': 'string', 'minLength': 3, 'maxLength': 200},
        'identityCardSerial': {'type': 'string', 'length': 2},
        'identityCardNumber': {'type': 'string', 'length': 6},
        'residence': {'type': 'string', 'minLength': 3, 'maxLength': 200},
        'nationality': {'type': 'string', 'minLength': 3, 'maxLength': 200}
    },
}