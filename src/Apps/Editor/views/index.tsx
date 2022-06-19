import React from 'react'
import Sidebar from './Sidebar'
import Stack from '@mui/material/Stack'
import EditBox from './Edit'

const EditorMain = () => {
   return (
      <Stack
         direction="row"
         height="100%"
      >
         <Sidebar />
         <EditBox />
      </Stack>
   )
}

export default EditorMain