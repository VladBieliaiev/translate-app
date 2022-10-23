import React from 'react'
import '../App.css'

export function Input({ setInputText }) {

   return (
      <>
         <textarea
            className='text-field input'
            onChange={(e) => setInputText(e.target.value)}>
         </textarea>
      </>
   )
}

