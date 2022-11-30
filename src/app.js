class Cube {
    constructor(length) {
        this.length = length;
    }
    
    getSideLength () {
        return this.length;
    }
    
    getSurfaceArea () {
        return (this.length * this.length) * 6;
    }
    
    getVolume () {
        return Math.pow(this.length,3);
    }
}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getType () {

        if (this.a === this.b && this.a === this.c && this.b === this.c) {
            return("Equilateral");
        } else if (this.a === this.b || this.a === this.c || this.b === this.c) { 
            return("Isosceles");
        } else if (
            this.a*this.a === ((this.b+this.c)*(this.b+this.c)),
            this.b*this.b === ((this.a+this.c)*(this.a+this.c)),
            this.c*this.c === ((this.a+this.b)*(this.a+this.b))
            )
        return("Rectangle");
    } // Ipothénuse au carré = somme des 2 autres coté au carré

    getAir () {
        p = (this.a + this.b + this.c)
        s = p/2
        air = s(s-this.a)(s-this.b)(s-this.c)
        return air
    }


    //AB + BC + CA = 3 + 4 + 6 = 13 cm
    getPerimetre () {
        return (this.a + this.b + this.c);
    }
}

module.exports = {
    Cube:Cube,
    Triangle:Triangle
}