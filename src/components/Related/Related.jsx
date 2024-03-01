import React from 'react'
import TextElement from '../TextElement/TextElement'

const Related = () => {
  return (
    <>
    <div className="m-8 p-8">
        <TextElement
            text="Related deals you might like for"
            className="text-3xl text-gray-800 md:text-4xl w-full md:w-2/4 mb-4 md:mb-0"
            disableHover={true} // Disable hover effect and cursor pointer
        />
    </div>
      
    </>
  )
}

export default Related
