
import React from 'react';

 
import './Newscard.css'

const Newscard=({article})=>{
  
  console.log(article);
  return (
  
    <div className='cardcontainer'>
     
      {article.map((news,index)=>(
       <div className='cards bg-dark' >  
        <img className='cardimage 'src={news.urlToImage?news.urlToImage:"https://tse2.mm.bing.net/th?id=OIP.G37tgeQqSNt7v2oPfj9ltQHaE7&pid=Api&P=0&h=180"}/>
          <p className='title'>{news.title?news.title.slice(0,60):"nodata"}</p>
          <p className='des'> {news.description?news.description.slice(0,95):"nodata"}</p>
          <a href={news.url} className='btn btn-primary'>readmore</a>
      </div>
       ))}
     
    </div>
  
  )
}


export default Newscard
