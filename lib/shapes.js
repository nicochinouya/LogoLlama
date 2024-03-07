class Shapes {
    constructor(fill, stroke, strokeWidth, textColor, text) {
        this.fill = fill;
        this.stroke = stroke;
        this.strokeWidth = strokeWidth;
        this.text = text;
        this.textColor = textColor;
    }

    setText() {
        return `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="60%" font-weight="700"
        fill="${this.textColor}">${this.text}</text>`;
    }
}

class Square extends Shapes {
    constructor(fill, stroke, strokeWidth, textColor, text, width) {
        super(fill, stroke, strokeWidth, textColor, text);
        this.width = width;
    }

    render() {
        return `<svg width="${this.width}" height="${this.width}" 
        xmlns="http://www.w3.org/2000/svg">
        <rect width="${this.width}" height="${this.width}" fill="${this.fill}" stroke="${this.stroke}" stroke-width="${this.strokeWidth}" />
        ${this.setText()}
        </svg>`;
    }
}

class Triangle extends Shapes {
    constructor(fill, stroke, strokeWidth, textColor, text, width) {
        super(fill, stroke, strokeWidth, textColor, text);
        this.width = width;
    }

    render() {
        return `<svg width="${this.width}" height="${this.width}" 
        xmlns="http://www.w3.org/2000/svg">
        <polygon points="0,${this.width} ${this.width}, ${this.width} ${this.width / 2},0" fill="${this.fill}" stroke="${this.stroke}" stroke-width="${this.strokeWidth}" />
        ${this.setText()}
        </svg>`;
    }
}

class Circle extends Shapes {
    constructor(fill, stroke, strokeWidth, textColor, text, radius) {
        super(fill, stroke, strokeWidth, textColor, text);
        this.radius = radius;
    }

    render() {
        return `<svg width="${2 * this.radius}" height="${2 * this.radius}" 
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="${this.radius}" cy="${this.radius}" r="${this.radius}" fill="${this.fill}" stroke="${this.stroke}" stroke-width="${this.strokeWidth}" />
        ${this.setText()}
        </svg>`;
    }
}

module.exports = { Square, Triangle, Circle };
