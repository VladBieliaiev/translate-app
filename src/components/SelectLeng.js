import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
// import { Box } from '@mui/system';
import React, { useState } from 'react'

export function SelectLeng({ langList }) {
   const [lang, setLang] = useState();


   if (langList) {
      return (
         <div>
            <Box sx={{ width: "20rem", margin: "auto" }}>
               <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                     labelId="demo-simple-select-label"
                     id="demo-simple-select"
                     value={lang}
                     label="Age"
                     onChange={(e) => setLang(e.target.value)}
                  >
                     {langList.map(i => <MenuItem key={i.name} value={i.code}>{i.code}</MenuItem>)}
                  </Select>
               </FormControl>
            </Box>
         </div>
      )
   }

}

