function solve(s) {
    if (s.length % 2 == 0) {
        for (let i = (s.length / 2); i >= 0; i--) {
            console.log(s.slice(0, i),s.slice(s.length - i))
            if(i < 1)
                return 0
            if (s.slice(0, i) === s.slice(s.length - i))
                return i
        }
    } else {
        for (let i = Math.floor(s.length / 2); i >= 0; i--) {
            console.log(s.slice(0, i), s.slice(s.length - i))
            if(i < 0){
                return 0
            }           
            if (s.slice(0, i) === s.slice(s.length - i))
                return i
        }
    }
}
console.log(solve("aa"))