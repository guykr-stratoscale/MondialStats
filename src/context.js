import React from 'react'

const AppContext = React.createContext()
export default AppContext

export const GamesContext = React.createContext()

const createContextGetter = Context => (...selectors) => WrappedComponent => {
  return class WrappingComponent extends React.Component {
    render() {
      return (
        <Context.Consumer>
          {context => {
            const contextProps = Object.keys(context)
              .filter(key => selectors.includes(key))
              .reduce((result, key) => {
                result[key] = context[key]
                return result
              }, {})

            return <WrappedComponent {...contextProps} {...this.props} />
          }}
        </Context.Consumer>
      )
    }
  }
}

export const withContext = createContextGetter(AppContext)
export const gamesContext = createContextGetter(GamesContext)
