from flask import Flask, render_template

class flask_special(Flask):
    jinja_options = Flask.jinja_options.copy()
    jinja_options.update(dict(
        block_start_string='[%',
        block_end_string='%]',
        variable_start_string='[[',
        variable_end_string=']]',
        comment_start_string='[#',
        comment_end_string='#]',
    ))

app = flask_special(__name__)

@app.route('/')
def hello_world():
   return render_template("index.html")

if __name__ == '__main__':
   app.run(host="0.0.0.0", threaded=True, debug=True)