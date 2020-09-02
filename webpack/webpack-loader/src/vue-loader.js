const { DomHandler } = require('domhandler')
const htmlparser2 = require('htmlparser2')
const fs = require('fs')

module.exports = function (source) {
    console.log(source)
    return new Promise((res, rej) => {
        const handle = new DomHandler((err, dom) => {
            if (err) rej(err)
            else {
                // fs.writeFileSync('./dom.json',JSON.stringify(dom,null,2))
                function visit (node) {
                    function help (children) {
                        if(!children) return ''
                        return children.map(child => {
                            if(child.type === 'text') return `\`${child.data}\``
                            return `React.createElement('${child.name}',{},${help(child.children).join(',')})`
                        })
                    }
                    return `React.createElement('${node.name}',{},${help(node.children).join(',')})`
                }
                res(`
                    import React from 'react'

                    export default function Component (params) {
                        return ${visit(dom[0].children.find(e => e.type === 'tag'))}
                    }
                `)
            }
        })
        const parser = new htmlparser2.Parser(handle)
        parser.write(source)
        parser.end()
    })
}