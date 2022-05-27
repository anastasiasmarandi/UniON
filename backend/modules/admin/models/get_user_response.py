import json

class GetUserResponse():
    def __init__(self, _id, firstName, lastName, email) -> None:
        self._id = _id
        self.firstName = firstName
        self.lastName = lastName
        self.email = email

    def __str__(self) -> str:
        return json.dumps(self.__dict__)