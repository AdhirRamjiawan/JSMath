var JSMath =  new function(){
    this.Vector =  {
        Add : addVectors,
        FindNegative : findNegative,
        Scale: scaleVector,
        AreEquivalent : areEquivalent,
        FindNorm : findNorm,
        FindUnitVector : findUnitVector
    }

    function addVectors(vector1, vector2) {
        if (vector1 && vector2)  {// add further checks for type array
            if (vector1.length !== vector2.length) {
                throw("Vector parameters are of different dimensions");
            }

            var result = [];

            for (var i = 0; i < vector1.length; i++) {
                result.push(vector1[i] + vector2[i]);
            }

            return result;
        }

        throw("Invalid vector parameters");
    }

    function findNegative(vector1) {
        if (vector1) {
            var result = [];

            for (var i = 0; i < vector1.length; i++) {
                result.push(vector1[i] * -1);
            }

            return result;
        }

        throw("Invalid vector parameter");
    }

    function scaleVector(vector, scalar) {
        if (!vector)
            throw("Invalid vector parameter");

        if (!scalar)
            throw("Invalid scalar parameter");
        
        var result = [];

        for (var i =0; i <vector.length; i++) {
            result.push(vector[i] * scalar);
        }

        return result;
    }

    function areEquivalent(vector1, vector2) {
        if (!vector1 || !vector2)
            throw("Invalid vector parameters");
        
        if (vector1.length !== vector2.length)
            throw("Vector parameters are of different dimensions");

        var result = true;

        for (var i = 0; i < vector1.length; i++) {
            if (vector1[i] !== vector2[i]) {
                result = false;
                break;
            }
        }

        return result;
    }

    function findNorm(vector) {
        if (!vector)
            throw("Invalid vector parameters");

        var result = 0;

        for (var i =0; i< vector.length; i++)
            result += Math.pow(vector[i], 2);

        return Math.sqrt(result);
    }

    function findUnitVector(vector) {
        if (!vector)
            throw("Invalid vector parameters");

        var result = [];
        var norm = 0;

        for (var i =0; i< vector.length; i++)
            norm += Math.pow(vector[i], 2);

        norm = Math.sqrt(norm);
        
        for (var i = 0; i < vector.length; i++) {
            result.push((1/norm) * vector[i]);
        }

        return result;
    }
};

module.exports = JSMath;