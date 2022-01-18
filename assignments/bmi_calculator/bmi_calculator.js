// This function should return the BMI for a person 
function BMICalculator(mass, height) {
    // Write your code here
    if(typeof mass === 'number'&& typeof height === 'number'&& mass>0 && height>0) {
        var res = mass / (height*height)
        console.log(res)
    }else{
        console.log("INVALID INPUT")
    }
}

module.exports = BMICalculator;
