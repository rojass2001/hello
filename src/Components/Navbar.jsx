import React,{ useEffect } from 'react'
//import Updatecomponent from './Mainfunction.jsx';
import './Navbar.css'
function Navbar({search,getDatas,handleInput}) {
  return (
    <div>
       <div className='navbars '>
<div className='newsmag'>News mag</div>
<input className='input' type="text" placeholder='search news here' value={search} onChange={handleInput}/>
<button onClick={getDatas}>search</button>
 </div>
    </div>
  )
}

export default Navbar
