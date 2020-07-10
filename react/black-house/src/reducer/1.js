const initState = {
    value:0
}
exports.reducer1 = (state=initState,action) => {
    switch (action.type) {
        case 'add_action':
            return {
                value: state.value+1
            }
        case 'clean_action':{
            return {
                value:0
            }
        }
        default:
            break;
    }
    return state
}