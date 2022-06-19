import * as React from 'react';
import { withThemex } from 'mui-themex';
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from "@mui/material/CssBaseline"

import { LayoutView } from './Layout'
import initQuiz from './initQuiz';

const Root = ({ theme }: any) => {
   React.useMemo(() => {
      initQuiz()
   }, [])


   return (
      <ThemeProvider theme={theme}>
         <CssBaseline />
         <LayoutView

         />
      </ThemeProvider>
   )
}

export default withThemex(Root)