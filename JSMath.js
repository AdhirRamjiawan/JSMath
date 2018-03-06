var JSMath =  new function(){
    this.Vector =  {
        Add : function(vector1, vector2) {
            if (vector1 && vector2)  {// add further checks for type array
                if (vector1.length !== vector2.length) {
                    throw("Addition of vectors of different dimensions");
                }

                var result = [];

                for (var i = 0; i < vector1.length; i++) {
                    result.push(vector1[i] + vector2[i]);
                }

                return result;
            }

            throw("Invalid vector parameters");
        }
    }
};

module.exports = JSMath;