import * as React from 'react'
import App from 'naxos-core/libs/Apps'
import EditorIcon from '@mui/icons-material/AutoAwesomeMosaicRounded';
import EditorMain from './views';


export const initEditor = () => {
   App.create({
      id: "editor",
      name: "Editor",
      icon: <EditorIcon />,
      render: () => <EditorMain />
   })
}