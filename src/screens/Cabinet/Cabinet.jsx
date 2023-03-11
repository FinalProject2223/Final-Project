import React, { useState } from 'react'
import './Cabinet.css'
import { HiOutlineHome, HiOutlineAcademicCap } from 'react-icons/hi'
import { BiAddToQueue } from 'react-icons/bi'
import { AiOutlineSetting , AiOutlineEyeInvisible , AiOutlineEye} from 'react-icons/ai'
import { FaRegUserCircle } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { TextField } from '@mui/material'

export default function Cabinet() {

  const [OZgaruvchi, setOZgaruvchi] = useState("Cabinet__LeftNavbar__Settings")
  const [Password , setPassword] = useState("none")
  const [Password2 , setPassword2] = useState("inline")
  const [Password3 , setPassword3] = useState("password")

  function Open() {
    setPassword2("none")
    setPassword("inline")
    setPassword3("text")

  }
  
  function Closed() {
    setPassword2("inline")
    setPassword("none")
    setPassword3("password")
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
        <div  className='Cabinet__LeftNavbar__Settings'>
          <AiOutlineSetting />
          <h3>Настройки</h3>
        </div>
        <div className='Cabinet__LeftNavbar__line'></div>
        <h3 className="leave_room">Выход</h3>
      </div>

      <div className='Cabinet__RightContent'>
        <div className='Cabinet__RightContent__Data_Dani'>
          <div className='Cabinet__RightContent__Data_Dani__Img'>
            <FaRegUserCircle style={{ fontSize: "100px" }} />
            <h1>{selector.name} <br /> {selector.surname}</h1>
          </div>
          <div className='Cabinet__RightContent__Data_Dani__Input'>
            <TextField
              sx={{ width: "300px" }}
              id="standard-read-only-input"
              label="Имя"
              defaultValue={selector.name}
              InputProps={{
                readOnly: true,
              }}
              variant="standard"
            />
            <TextField
              sx={{ width: "300px", marginLeft: "30px" }}
              id="standard-read-only-input"
              label="Фамилия"
              defaultValue={selector.surname}
              InputProps={{
                readOnly: true,
              }}
              variant="standard"
            />
            <TextField
              sx={{ width: "300px", marginTop: "-180px" }}
              id="standard-read-only-input"
              label="Почта"
              defaultValue={selector.email}
              InputProps={{
                readOnly: true,
              }}
              variant="standard"
            />
            <TextField
              sx={{ width: "300px", marginTop: "-180px" , marginLeft:"30px"}}
              id="standard-read-only-input"
              label="Пароль"
              defaultValue={selector.password}
              InputProps={{
                readOnly: true,
              }}
              variant="standard"
              type={Password3}
            />
            <div style={{position:"absolute" , top:"160px" , right:"110px" , fontSize:"18px" , display:`${Password2}`}}><AiOutlineEyeInvisible onClick={Open}  /></div>
            <div style={{position:"absolute" , top:"160px" , right:"110px" , fontSize:"18px" , display:`${Password}`}}><AiOutlineEye onClick={Closed} /></div>
          </div>
        </div>
      </div>
    </div>
  )
}
