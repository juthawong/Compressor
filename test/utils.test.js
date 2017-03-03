const should = require('should');

const add = require('../src/js/utils').add;
const getKey = require('../src/js/utils').getKey;


describe('Utility functions', function() {

   describe('#add()', function() {

       it('should return 2 when passed value is 5', function() {
           add(5, [1, 3, 5, 7, 9]).indexOf(5).should.equal(2);
       });

       it('should return 3 when passed value is 6', function() {
           add(6, [1, 3, 5, 7, 9]).indexOf(6).should.equal(3);
       });

       it('should return 3 when passed value is 7', function() {
           add(7, [1, 3, 5, 7, 9]).indexOf(7).should.equal(3);
       });

       it('should return 5 when passed value is 10', function() {
           add(10, [1, 3, 5, 7, 9]).indexOf(10).should.equal(5);
       });

       it('should return 0 when passed value is 0', function() {
           add(0, [1, 3, 5, 7, 9]).indexOf(0).should.equal(0);
       });

       it('should return 0 when passed value is {x: 0} and comparsion field is not null', function() {
           add({x: 0}, [{x: 1}, {x: 2}], 'x').findIndex((e) => e.x === 0).should.equal(0);
       });

   });


   describe('#getKey()', function() {

       it("should return 'a' or 'b' when passed value is 5", function() {
           getKey({b: 3, c: 6, a: 5}, 5).should.equal('a');
           getKey({b: 5, a: 5}, 5).should.equal('b');
       });

   });

});