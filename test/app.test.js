const Cube = require('../src/app').Cube;
const Triangle = require('../src/app').Triangle;
const expect = require('chai').expect;

describe('Testing the Cube Functions', function() {
    it('1. The side length of the Cube', function(done) {
        let c1 = new Cube(2);
        expect(c1.getSideLength()).to.equal(2);
        done();
    });
    
    it('2. The surface area of the Cube', function(done) {
        let c2 = new Cube(5);
        expect(c2.getSurfaceArea()).to.equal(150);
        done();
    });
    
    it('3. The volume of the Cube', function(done) {
        let c3 = new Cube(7);
        expect(c3.getVolume()).to.equal(343);
        done();
    });
    
});

describe('Testing the Triangle Functions', function() {
    it('1. The type of the Triangle', function(done) {
        let t1 = new Triangle(5, 5, 5);
        let t2 = new Triangle(4, 4, 5);
        let t3 = new Triangle(9.6, 2.8, 10);
        expect(t1.getType()).to.equal("Equilateral");
        expect(t2.getType()).to.equal("Isosceles");
        expect(t3.getType()).to.equal("Rectangle");
        done();
    });

    it('2. The air of the Triangle', function(done) {
        let t4 = new Triangle(3, 4, 5);
        expect(t4.getAir()).to.equal("");
        done();
    });

    it('2. The perimetre of the Triangle', function(done) {
        let t5 = new Triangle(3, 4, 5);
        expect(t5.getPerimetre()).to.equal(12);
        done();
    });

})