import React from 'react'

const Footer = () => {
  return (
    <div className="flex justify-around"> 
      <div className="flex flex-row justify-start">
        <div className="mx-5">隱私權和 Cookie</div>
        <div className="mx-5">法律聲明</div>
        <div className="mx-5">廣告</div>
        <div className="mx-5">關於我們的廣告</div>
        <div className="mx-5">說明</div>
        <div className="mx-5">意見反應</div>    
      </div>  
      <div className="mr-10 flex justify-end text-xl">© 2021 Microsoft</div>
    </div> 
  )
}

export default Footer