from flask import Flask, render_template, redirect, session, flash, request
import os
import json
import urllib2
import urllib

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
        origins = urllib.quote(request.args.get("address"))
        count = 0
        for bathroom in b:
            if(count < 100):
                destinations += ("place_id:" + bathroom["place_id"] + "|")
                count+=1
        destinations = destinations[:-1]
        url = "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=" + origins + "&destinations=" + destinations + "&key=" + matrix_key
        print url
        uResp = urllib2.urlopen(url)
        raw = uResp.read()
        dat = json.loads(raw)
        min = dat["rows"][0]["elements"][0]["distance"]["value"]
        count = 0
        minindex = 0
        for element in dat["rows"][0]["elements"]:
            count+=1
            if("distance" in element and element["distance"]["value"] < min):
                min = element["distance"]["value"]
                minindex = count
        print b[minindex]
    return render_template("test.html")






if __name__ == '__main__':
    app.run(debug=True)
