import React from 'react'

function TodoHeader({children , loading}) {
  // React.Children.toArray(children).map(child => React.cloneElement(children, {loading}))
  return (
    <header>
      {React.Children.toArray(children).map(child => React.cloneElement(child, {loading}))}
      {/* {React.cloneElement(children, {loading})} */}
        {/* {children} */}
    </header>
  )
}

export {TodoHeader};