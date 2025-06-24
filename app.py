from flask import Flask, render_template, request, jsonify
from utils import get_current_aqi, get_historical_data

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get_aqi', methods=['GET'])
def get_aqi():
    location = request.args.get('location')
    current = get_current_aqi(location)
    history = get_historical_data(location)
    return jsonify({
        "current_aqi": current,
        "history": history
    })

if __name__ == '__main__':
    app.run(debug=True)
