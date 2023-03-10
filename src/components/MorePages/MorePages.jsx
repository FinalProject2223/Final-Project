import { Rating } from '@mui/material'
import React, { useState } from 'react'
import { useLocation} from 'react-router-dom'
import "./MorePages.css"
import Reating from  "./Reating"

export default function MorePages() {
     const [data, setData] = useState(useLocation().state)

     console.log(data);
  
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-7">
            <div>
              <img  className='img_more'  src={data.img} alt="" />
            </div>
            <div className='center'>
            <div className='pass'>
              <div> <img  className='img_card' src={data.img} alt="" /></div>
              <div className='left_right'><img className='img_card' src={data.img} alt="" /></div>
              <div><img className='img_card' src={data.img} alt="" /></div>
            </div>
            </div>
          </div>
          <div className="col-5">
            <h1 className='academy mt-5'>{data.academy}</h1>
            <p className='categoria'>Categoria:{data.categoriya}</p>
            <p  className='categoria'>Certificate:{data.certificate}</p>
            <p className='categoria'>Course:{data.course}</p>
            <p className='categoria'>Duration: {data.duration}</p>
            <p className='categoria'>Price:{data.price}</p>
            <p className='categoria'>Time: {data.time}</p>
            <p className='categoria'>Описания: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem consequuntur vitae doloribus odio necessitatibus nam aperiam beatae dolorum porro labore totam maxime excepturi, facere illo, fugit architecto modi expedita atque.</p>
          </div>
        </div>
      
      </div>
      


    </div>
  )
}
