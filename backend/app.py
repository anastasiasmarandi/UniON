from flask import Flask, render_template, request, url_for, redirect, session
from pymongo import MongoClient
import bcrypt

app = Flask(__name__)
app.secret_key = "testing"
CONNECTION_STRING = "mongodb://user:example@localhost:27017/admin"
client = MongoClient(CONNECTION_STRING)
db = client.get_database('total_records')
records = db.register
page = 'index.html'
login_page = 'login.html'
@app.route("/", methods=['post', 'get'])
def index():
    message = ''
    if "email" in session:
        return redirect(url_for("logged_in"))
    if request.method == "POST":
        user_lastname = request.form.get("nume")
        user_firstname = request.form.get("prenume")
        email = request.form.get("email")
        cnp = request.form.get("cnp")
        password1 = request.form.get("password1")
        password2 = request.form.get("password2")
        cnp_found = records.find_one({"cnp": cnp})
        email_found = records.find_one({"email": email})
        if cnp_found:
            message = 'Exista deja un user cu acest CNP'
            return render_template(page, message=message)
        if email_found:
            message = 'Aceasta adresa de email exista in baza de date'
            return render_template(page, message=message)
        if password1 != password2:
            message = 'Parolele nu se potrivesc'
            return render_template(page, message=message)
        else:
            hashed = bcrypt.hashpw(password2.encode('utf-8'), bcrypt.gensalt())
            user_input = {'nume': user_lastname, 'email': email, 'password': hashed}
            records.insert_one(user_input)
            
            user_data = records.find_one({"email": email})
            new_email = user_data['email']
   
            return render_template('logged_in.html', email=new_email)
    return render_template(page)

@app.route('/logged_in')
def logged_in():
    if "email" in session:
        email = session["email"]
        return render_template('logged_in.html', email=email)
    else:
        return redirect(url_for("login"))

@app.route("/login", methods=["POST", "GET"])
def login():
    message = 'Please login to your account'
    if "email" in session:
        return redirect(url_for("logged_in"))

    if request.method == "POST":
        email = request.form.get("email")
        password = request.form.get("password")

       
        email_found = records.find_one({"email": email})
        if email_found:
            email_val = email_found['email']
            passwordcheck = email_found['password']
            
            if bcrypt.checkpw(password.encode('utf-8'), passwordcheck):
                session["email"] = email_val
                return redirect(url_for('logged_in'))
            else:
                if "email" in session:
                    return redirect(url_for("logged_in"))
                message = 'Parola gresita'
                return render_template(login_page, message=message)
        else:
            message = 'Adresa de email nu exista in baza de date'
            return render_template(login_page, message=message)
    return render_template(login_page, message=message)

@app.route("/logout", methods=["POST", "GET"])
def logout():
    if "email" in session:
        session.pop("email", None)
        return render_template("signout.html")
    else:
        return render_template('index.html')

#end of code to run it
if __name__ == "__main__":
  app.run(debug=True)