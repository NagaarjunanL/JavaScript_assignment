function CanDrive(hasDrivingLiscence, isTired, isSober) {
    // Write you code here
    if (hasDrivingLiscence === true && isTired === false && isSober === true){
        console.log("You can drive");       
    }else{
        console.log("You cannot drive")
    }
}

module.exports = CanDrive;
