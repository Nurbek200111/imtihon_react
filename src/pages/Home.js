import React, { useState } from 'react'
import Axios from 'axios'
import {useEffect} from 'react'
import Button from 'react-bootstrap/Button'
import Shopping from './Shopping'
import Search from './Search'
import { Outlet } from 'react-router-dom'
 
export default function Home() {


    
    
  return (
    <div className='home'>
        <div className="conteaner">
            <div className="header">
                   <Search/>                
            </div>
        </div>
        <Outlet/>
    </div>
  )
}
