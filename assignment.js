
//feetToMile
function feetToMile(feet) {
    if (feet > 0) {
        var mile = feet / 5280;
        return mile;
    } 
    else {
        console.log("input cannot be less than zero");
    }
}


//woodCalculator
function woodCalculator(chair, table, bed) {
    if (chair >= 0 && table >= 0 && bed >= 0) {
        var chairCount = chair * 1;
        var tableCount = table * 3;
        var bedCount = bed * 5;
        var totalWood = chairCount + tableCount + bedCount;
        return totalWood;
    }
    else {
        console.log("input cannot be less than zero");
    }
}


//brickCalculator
var brickNumber;
function brickCalculator(buildingNumber){
    if ( buildingNumber >=1 && buildingNumber <= 10){
        brickNumber = buildingNumber * 15 *1000;
        return brickNumber;
    }
    else if( buildingNumber >=11 && buildingNumber <= 20){
        brickNumber = buildingNumber * 12 *1000;
        return brickNumber;
    }
    else if( buildingNumber >=21 ){
        brickNumber = buildingNumber * 10 *1000;
        return brickNumber;
    }
    else if( buildingNumber <= 0){
        return "input cannot be less than or equal zero";
    }

}


//tinyFriend
function tinyFriend(str) {
    var smallestName = str[0];
    for (var i = 0; i < str.length; i++) {
        var currentName = str[i];
        if (currentName.length < smallestName.length) {
            smallestName = currentName;
        }
    }
    return smallestName;
}
