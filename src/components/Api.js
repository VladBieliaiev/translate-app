import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { TranslateApp } from './TranslateApp'
import axios from 'axios';


export function Api() {
   const [langList, setLangList] = useState();
   const [inputText, setInputText] = useState();
   const [inputLang, setInputLang] = useState();
   const [outputText, setOutputText] = useState();
   const [translateTo, setTranslateTo] = useState()

   const getLangList = () => {
      axios.get('https://libretranslate.de/languages')
         .then(resp => setLangList(resp.data))
   }

   const detectLang = () => {
      axios.post('https://libretranslate.de/detect', {
         q: inputText
      })
         .then(resp => setInputLang(resp.data[0].language))
   }

   const translate = () => {
      axios.post('https://libretranslate.de/translate', {
         q: inputText,
         source: inputLang,
         target: translateTo,
         format: "text",
      })
         .then(resp => setOutputText(resp.data.translatedText))
   }


   const { isLoading, error, data } = useQuery('translate', getLangList, detectLang, translate)
   if (isLoading) {
      return <h1 style={{ "color": "white", "fontSize": "3rem" }}>Loading...</h1>
   }
   if (error) {
      return <h1 style={{ "color": "white", "fontSize": "3rem" }}>Opss..</h1>
   }
   if (data) {
   }

   return (
      <>
         <TranslateApp
            inputText={inputText} setInputText={setInputText}
            langList={langList}
            outputText={outputText} setOutput={setOutputText}
            setTranslateTo={setTranslateTo} translateTo={translateTo}
         />

         <button onClick={() => { translate(); detectLang(); }}>HI</button>
      </>
   )
}

