module.exports = function toReadable (number) {
    const from0To19 = [
        '', 'one', 'two', 'three', 'four',
        'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
        'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];
    const tens = [
        '', , 'twenty', 'thirty', 'forty', 'fifty',
        'sixty', 'seventy', 'eighty', 'ninety'
    ];
    if (number == 0) {
        return 'zero';
    };
    if (number <= 19) {
        return from0To19[number];
    };
    if (number % 100 == 0) {
        return from0To19[Math.floor(number / 100)] + ' hundred';
    };
    if (number % 100 < 20) {
        return from0To19[Math.floor(number / 100)] + ' hundred' + ' ' + from0To19[number % 100];
    };
    let digits = [];
    while (number) {
        digits.push(number % 10);
        number = Math.floor(number/10);
    }
    digits.reverse();
    if (digits.length == 2) {
        return digits[1] != 0 ? tens[digits[0]] + ' ' + from0To19[digits[1]] : tens[digits[0]];
    }
    if (digits.length == 3) {
        return digits[2] != 0 ? from0To19[digits[0]] + ' hundred' + ' ' + tens[digits[1]] + ' ' + from0To19[digits[2]]
          :  from0To19[digits[0]] + ' hundred' + ' ' + tens[digits[1]];
    }
}
