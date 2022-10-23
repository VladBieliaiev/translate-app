import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'

export function SelectLeng({ langList, setTranslateTo, translateTo }) {



   if (langList) {
      return (
         <div>
            <Box sx={{ width: "10rem", margin: "auto" }}>
               <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Lang</InputLabel>
                  <Select
                     labelId="demo-simple-select-label"
                     id="demo-simple-select"
                     value={translateTo}
                     label="Lang"
                     onChange={(e) => setTranslateTo(e.target.value)}
                  >
                     {langList.map(i => <MenuItem key={i.name} value={i.code}>{i.code}</MenuItem>)}
                  </Select>
               </FormControl>
            </Box>
         </div>
      )
   }

}

