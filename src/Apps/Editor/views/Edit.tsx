import React from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import { isDarkMode } from 'mui-themex'


const EditBox = () => {

   const isDark = isDarkMode()

   return (
      <Stack
         alignItems="center"
         justifyContent="center"
         height="100%"
         width="100"
         flex={1}
         bgcolor={isDark ? "grey.800" : "grey.300"}
      >
         <Box
            bgcolor="background.default"
            height="90%"
            width="90%"
            boxShadow={1}
            borderRadius={2}
         >

         </Box>
      </Stack>
   )
}

export default EditBox