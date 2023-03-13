import React, { useEffect, useState } from 'react'
import axios from "axios";
import img from   "../img/star.png"
import imgtime from   "../img/time.png"
import "./Schools.css"
const Schools = () => {

    const [Data, setData] = useState([])
  

    useEffect(() => {
        axios.get("https://api.npoint.io/d999e9f37444a6164162")
          .then((res) => {
            console.log(res.data);
            setData(res.data)
            
    
          })
          .catch((error) => {
            console.log(error);
          })
      }, []);
  return (
    <div>
        <div >
        
          {
            (Data.length > 0) ?
              <>
                {
                  Data.map((arr, i) => {
                    return (
                      <div></div>
                    )
                  })
                }
              </>
              :
              <><h1>loading....</h1></>
          }
        
      </div>
    </div>
  )
}

export default Schools