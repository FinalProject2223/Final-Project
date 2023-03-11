import React, { useState } from 'react'
import './Cabinet.css'
import { HiOutlineHome, HiOutlineAcademicCap } from 'react-icons/hi'
import { BiAddToQueue } from 'react-icons/bi'
import { AiOutlineSetting, AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import { FaRegUserCircle } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { TextField } from '@mui/material'

export default function Cabinet() {

  const [OZgaruvchi, setOZgaruvchi] = useState("Cabinet__LeftNavbar__Settings")
  const [Password, setPassword] = useState("none")
  const [Password2, setPassword2] = useState("inline")
  const [Password3, setPassword3] = useState("password")


  const [DataPages, setDataPages] = useState("inline")
  const [CoursesPages, setCoursesPages] = useState("none")
  const [AdditionsPages, setAdditionsPages] = useState("none")
  const [SettingsPages, setSettingsPages] = useState("none")

  const [Imya, setImya] = useState(null)


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


  function DataOn() {
    setDataPages("inline")
    setCoursesPages("none")
    setAdditionsPages("none")
    setSettingsPages("none")
  }

  function CoursesOn() {
    setDataPages("none")
    setCoursesPages("inline")
    setAdditionsPages("none")
    setSettingsPages("none")
  }

  function AdditionsOn() {
    setDataPages("none")
    setCoursesPages("none")
    setAdditionsPages("inline")
    setSettingsPages("none")
  }

  function SettingsOn() {
    setDataPages("none")
    setCoursesPages("none")
    setAdditionsPages("none")
    setSettingsPages("inline")
  }

  const selector = useSelector(state => state.auth)
  console.log(selector);
  return (
    <div className='Cabinet'>
      <div className='Cabinet__LeftNavbar'>
        <h1 style={{ marginTop: "10px" }}>Профиль</h1>
        <div onClick={DataOn} className={DataPages == "inline" ? "Cabinet__LeftNavbar__Data__Active" : "Cabinet__LeftNavbar__Data"}>
          <HiOutlineHome />
          <h3>Данные</h3>
        </div>
        <div onClick={CoursesOn} className={CoursesPages == 'inline' ? "Cabinet__LeftNavbar__Courses__Active" : "Cabinet__LeftNavbar__Courses"}>
          <HiOutlineAcademicCap />
          <h3>Курсы</h3>
        </div>
        <div onClick={AdditionsOn} className={AdditionsPages == "inline" ? "Cabinet__LeftNavbar__Additions__Active" : "Cabinet__LeftNavbar__Additions"}>
          <BiAddToQueue />
          <h3>Добавления</h3>
        </div>
        <div onClick={SettingsOn} className={SettingsPages == 'inline' ? 'Cabinet__LeftNavbar__Settings__Active' : 'Cabinet__LeftNavbar__Settings'}>
          <AiOutlineSetting />
          <h3>Настройки</h3>
        </div>
        <div className='Cabinet__LeftNavbar__line'></div>
        <h3 className="leave_room">Выход</h3>
      </div>

      <div className='Cabinet__RightContent'>
        <div style={{ display: `${DataPages}` }} className='Cabinet__RightContent__Data_Dani'>
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
              sx={{ width: "300px", marginTop: "-80px" }}
              id="standard-read-only-input"
              label="Почта"
              defaultValue={selector.email}
              InputProps={{
                readOnly: true,
              }}
              variant="standard"
            />
            <TextField
              sx={{ width: "300px", marginTop: "-80px", marginLeft: "30px" }}
              id="standard-read-only-input"
              label="Пароль"
              defaultValue={selector.password}
              InputProps={{
                readOnly: true,
              }}
              variant="standard"
              type={Password3}
            />
            <div style={{ position: "absolute", top: "175px", right: "110px", fontSize: "18px", display: `${Password2}` }}><AiOutlineEyeInvisible onClick={Open} /></div>
            <div style={{ position: "absolute", top: "175px", right: "110px", fontSize: "18px", display: `${Password}` }}><AiOutlineEye onClick={Closed} /></div>
            <TextField
              id="standard-read-only-input"
              sx={{ width: "300px", marginTop: "-120px" }}
              label="Город"
              defaultValue={selector.city}
              InputProps={{
                readOnly: true,
              }}
              variant="standard"
            />
            <TextField
              id="standard-read-only-input"
              sx={{ width: "300px", marginTop: "-120px", marginLeft: "30px" }}
              label="Дата создания"
              defaultValue={selector.createdAt}
              InputProps={{
                readOnly: true,
              }}
              variant="standard"
            />
          </div>
        </div>

        <div style={{ display: `${CoursesPages}` }}>
          salom
        </div>

        <div style={{ display: `${AdditionsPages}` }}>
          Bosit
        </div>

        <div style={{ display: `${SettingsPages}` }}>
          <TextField
            id="standard-read-only-input"
            sx={{ width: "400px", marginLeft: "40px", marginTop: "40px" }}
            label="Имя"
            defaultValue={selector.name}
            onInput={(val) => { setImya(val.target.value) }}
            variant="standard"
          />
          <br />
          <TextField
            id="standard-read-only-input"
            sx={{ width: "400px", marginLeft: "40px", marginTop: "40px" }}
            label="Имя"
            defaultValue={selector.name}
            variant="standard"
          />
        </div>
      </div>
    </div>
  )
}
