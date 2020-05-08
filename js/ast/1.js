let dom = {
    tag: 'div',
    attrs:{
        id:'root',
        className:'wrap'
    },
    childNode: [{
        tag: 'span',
        attrs: {
            className:'demo'
        },
        childNode: [{
            tag: undefined,
            text: 'This is a span.'
        }]
    }],
    childNode: [{
        tag: 'p',
        childNode: [{
            tag: undefined,
            text: 'DOM'
        }]
    }]
}