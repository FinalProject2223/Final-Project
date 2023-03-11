import React , {useState}  from 'react'
import './Cabinet.css'
import { HiOutlineHome, HiOutlineAcademicCap } from 'react-icons/hi'
import { BiAddToQueue } from 'react-icons/bi'
import { AiOutlineSetting } from 'react-icons/ai'
import { FaRegUserCircle } from 'react-icons/fa'
import {useSelector} from 'react-redux'
import { TextField } from '@mui/material'

export default function Cabinet() {

  const [OZgaruvchi , setOZgaruvchi] = useState("Cabinet__LeftNavbar__Settings")

  function Bosil() {
  }

  const selector = useSelector(state => state.auth)
  console.log(selector);
  return (
    <div className='Cabinet'>
      <div className='Cabinet__LeftNavbar'>
        <h1 style={{ marginTop: "10px" }}>Профиль</h1>
        <div className='Cabinet__LeftNavbar__Data'>
          <HiOutlineHome />
          <h3>Данные</h3>
        </div>
        <div className='Cabinet__LeftNavbar__Courses'>
          <HiOutlineAcademicCap />
          <h3>Курсы</h3>
        </div>
        <div className='Cabinet__LeftNavbar__Additions'>
          <BiAddToQueue />
          <h3>Добавления</h3>
        </div>
        <div onMouseUp={Bosil} className='Cabinet__LeftNavbar__Settings'>
          <AiOutlineSetting />
          <h3>Настройки</h3>
        </div>
        <div className='Cabinet__LeftNavbar__line'></div>
        <h3 className="leave_room">Выход</h3>
      </div>

      <div className='Cabinet__RightContent'>
        <div className='Cabinet__RightContent__Data_Dani'>
          <div className='Cabinet__RightContent__Data_Dani__Img'>
            <FaRegUserCircle style={{fontSize:"100px"}}/>
            <h1>{selector.name} <br /> {selector.surname}</h1>
          </div>
          <div className='Cabinet__RightContent__Data_Dani__Input'>
          <TextField
          sx={{width:"300px"}}
          id="standard-read-only-input"
          label="Имя"
          defaultValue={selector.name}
          InputProps={{
            readOnly: true,
          }}
          variant="standard"
        />
        <TextField
          sx={{width:"300px" , marginLeft:"30px"}}
          id="standard-read-only-input"
          label="Фамилия"
          defaultValue={selector.surname}
          InputProps={{
            readOnly: true,
          }}
          variant="standard"
        />
         <TextField
          sx={{width:"300px" , marginTop:"-180px"}}
          id="standard-read-only-input"
          label="Почта"
          defaultValue={selector.email}
          InputProps={{
            readOnly: true,
          }}
          variant="standard"
        />
          </div>
        </div>
      </div>
    </div>
  )
}
