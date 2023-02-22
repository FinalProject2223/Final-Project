import React, { useEffect, useState } from 'react'
import './LoginCss.css'
import img from '../Img/working.png'
import { MdCloudUpload } from 'react-icons/md'
import './shahar.css'
import axios from 'axios'
import ImgLogo from '../Img/mb-team_logo.png'

export default function LoginPages() {
  const [image, setImage] = useState(null)
  const [Name, setName] = useState(null)
  const [Surname, setSurname] = useState(null)
  const [Password, setPassword] = useState(null)
  const [Password2, setPassword2] = useState(null)




  async function GetImage(e) {
    let z = window.URL.createObjectURL(e.target.files[0])

    if (e) {
      setImage(z)
      let result = localStorage.setItem("ImgUrl", JSON.stringify({ img: z }))

      console.log(image);
    }
  }

  function Yuborish() {
    if (Password == Password2) {
      axios.post("https://63905b3f65ff41831110b776.mockapi.io/api/todo", {
        img: image,
        password: Password,
        Surname: Surname,
        name: Name
      })
        .then(res => {
          console.log(res.data);
        })
    }
    else {
      alert("hato ber tekshirib qaytadan parol kiriting")
    }
  }

  return (
    <div className='row' >
      <div className='col-6'>

        <div>
          <main>
            <form className='form'
              onClick={() => document.querySelector('.input-filed').click()}
            >
              <input type="file" accept='image/*' className='input-filed' hidden
                onChange={(e) => GetImage(e)}
              />

              {image ?
                <img src={image} width={620} height={245} style={{ borderRadius: "47px" }} alt="filename" />
                :
                <>
                  <MdCloudUpload color='#1363DF' size={60} />
                  <h2 style={{ color: "#1363DF" }}>Rasm joylash</h2>
                </>
              }
            </form>
          </main>
        </div>

        <input onInput={(val) => { setName(val.target.value) }} className='input' type="text" placeholder='Ваша имя...' />
        <input onInput={(val) => { setSurname(val.target.value) }} className='input' type="text" placeholder='Ваша фамилия...' />
        <input onInput={(val) => { setPassword(val.target.value) }} className='input' type="password" placeholder='Введите пароль...' />
      </div>
      <div className='col-6'>
        <img className='ImgRight' src={img} alt="" />
        <input onInput={(val) => { setPassword2(val.target.value) }} className='input' type="password" placeholder='Введите пароль ещё раз...' />
      </div>
      <div className='col-12 d-flex align-items-center justify-content-around'>
        <img className='ImgLogo1' src={ImgLogo} alt="mb-team_logo" />
        <button className='ButtomYuborish' onClick={Yuborish}>Сохранить информацию</button>
        <img className='ImgLogo2' src={ImgLogo} alt="mb-team_logo" />
      </div>
    </div>

  )
}
