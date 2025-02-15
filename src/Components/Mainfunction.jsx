import React, { useState } from 'react'
const Updatecomponent=(Originalcomponent)=>{
     const apikey='a718601380a943d68517151c8e0aea96'
     
    function Newcomponent(){  
        const[search,setsearch]=useState('india')
        const[article,setarticle] =useState([]) 
        const handleInput = (e) =>{
           setsearch(e.target.value);
           }  
           const userInput =(event) =>{
               setsearch(event.target.value);
              }   
      
   const getData = async() =>{
   const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${apikey}`);
   const jsonData = await response.json();
   console.log(jsonData); 
   console.log(jsonData.articles);
  const dt=jsonData.articles;
   setarticle(dt) }
   
     return<Originalcomponent search={search} setsearch={setsearch} getData={getData} article={article} handleInput={handleInput} userInput={userInput}/>
    
     }
return Newcomponent
}
export default Updatecomponent