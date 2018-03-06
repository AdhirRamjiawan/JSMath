var assert = require('assert');
var JSMath = require('..\\JSMath.js');


describe('Vectors', function(){
    describe('#dotProduct()', function(){
        it ('should return -1 when the value is not present', function(){
            assert.equal([1,2,3].indexOf(4), -1);
        });
    });

    describe('#VectorsAddition()', function(){
       it ('should return [2,2,4,4]', function(){
           var v1 = [0,0,1,1];
           var v2 = [2,2,3,3];

           var result = JSMath.Vector.Add(v1, v2);

           assert.deepEqual([2,2,4,4], result);
       });
    });
});