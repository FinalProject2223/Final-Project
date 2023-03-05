import React from 'react'
import { useLocation} from 'react-router-dom'

export default function MorePages() {
     let a  =  useLocation()
  console.log(a.state);
  return (
    <div>MorePages</div>
  )
}
