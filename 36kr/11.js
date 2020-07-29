'use strict'
let obj = {
    a: () => {
        console.log(this)
    },
    b: 1
}
const c = () => {console.log(this)}
obj.a()
c()