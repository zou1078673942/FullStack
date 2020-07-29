var scope = 'global scope';
function first() {
    var scope = 'first EC';
    function second() {
        var scope = 'second EC'
    }
    function third() {
        var scope = 'third EC'
    }
    second()
    third()
}
first()