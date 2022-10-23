import React from 'react'
import { Input } from './Input'
import { Output } from './Output'
import { SelectLeng } from './SelectLeng'

export function TranslateApp({ inputText, setInputText, langList, translateTo, setTranslateTo, outputText }) {


   return (
      <>
         <Input setInputText={setInputText} />
         <SelectLeng langList={langList} setTranslateTo={setTranslateTo} translateTo={translateTo} />
         <Output outputText={outputText} />
      </>
   )
}

