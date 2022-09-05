import React from 'react'

const Header = () => {
  return (
    <>
      <div className="flex flex-row">
        <div className="w-48 ml-20">
          <img src="Bing-logo.png" alt="Bing-logo" />
        </div>
        <div className="my-10 mx-5">
          <input type="text" value="熱門報導"/>
        </div>        
      </div>
    </>
  )
}

export default Header