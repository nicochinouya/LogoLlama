const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./questions');
const { Square, Triangle, Circle } = require('./shapes');

const init = () => {
    inquirer.prompt(questions)
        .then((data) => {
            console.log("Creating SVG file...");
            let shape;
            switch (data.shape) {
                case 'square':
                    shape = new Square(data.fill, data.stroke, data.strokeWidth, data.textColor, data.text, data.width);
                    break;
                case 'triangle':
                    shape = new Triangle(data.fill, data.stroke, data.strokeWidth, data.textColor, data.text, data.width);
                    break;
                case 'circle':
                    shape = new Circle(data.fill, data.stroke, data.strokeWidth, data.textColor, data.text, data.radius);
                    break;
                default:
                    console.log('Invalid shape selected');
                    return;
            }
            const fileName = `./examples/${data.shape}.svg`;
            fs.writeFile(fileName, shape.render(), (err) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log(`Congratulations, ${data.shape} is now created at ${fileName}!`);
                }
            });
        });
};

init();
