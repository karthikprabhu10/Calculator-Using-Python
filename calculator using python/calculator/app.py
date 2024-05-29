from flask import Flask, render_template, request, jsonify
import re

app = Flask(__name__)

def evaluate_expression(expression):
    try:
        # Using regular expressions to allow only valid characters (digits and operators)
        if not re.match(r'^[\d\+\-\*/\.\(\)\s]+$', expression):
            return 'Invalid Input'
        # Evaluating the expression securely
        result = eval(expression, {"__builtins__": None}, {})
        return result
    except Exception as e:
        return 'Error'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    data = request.get_json()
    expression = data.get('expression', '')
    result = evaluate_expression(expression)
    return jsonify(result=result)

if __name__ == '__main__':
    app.run(debug=True)
