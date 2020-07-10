const initState = {
    value:'默认'
}
const reducer = (state = initState,action) => {
    console.log('reducer：',state,action)
    switch (action.type) {
        case 'send_type':
            return Object.assign({}, state, action)
        default:
            return state; 
    }
}
module.exports = {
    reducer
}