# LogoLlama

This is a command-line application that takes in user input to generate a logo and save it as an SVG file Links to an external site. The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a .svg file.

Video link
https://youtu.be/mcB4z9ZFnu0?si=E3Yua1ap1q7BQhvv

## Installation

1. Clone this repository to your local machine:

```bash
git clone <https://github.com/nicochinouya/LogoLlama>

# # Navigate to the project directory:
# cd LogoLlama
# # Install dependencies:
# npm install

# Usage

# # Run the application:

# bash
# Copy code
# node index.js
# Follow the prompts to choose the shape you want to create and provide necessary input (fill color, stroke color, etc.).
# Once you provide all the input, the application will generate an SVG file for the selected shape in the lib/examples directory.

# Dependencies

# inquirer: Used for prompting users with questions in the command line interface.

# Structure

# index.js: Entry point of the application. Contains the main logic for interacting with users and generating SVG files.
# lib/: Directory containing supporting modules and files.
# shapes.js: Module defining classes for different shapes (square, triangle, circle).
# questions.js: Module defining questions to prompt users for input.

# Contributing

# If you'd like to contribute to this project, please follow these steps:

# Fork the repository
# Create a new branch (git checkout -b feature/your-feature)
# Make your changes
# Commit your changes (git commit -am 'Add new feature')
# Push to the branch (git push origin feature/your-feature)
# Create a new Pull Request
# License

# This project is licensed under the MIT License - see the LICENSE file for details.

# Feel free to modify or expand upon this README file to better suit your project's needs.