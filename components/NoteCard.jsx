import React from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';

import { useEffect, useState } from 'react';

const NoteCard = () => {
  const [notes, setNotes] = useState([])

  useEffect(()=> {
    fetch("https://www.hpa.gov.tw/wf/newsapi.ashx")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        return setNotes(data.slice(0,100))
      })
  }, [])
  
  return (
    <div className='ml-20 text-lg'>
      {notes.map(note => (
        <>
          <p key= {note.id}>{ note.標題 }</p>
          <p key= {note.id}>{ note.startdate }</p>
        </>
      ))}
    </div>
  )
}

export default NoteCard