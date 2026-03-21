import React from 'react'

import Chatai from './component/Chatai'
import Header from './component/Header'
 
function App() {
  return (
    <>
      <div className="flex flex-col items-center">
        <Header />
        <Chatai />
      </div>
    </>
  )
}

export default App