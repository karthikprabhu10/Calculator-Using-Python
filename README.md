# Calculator-Using-Python

This project is a calculator built with Python (Flask), HTML, CSS, and JavaScript. The calculator features dynamically updating results, a clear function, a delete last character function, and typical arithmetic operations.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Modern user interface.
- Real-time calculation updates.
- Supports basic arithmetic operations (addition, subtraction, multiplication, division).
- Clear (C) button to reset the calculator.
- Delete (DEL) button to remove the last entered character.
- Responsive design suitable for different screen sizes.
- Perfectly round buttons for a sleek look.

## Installation

### Prerequisites

- Python 3.6 or higher
- Flask

### Steps

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/calculator.git
    cd calculator
    ```

2. Create a virtual environment:
    ```sh
    python -m venv venv
    ```

3. Activate the virtual environment:
    - On Windows:
        ```sh
        venv\Scripts\activate
        ```
    - On macOS/Linux:
        ```sh
        source venv/bin/activate
        ```

4. Install the required packages:
    ```sh
    pip install Flask
    ```

5. Run the application:
    ```sh
    python app.py
    ```

6. Open your web browser and go to `http://127.0.0.1:5000/` to view the calculator.

## Usage

- **Input numbers and operations**: Click the buttons on the calculator interface to input numbers and operations.
- **Real-time updates**: As you input numbers and operations, the result will update in real-time before pressing the equals (`=`) button.
- **Clear the display**: Press the `C` button to reset the display.
- **Delete the last character**: Press the `DEL` button to remove the last character from the input.
- **Calculate the result**: Press the `=` button to calculate and display the result.

## Project Structure

calculator/
├── static/
│ ├── css/
│ │ └── styles.css
│ └── js/
│ └── scripts.js
├── templates/
│ └── index.html
├── app.py
└── README.md


- `static/css/styles.css`: CSS file for styling the calculator.
- `static/js/scripts.js`: JavaScript file for handling calculator logic.
- `templates/index.html`: HTML file for the calculator interface.
- `app.py`: Flask application file to serve the calculator.
- `README.md`: This file.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

Please make sure your code follows the project's coding style and includes appropriate tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
