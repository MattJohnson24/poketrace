from flask import Flask
from flask import Flask, request, redirect, url_for, render_template, make_response

app = Flask(__name__)

@app.route("/members")
def members():
    return {"members": ["Member1", "Member2", "Member3"]}

@app.route("/cookies")
def cookies():
    return request.cookies["dark"]

@app.route("/")
def home():
    return {"members": ["Member1", "Member2", "Member3"]}

if __name__ == "__main__":
    app.run(debug=True)