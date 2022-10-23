import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { TranslateApp } from './TranslateApp'
import axios from 'axios';


export function Api() {
   const [langList, setLangList] = useState('')
   const [inputText, setInputText] = useState('');
   const [inputLang, setInputLang] = useState('');


   const getLangList = () => {
      axios.get('https://libretranslate.de/languages')
         .then(resp => setLangList(resp.data))
   }

   const getDetectLang = () => {
      axios.post('https://libretranslate.de/detect', {
         q: inputText
      })
         .then(resp => setInputLang(resp.data[0].language))
   }

   // getDetectLang();
   const { isLoading, error, data } = useQuery('translate', getLangList, getDetectLang)
   if (isLoading) {
      return <h1 style={{ "color": "white", "fontSize": "3rem" }}>Loading...</h1>
   }
   if (error) {
      return <h1 style={{ "color": "white", "fontSize": "3rem" }}>Opss..</h1>
   }
   if (data) {
      // console.log(data);
   }

   return (
      <>
         <TranslateApp
            inputText={inputText} setInputText={setInputText}
            langList={langList}
         />

         <button onClick={getDetectLang}>HI</button>
      </>
   )
}

