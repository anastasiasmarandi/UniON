from flask import Response
from modules.admin.models.get_faculty_response import GetFacultyResponse
from modules.admin.models.get_user_response import GetUserResponse
from bson import ObjectId, binary
from fpdf import FPDF
import jwt

from utils.database_context import db
from utils.constants import ADMIN_ROLE, STUDENT_ROLE

users = db.get_collection('users')
faculties = db.get_collection('faculties')
departments = db.get_collection('departments')
courses = db.get_collection('courses')
key = "testing"

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
    pdf.set_font('Arial', '', 12)
    pdf.cell(w=0.0, h=0.0, txt=f"Nume: {user_data['lastName']}", border=0, ln=2)
    pdf.cell(w=30.0, h=15.0, txt=f"Prenume: {user_data['lastName']}", border=0, ln=2)
    pdf.cell(w=30.0, h=15.0, txt=f"Facultate: {faculty_data['name']}", border=0, ln=2)
    pdf.cell(w=30.0, h=15.0, txt=f"An de studiu: {user_data['year']}", border=0, ln=2)
    line_height = pdf.font_size * 2
    pdf.set_font('Arial', 'B', 12)
    pdf.cell(70.0, line_height, "Materie", border=1)
    pdf.cell(40.0, line_height, "Puncte de credit", border=1)
    pdf.ln(line_height)
    pdf.set_font('Arial', '', 12)
    for course in courses_data:
        pdf.set_x(30.0)
        pdf.cell(70.0, line_height, course['name'], border=1)
        pdf.cell(40.0, line_height, str(course['credits']), border=1)
        pdf.ln(line_height)
    pdf.output('contract.pdf')

def getCurrentContract(auth_token):
    if auth_token:
        payload = jwt.decode(auth_token, key)
        id = payload['sub']
        user = users.find_one({"_id": ObjectId(id)})
        if 'contract' in user.keys():
            pdf_file = binary(user['contract'])
        else:    
            faculty = faculties.find_one({"_id": ObjectId(user['faculty_id'])})
            course_list = list(courses.find({"faculty_id": ObjectId(user['faculty_id']), "year": user['year']}))
            generatePdf(user, course_list, faculty)
            f = open("contract.pdf", "rb")
            pdf_file = f.read()
            user = users.find_one_and_update(
                {"_id": ObjectId(id)}, 
                {"$set": 
                    {
                        'contract': pdf_file
                    }
                }
            )
        return Response(f'{{"contract": {pdf_file}}}')
    else:
        return Response('{"status": "error", "message": "Authentication error."}', 400)