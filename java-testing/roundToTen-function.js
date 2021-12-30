function roundToTenth(number) {
    let numberToArray = number.toString().split('');
    let preDecimalPlace = Math.floor(number);
    let postDecimalPlace = numberToArray.slice(numberToArray.indexOf('.'));
    let roundedDecimal = 0;
    if (parseInt(postDecimalPlace[2]) >= 5) {
        roundedDecimal = parseInt(postDecimalPlace[1]) + 1;
        return preDecimalPlace + '.' + roundedDecimal;
    }
    else {
        roundedDecimal = postDecimalPlace[1];
        return parseFloat(preDecimalPlace + '.' + roundedDecimal;
    }
}
