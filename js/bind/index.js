// // let a = {
// //     b:function (){
// //             console.log(this.c)
// //     },
// //     c:'hello',
// // }
// // let c = '1';
// // a.b();
// let a = {
//     b:[
//         a1 = {
//             a2:2,
//             a3:3
//         },
//         b1 = 1
//     ],
//     c:1
// }
// let b = a;
// console.log(b);
function foo(){
    return (a) => {
        console.log(this.a)
    }
}
let obj1 = {
    a:1
};
let obj2 = {
    a:2
}
let bar = foo.call(obj1);
bar();

