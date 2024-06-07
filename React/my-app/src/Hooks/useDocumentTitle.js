import React, { useEffect } from 'react'

const useDocumentTitle = (counter) => {
    useEffect(()=>{
        document.title = `Count ${counter}`
    }  , [counter])

}

export default useDocumentTitle