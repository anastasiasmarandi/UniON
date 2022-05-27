from bson import ObjectId


class EnrollRequest():
    def __init__(self, enrollment) -> None:
        self.faculty_id = enrollment['faculty_id']
        self.department_id = enrollment['department_id']
        

schema = {
    'type': 'object',
    'properties': {
        'faculty_id': {'type': 'string'},
        'department_id': {'type': 'string'}
    },
}