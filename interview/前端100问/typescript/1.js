const getUserInfo = function (user) {
    return `name:${user.name},age:${user.age}`
}
getUserInfo({name:'17',age:18})

getUserInfo()
getUserInfo({name:'17'})
getUserInfo({name:'17',height:180})