from flask import Flask, render_template, jsonify

app = Flask(__name__, static_folder="./static", template_folder="./views")


@app.route('/')
def index():
    return render_template("index.html")


@app.route("/api/news")
def api_news():
    return jsonify([{
        'title': 'Gabon changes',
        'createdAt': '2017-12-30',
        'shortBody': 'A number of changes have been introduced by the Gabon embassy in London, ranging from '
                     + 'remaining open a full five days a week to axeing double entry visas. In addition, visa '
                     + 'fees have been adjusted, and their standard processing time dropped from one week to 72 hours. '
                     + 'The same day service remains unaltered. All visas are now single or multiple entry only.',
        'body': 'Hello world!'
    }, {
        'title': 'Uganda Shifting to E-Visas',
        'createdAt': '2017-11-15',
        'shortBody': 'The Ugandan embassy is now actively encouraging all applications to be made through their '
                     + 'online E-Visa portal, which has been operational since the middle of last year. Whilst they '
                     + 'are still processing traditional paper applications in the embassy, it is not entirely clear '
                     + 'for how much longer this will continue.',
        'body': 'Hello world!'
    }, {
        'title': 'Nigeria introduce biometrics',
        'createdAt': '2017-09-14',
        'shortBody': 'As of Thursday 14 September, the Nigeria Visa Application Centre is requiring all applicants to '
                     + 'attend in person to give biometric information (ie. fingerprints). An online system is in '
                     + 'place for booking appointments in one hour slots, at visa centres in Leicester and London. '
                     + 'Any potential provision for agency booking remains, at this stage, unresolved. The system has '
                     + 'been introduced at unusually short notice.',
        'body': 'Hello world!'
    }, {
        'title': 'Cameroon change processing',
        'createdAt': '2017-05-24',
        'shortBody': 'Cameroon have changed their regular service from Next Day to 72 hours, and introduced an '
                     + 'express Same Day service for a slightly higher fee. The regular service fee remains the '
                     + 'same, while the express fee costs a flat extra 35.00 pounds, irrespective of whether for a 3 '
                     + 'month or 6 month visa.',
        'body': 'Hello world!'
    }])


@app.route("/hello")
def hello():
    return 'Hello World!'


if __name__ == '__main__':
    app.run()
