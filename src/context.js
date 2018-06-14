import React from 'react'

const AppContext = React.createContext()
export default AppContext

// const withContext = (selector) => (WrappedComponent) => {
//   return function() {
//     return <AppContext.Consumer>{(selector) => <WrappedComponent />}</AppContext.Consumer>
//   }
// }

// export withContext
