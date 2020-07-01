// NICE!
function createPhoneNumber(numbers) {
    var format = "(xxx) xxx-xxxx";

    for (var i = 0; i < numbers.length; i++) {
        format = format.replace('x', numbers[i]);
    }

    return format;
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 3, 2, 1, 3, 3]))