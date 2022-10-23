import { TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export function Output() {
   return (
      <div>
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
               label="Output"
               multiline
               rows={4}
               defaultValue=""
            />
         </Box>
      </div>
   )
}

