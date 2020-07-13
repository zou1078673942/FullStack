
function foo(a) {
    var b = a
    return a + b
}

var c = foo(2)
// LHS c=... a=2 b=...
// RHS ...=foo(2)  ...=a   (return a+b)2次