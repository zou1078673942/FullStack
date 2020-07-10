const initState = {
    value:'默认'
}
const reducer = (state = initState,action) => {
    switch (aciton.type) {
        case 'send_type':
            return Object.assign({}, state, action)
        default:
            return state;
    }
}
module.exports = {
    reducer
}