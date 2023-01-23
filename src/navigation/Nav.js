import React from 'react'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import { Home } from '../screens/home/Home'
import { Mainscreen } from '../screens/mainScreen/Mainscreen'
import { SignIn } from '../screens/signIn/SignIn'
import { SignUp } from '../screens/signUp/SignUp'


export const Nav=()=> {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route index element={<SignIn/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
        </Route>
        <Route path ="/Mainscreen" element={<Mainscreen/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
