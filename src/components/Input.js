import React from 'react'
import { Box, formControlClasses, TextField } from '@mui/material'
export function Input({ setInputText }) {

   return (
      <>
         <Box
            component="form"
            sx={{
               '& .MuiTextField-root': { m: 1, width: '25rem' },
            }}
            noValidate
            autoComplete="off"
         >
            <TextField
               id="outlined-multiline-static"
               label="Input"
               multiline
               rows={4}
               defaultValue=""
               onChange={(e) => setInputText(e.target.value)}
            />
         </Box>
      </>
   )
}

