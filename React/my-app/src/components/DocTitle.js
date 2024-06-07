import React, { useState } from 'react'
import useDocumentTitle from '../Hooks/useDocumentTitle';

const DocTitle = () => {
    const [counter , setCounter] = useState(0);

    // for  a particular counter i am updating my tilte of the doc 
   useDocumentTitle(counter);
    
  return (
    <div>
        <button onClick={()=>setCounter(counter+1)}>New button : {counter}</button>
    </div>
  )
}

export default DocTitle