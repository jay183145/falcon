import React from 'react'

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

const NoteCard = ({ note }) => {
  return (
    <div>
      <Card elevation={5}>
        <CardHeader
          // action={
          //   <IconButton aria-label="">
              
          //   </IconButton>
          // }
          title={ note.標題 }
          subheader={ note.發布日期 }
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            { note.內容 }
          </Typography>
        </CardContent>
      </Card>  
    </div>
  )
}

export default NoteCard