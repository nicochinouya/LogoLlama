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

}
{
    type: 'input',
    name: 'textColor',
    input: 'What should the color of the text be?'

},
 {
    type: 'input',
    name: 'fill',
    input: "What should the shape's background color be?"
},
{
    type: 'input',
    name: 'stroke',
    input: 'What color should the shape boundary be?',

}
{
    type: 'input',
    name: 'strokeWidth',
    input:'On a scale of 1-5, How thick should the border be?'
},
{
    type: 'input',
    name: 'radius',
    input: 'On a scale of 50-200, What the size of the radius of the circle?'
},
{
    type: 'input',
    name: 'width',
    input: 'On a scale of 100-400, What would you like the width of the square to be?',
    when: (answers) => answers.shape === 'Square'

},

];

module.exports = questions