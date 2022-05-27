import json

class GetUserResponse():
    def __init__(self, firstName, lastName, email) -> None:
        self.firstName = firstName
        self.lastName = lastName
        self.email = email

    def __str__(self) -> str:
        return json.dumps(self.__dict__)