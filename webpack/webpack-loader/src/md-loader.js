module.exports = function (source) {
    console.log(source)
    return `
    import React from 'react'
    import ReactDOM from 'react-dom'
    import Markdown from 'markdown-to-jsx'

    export default function foo () {
        return  React.createElement(Markdown,{},\`${source}\`)
    }
    `
    // return (
    //     <Markdown>
    //         ${source}
    //     </Markdown>
    // )
}