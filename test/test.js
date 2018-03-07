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

    describe('#VectorsFindNegative()', function(){
        it ('should return [-2,-2]', function(){
            var v1 = [2,2];
            var result = JSMath.Vector.FindNegative(v1);
 
            assert.deepEqual([-2,-2], result);
        });
     });

     describe('#VectorsScale()', function(){
        it ('should return [6,8]', function(){
            var v1 = [3,4];
            var result = JSMath.Vector.Scale(v1, 2);
 
            assert.deepEqual([6,8], result);
        });
     });

     describe('#VectorsEquivalent()', function(){
        it ('should return true', function(){
            var v1 = [3,4,4];
            var v2 = [3,4,4];
            var result = JSMath.Vector.AreEquivalent(v1, v2);
 
            assert.deepEqual(true, result);
        });
     });

     describe('#VectorsNotEquivalent()', function(){
        it ('should return false', function(){
            var v1 = [3,4,3];
            var v2 = [3,4,4];
            var result = JSMath.Vector.AreEquivalent(v1, v2);
 
            assert.deepEqual(false, result);
        });
     });

     describe('#VectorsFindNorm()', function(){
        it ('should return 5', function(){
            var v1 = [3,4];
            var result = JSMath.Vector.FindNorm(v1);
 
            assert.equal(5, result);
        });
     });

     describe('#VectorsFindUnitVector()', function(){
        it ('should return [0.6666666666666666,0.6666666666666666,-0.3333333333333333]', function(){
            var v1 = [2,2,-1];
            var result = JSMath.Vector.FindUnitVector(v1);
 
            assert.deepEqual([0.6666666666666666,0.6666666666666666,-0.3333333333333333], result);
        });
     });
});