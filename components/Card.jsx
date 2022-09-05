import React from 'react'

const Card = () => {
  const endpoint = "https://newsapi.org/v2/top-headlines?country=tw&apiKey=dc01149c7c004404a03a135efd861e6e"
  const getData = async() => {
    const rsp = await (await fetch(endpoint)).json()
    console.log(rsp);
  }
  getData()
  return (
    <div>Hi</div>
  )
}

export default Card