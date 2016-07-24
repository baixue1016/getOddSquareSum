function get1to100() {
    var numbers = [];

    for(var i = 1; i < 101; i++){
        numbers.push(i);
    }
    //   console.log(numbers);
    return numbers;
}

function getoddnumbers(numbers) {
    var oddnumbers = [];

    for(var j = 0; j < numbers.length/2; j++){
        oddnumbers.push(2*j+1);
    }
    //  console.log(oddnumbers);
    return oddnumbers;
}

function getoddSquareNumbers(oddnumbers) {
    var oddSquareNumbers = [];

    for(var k = 0; k < oddnumbers.length; k++){
        var temp = oddnumbers[k] * oddnumbers[k];
        oddSquareNumbers.push(temp);
    }
//    console.log(oddSquareNumbers);
    return oddSquareNumbers;
}

function getsum(oddSquareNumbers) {
    var sum = 0;

    for(var m = 0; m < oddSquareNumbers.length; m++){
        sum += oddSquareNumbers[m];
    }

    //   console.log(sum);
    return sum;
}

function getOddSquareSum() {
    var numbers = get1to100();
    var oddnumbers = getoddnumbers(numbers);
    var oddSquareNumbers = getoddSquareNumbers(oddnumbers);
    var sum = getsum(oddSquareNumbers);

    console.log(sum);
}

getOddSquareSum();

