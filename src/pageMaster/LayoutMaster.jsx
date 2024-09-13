import React from 'react'
import { Outlet } from 'react-router-dom'

function LayoutMaster() {
  return (
    <>  
        <div>Header</div>
        <Outlet/>
        <div>Footer</div>
    </>
    
  )
}

export default LayoutMaster