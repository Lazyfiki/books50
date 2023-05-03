from flask import Flask, render_template

# Configure app
app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/category")
def category():
    return render_template("category.html")


@app.route("/about")
def about():
    return render_template("about.html")


@app.route("/login")
def login():
    return render_template("login.html")


@app.route("/contact")
def register():
    return render_template("contacts.html")


if __name__ == "__main__":
    app.run(debug=True)
