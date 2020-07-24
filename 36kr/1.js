let name = 'global';
function getName() {
    let name = 'local';
    return function() {
        return name;
    }
}
let getPrivate = getName();
console.log(name);
console.log(getPrivate());