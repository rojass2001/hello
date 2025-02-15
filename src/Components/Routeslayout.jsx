import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
//import Updatecomponent from './Mainfunction'
import Navbar from './Navbar'
import Newsboard from './Newsboard'
import Helo from './Helo'
function Routeslayout({}) {
  return (
    <>
      <Router>
      
        <Routes>
        <Route path='/' element={ <Newsboard /> }/>
        </Routes>
      </Router>
    </>
  )
}

export default Routeslayout
