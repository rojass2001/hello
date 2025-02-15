import React, { useEffect,useState } from 'react'
import Updatecomponent from './Mainfunction.jsx'
import Newscard from './Newscard.jsx'
import Navbar from './Navbar.jsx'
import Category from './Category.jsx'
import './Newsboard.css'
function Newsboard({getData,article,userInput,search,handleInput}){
  const getDatas=async()=>{
  const a=await getData(); 
  return a;
  }
useEffect(()=>{
getDatas();
},[])

  return(
    <div>
  <Navbar getDatas={getDatas} search={search} handleInput={handleInput} />
  
    <Category userInput={userInput} />
   <div className='latestnews'>   
   <h2 className=' text-white text-center'>Latest <span className='badge bg-danger'>News</span></h2>
   </div>
   
  
    { article? <Newscard article={article}/>:<div className='notfound'><h3 className='h6ss text-white text-center  '>notfound</h3></div> }    
    
    </div>
   
  );
}

export default Updatecomponent(Newsboard)
