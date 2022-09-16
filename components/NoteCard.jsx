import React from 'react'
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid'

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

const NoteCard = () => {
  const [notes, setNotes] = useState([])

  useEffect(()=> {
    fetch("https://www.hpa.gov.tw/wf/newsapi.ashx")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        return setNotes(data.slice(0,10))
      })
  }, [])
  
  return (
    <div className='mx-20 mb-10 text-lg'>
      <Grid container spacing={3}>
        {notes.map(note => (
          <>
            <Grid item key= {note.id} lg={3}>
              { note.標題 }
            </Grid>
            <p key= {note.id}>{ note.startdate }</p>
          </>
        ))}
      </Grid>
      
    </div>
  )
}

export default NoteCard