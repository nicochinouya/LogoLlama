const fs = require ('fs')  
const inquirer = require ('inquirer')
const {circle, square, triangle} = require ('/Users/ukudei/Desktop/UT bootcamp/LogoLlama/lib/shapes.js')
const questions = require ('/Users/ukudei/Desktop/UT bootcamp/LogoLlama/lib/questions')


const init = () => {
    inquirer.prompt(questions)
        .then((data) => {
            console.log( "creating svg file..");
            switch (`${data.shape}`) {
                case 'Square':
                    console.log('Square is being Created...')
                    const square = new square( data.fill, data.stroke, data.strokeWidth, data.text,  data.textColor, data.width)
                    fs.writeFile('/Users/ukudei/Desktop/UT bootcamp/LogoLlama/lib/examples', square.renderSquare(), (err) => {
                        if (err) {
                            console.error (err);
                        } else {
                            console.log('congratulations, Square is now created!');
                        }
                    });
                    break;
                case 'Triangle':
                        console.log('Triangle is being Created...')
                        const Triangle = new Triangle( data.fill, data.stroke, data.strokeWidth, data.text,  data.textColor, data.width)
                        fs.writeFile('/Users/ukudei/Desktop/UT bootcamp/LogoLlama/lib/examples', Triangle.renderTriangle(), (err) => {
                            if (err) {
                                console.error (err);
                            } else {
                                console.log('congratulations, Triangle is now created!');
                            }
                        });
                        break;
                case 'Circle':
                            console.log('Circle is being Created...')
                            const circle = new circle( data.fill, data.stroke, data.strokeWidth, data.text,  data.textColor, data.width)
                            fs.writeFile('/Users/ukudei/Desktop/UT bootcamp/LogoLlama/lib/examples', circle.rendercircle(), (err) => {
                                if (err) {
                                    console.error (err);
                                } else {
                                    console.log('congratulations, Circle is now created!');
                                }
                            });
                            break;   
            }
        });
}

init();