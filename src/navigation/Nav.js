import React from 'react'
import {BrowserRouter,Router,Route} from 'react-router-dom'
import { Home } from '../screens/home/home'
import { SignIn } from '../screens/signIn/SignIn'
import { SignUp } from '../screens/signUp/SignUp'


export const Nav=()=> {
  return (
    <div>
      <BrowserRouter>
      <Router>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/SignIn" element={<SignIn/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
      </Router>
      </BrowserRouter>
    </div>
  )
}
