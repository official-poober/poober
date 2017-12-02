from flask import Flask, render_template, redirect, session, flash, request
import os
import json
import urllib2

app = Flask(__name__)
app.secret_key = os.urandom(32)
matrix_key = "AIzaSyAxd76cAS0b2HLZ2HFavJKwAS0K43o8NmE"

def bathrooms():
    f = open("bathrooms.json")
    bathrooms = json.loads(f.read())
    return bathrooms


@app.route("/")
def route():
    origins = "New York"
    destinations = ""
    b=bathrooms()
    if request.args.get("address"):
        #origins = request.args.get("address")
        origins = "Washington,DC"
        count = 0
        for bathroom in b:
            if(count < 80):
                destinations += ("place_id:" + bathroom["place_id"] + "|")
        destinations = destinations[:-1]
        url = "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=" + origins + "&destinations=" + destinations + "&key=" + matrix_key
        print url
        uResp = urllib2.urlopen(url)
        raw = uResp.read()
        dat = json.loads(raw)
        print dat
    return render_template("test.html")






if __name__ == '__main__':
    app.run(debug=True)
