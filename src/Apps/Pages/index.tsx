import * as React from 'react'
import App from 'naxos-core/libs/Apps'
import CalendarViewDayRoundedIcon from '@mui/icons-material/CalendarViewDayRounded';

export const initPage = () => {
   App.create({
      id: "pages",
      name: "Pages",
      icon: <CalendarViewDayRoundedIcon />,
      render: () => <div>Ok</div>
   })
}