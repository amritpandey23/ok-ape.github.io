import json
from flask import Flask, render_template
from werkzeug.utils import send_from_directory
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
    return render_template("blog.html")


from okape.errors.handlers import errors
app.register_blueprint(errors)