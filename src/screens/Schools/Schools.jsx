import axios from 'axios'
import React, { useEffect, useState } from 'react'
import star from "../img/star.png"
import "./Schools.css"
 

const Schools = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get("https://api.npoint.io/d999e9f37444a6164162")
    .then((v)=>{
      
      setData(v.data)
    })
    .catch((err)=>{

    })
  }, [])
  
  return (
    <div className='conta'>
      <div className='row'>
        {
          (data.length > 0) ?(
            
            data.map((v,i)=>{
              return <div className='col-5 m-2'>
                <div className='flex_shcool'>
                  <img src={v.img} className="img_school" alt="" />
                  <p className='school_name'>{v.name}</p>
                  <div className='flex_star ms-2'><img src={star} alt="" className='star' /> <p className='over'>{v.over}</p></div>
                </div>
              </div>
            })
          )
          :(
            <h1>Error</h1>
          )
          
        }
      </div>
    </div>
  )
}

export default Schools