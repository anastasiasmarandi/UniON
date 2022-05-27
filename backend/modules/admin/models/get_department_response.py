import json

class GetDepartmentResponse():
    def __init__(self, _id, name, faculty_id) -> None:
        self._id = _id
        self.name = name
        self.faculty_id = faculty_id

    def __str__(self) -> str:
        return json.dumps(self.__dict__)