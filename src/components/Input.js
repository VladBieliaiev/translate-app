import React from 'react'
import { Box, formControlClasses, TextField } from '@mui/material'
import '../App.css'

export function Input({ setInputText }) {

   return (
      <>
         {/* <Box
            component="form"
            sx={{
               '& .MuiTextField-root': { m: 1, width: '25rem', background: "#aeaeae" },
            }}
            noValidate
            autoComplete="off"
         >
            <TextField
               id="outlined-multiline-static"
               // label="Input"
               multiline
               rows={4}
               defaultValue=""
               onChange={(e) => setInputText(e.target.value)}
            />
         </Box> */}
         <textarea
            // cols="50" rows="10"
            className='text-field input'
            onChange={(e) => setInputText(e.target.value)}>
         </textarea>
      </>
   )
}

