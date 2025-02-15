import React from 'react'
import './Category.css'
//import Updatecomponent from './Mainfunction'
function Category({userInput}) {
  return (
    <div>
      <div className='category bg-black'>
   <button className='bg-dark' onClick={userInput} value="sports">sports</button>
   <button className='bg-dark'onClick={userInput} value="health">health</button>
   <button className='bg-dark'onClick={userInput} value="business">business</button>
   <button className='bg-dark'onClick={userInput} value="politics">politics</button>
   <button className='bg-dark' onClick={userInput} value="entertainment">entertainment</button>
   
   </div>
    </div>
  )
}

export default Category
