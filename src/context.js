import React from 'react'

const AppContext = React.createContext()
export default AppContext

export const withContext = (...selectors) => WrappedComponent => {
  return function(props) {
    return (
      <AppContext.Consumer>
        {context => {
          const contextProps = Object.keys(context)
            .filter(key => selectors.includes(key))
            .reduce((result, key) => {
              result[key] = context[key]
              return result
            }, {})

          return <WrappedComponent {...contextProps} {...props} />
        }}
      </AppContext.Consumer>
    )
  }
}
