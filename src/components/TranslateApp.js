import React from 'react'
import { Input } from './Input'
import { Output } from './Output'
import { SelectLeng } from './SelectLeng'

export function TranslateApp({ inputText, setInputText, langList }) {


   return (
      <>
         <Input setInputText={setInputText} />
         <h1>{inputText}</h1>
         <SelectLeng langList={langList} />
         <Output />
      </>
   )
}

