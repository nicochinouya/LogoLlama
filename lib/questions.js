const questions = [{
    type: 'list',
    name: "shape",
    message: 'What shape do you want to draw?',
    choices: ['circle', 'triangle', 'square']
},
{
    type: 'input',
    name: 'text',
    message: 'What text would you like inside the shape?',
},
{
    type: 'input',
    name: 'textColor',
    message: 'What should the color of the text be?',
},
{
    type: 'input',
    name: 'fill',
    message: "What should the shape's background color be?"
},
{
    type: 'input',
    name: 'stroke',
    message: 'What color should the shape boundary be?',
},
{
    type: 'input',
    name: 'strokeWidth',
    message: 'On a scale of 1-5, How thick should the border be?'
},
{
    type: 'input',
    name: 'radius',
    message: 'On a scale of 50-200, What the size of the radius of the circle?',
},
{
    type: 'input',
    name: 'width',
    message: 'On a scale of 100-400, What would you like the width of the square to be?',
    when: (answers) => answers.shape === 'square'
}];

module.exports = questions;
