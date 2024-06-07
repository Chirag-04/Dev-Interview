import React, { useContext } from 'react'
import { nameContext } from './Compa'
const CompB = () => {
    const context = useContext(nameContext);
  return (
    <div>
        
        my name is {context}
    </div>
    
  )
}

export default CompB