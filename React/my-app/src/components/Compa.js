import React, { createContext } from 'react'
import CompB from './CompB'


const nameContext = createContext(); // step 1

const Compa = () => {
  return (
    <nameContext.Provider  value="Chirag">
    <div>
        <CompB/>
    </div>
    </nameContext.Provider>
  )
}

export default Compa
export {nameContext}