import React from 'react'
import Stack from '@mui/material/Stack'
import { DockView } from 'naxos-core/libs/Dock'
import ScreenView from 'naxos-core/libs/Screen'
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import { SystemVars } from 'naxos-core/libs/System'
import { withStore } from 'state-range'

const LayoutView = () => {
   const { runAppId } = SystemVars.get("App")
   let activeApp = runAppId === 'desktop' ? "editor" : runAppId

   return (
      <Stack
         width="100%"
         height="100vh"
         direction="row"
      >
         <DockView
            apps={['editor', 'pages']}
            active={activeApp}
            notificationButton={false}
            menuIcon={<SettingsIcon />}
            onAppClick={(id: string) => {

               SystemVars.set("App", { runAppId: id })
            }}
         />
         <ScreenView appId={activeApp} />
      </Stack>
   )
}

export default withStore(LayoutView)