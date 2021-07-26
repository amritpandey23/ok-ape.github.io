from flask import Blueprint
from flask.templating import render_template

errors = Blueprint("errors", __name__)


@errors.app_errorhandler(404)
def error_404(error):
    return render_template("error.html", data="Page not found. 404"), 404


@errors.app_errorhandler(403)
def error_403(error):
    return render_template("error.html", data="Page access forbidden. 403"), 403


@errors.app_errorhandler(500)
def error_500(error):
    return render_template("error.html", data="Something went wrong with the server. 500"), 500
