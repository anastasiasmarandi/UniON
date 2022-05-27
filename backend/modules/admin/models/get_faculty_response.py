import json

class GetFacultyResponse():
    def __init__(self, _id, name) -> None:
        self._id = _id
        self.name = name

    def __str__(self) -> str:
        return json.dumps(self.__dict__)