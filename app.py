from flask import Flask, render_template, redirect, session, flash, request
import os
import json

app = Flask(__name__)
app.secret_key = os.urandom(32)

def bathrooms():
    f = open("bathrooms.json")
    bathrooms = json.loads(f.read())


@app.route("/")
def route():
    bathrooms()
    return "Hi"

if __name__ == '__main__':
    app.run(debug=True)
