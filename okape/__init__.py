import json
from flask import Flask, render_template, redirect
import okape.content

with open("okape/config.json") as f:
    _config = json.load(f)

app = Flask(__name__)

app.config["SECRET_KEY"] = _config["app_secret"]
app.config["DEV_PORT"] = _config["dev_port"]


@app.route("/")
def home():
    return render_template("index.html", data=okape.content)


@app.route("/blog")
def blog():
    return redirect("https://blog.okape.co.in")


from okape.errors.handlers import errors

app.register_blueprint(errors)
