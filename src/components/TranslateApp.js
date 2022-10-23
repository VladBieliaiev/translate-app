import React from 'react'
import { Input } from './Input'
import { Output } from './Output'
import { SelectLeng } from './SelectLeng'
import '../App.css'
export function TranslateApp({ translate, detectLang, setInputText, langList, translateTo, setTranslateTo, outputText }) {


   return (
      <div className='translate-app'>
         <Input setInputText={setInputText} />
         <Output outputText={outputText} className='text-field' />
         <SelectLeng langList={langList} setTranslateTo={setTranslateTo} translateTo={translateTo} />
      </div>
   )
}

