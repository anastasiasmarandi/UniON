from flask import Response
from modules.admin.models.get_faculty_response import GetFacultyResponse
from modules.admin.models.get_user_response import GetUserResponse
from bson import ObjectId
from fpdf import FPDF
import jwt

from utils.database_context import db
from utils.constants import ADMIN_ROLE, STUDENT_ROLE

users = db.get_collection('users')
faculties = db.get_collection('faculties')
departments = db.get_collection('departments')
courses = db.get_collection('courses')
key = "testing"

class PDF(FPDF):
    def lines(self):
        self.set_line_width(0.0)
        self.line(5.0,5.0,205.0,5.0) # top one
        self.line(5.0,292.0,205.0,292.0) # bottom one
        self.line(5.0,5.0,5.0,292.0) # left one
        self.line(205.0,5.0,205.0,292.0) # right one

    def title(self):
        self.set_xy(0.0,0.0)
        self.set_font('Arial', 'B', 16)
        self.set_text_color(255, 255, 255)
        self.cell(w=210.0, h=40.0, align='C', txt="Contract de studii", border=0)

    def write_user_data(self, user_data, faculty_data):
        self.set_xy(0.0,0.0)
        self.set_font('Arial', 'B', 12)
        self.set_text_color(255, 255, 255)
        self.cell(w=10.0, h=60.0, align='L', txt=f"Nume: {user_data['lastName']}", border=0)
        self.cell(w=10.0, h=70.0, align='L', txt=f"Prenume: {user_data['lastName']}", border=0)
        self.cell(w=10.0, h=80.0, align='L', txt=f"Facultate: {faculty_data['name']}", border=0)
        self.cell(w=10.0, h=90.0, align='L', txt=f"An de studiu: {user_data['year']}", border=0)


def generatePdf(user_data, courses_data, faculty_data):
    pdf = FPDF()
    pdf.add_page()
    pdf.set_line_width(0.0)
    pdf.line(5.0,5.0,205.0,5.0) # top one
    pdf.line(5.0,292.0,205.0,292.0) # bottom one
    pdf.line(5.0,5.0,5.0,292.0) # left one
    pdf.line(205.0,5.0,205.0,292.0) # right one
    pdf.set_xy(0.0,0.0)
    pdf.set_font('Arial', 'B', 16)
    pdf.set_text_color(0, 0, 0)
    pdf.cell(w=210.0, h=40.0, align='C', txt="Contract de studii", border=0)
    pdf.set_xy(30.0,30.0)
    pdf.set_font('Arial', 'B', 12)
    pdf.cell(w=0.0, h=0.0, txt=f"Nume: {user_data['lastName']}", border=0, ln=2)
    pdf.cell(w=30.0, h=15.0, txt=f"Prenume: {user_data['lastName']}", border=0, ln=2)
    pdf.cell(w=30.0, h=0.0, txt=f"Facultate: {faculty_data['name']}", border=0, ln=2)
    pdf.cell(w=30.0, h=0.0, txt=f"An de studiu: {user_data['year']}", border=0, ln=2)
    pdf.output('test.pdf', 'F')

def getCurrentContract(auth_token):
    if auth_token:
        payload = jwt.decode(auth_token, key)
        id = payload['sub']
        user = users.find_one({"_id": ObjectId(id)})    
        faculty = faculties.find_one({"_id": ObjectId(user['faculty_id'])})
        course_list = list(courses.find({"faculty_id": ObjectId(user['faculty_id']), "year": user['year']}))
        generatePdf(user, course_list, faculty)
        return Response('{"status": "success", "message": "Contract generated"}', 200)
    else:
        return Response('{"status": "error", "message": "Authentication error."}', 400)