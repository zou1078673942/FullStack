import React , {createContext} from 'react'

const context = createContext()

class Provider extends React.Component{
    render() {
        const {store} = this.props
        return (
            <context.Provider value={store}>
                {this.props.children}
            </context.Provider>
        )
    }
}

function connect (mapState,mapDispatch) {
    return (Com) => {
        return class Connected extends React.Component {
            render() {
                let reduxState = {a:1,b:2}
                let filterProps = {}
                mapState && (filterProps = Object.assign(filterProps,mapState(reduxState)))
                mapDispatch && (filterProps = Object.assign(filterProps,mapDispatch(reduxState)))
                return (
                    <Com {...filterProps}/>
                )
            }
        }
    }
}

export {
    context,
    Provider,
    connect
}