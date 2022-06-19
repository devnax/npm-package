import React from 'react'
import { SidebarView } from 'naxos-core/libs/Sidebar'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import UpdateIcon from '@mui/icons-material/Update';

const Footer = () => {
  return <Stack
    direction='row'
    justifyContent='space-between'
    alignItems="center"
    p={1}
    borderTop={1}
    borderColor="rgba(0,0,0,.06)"
  >
    <Box>
      <IconButton size="small">
        <UpdateIcon />
      </IconButton>
    </Box>
    <Box>
      <Button size="small" variant="contained">SAVE</Button>
    </Box>
  </Stack>
}


const EditorSidebar = () => {
  return (
    <SidebarView
      width="100%"
      maxWidth={250}
      footer={<Footer />}
    >
      sdf
    </SidebarView>
  )
}

export default EditorSidebar