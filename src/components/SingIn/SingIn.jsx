import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './SingInCss.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify';

export default function SingIn() {
    const [Name, setName] = useState(null)
    const [Password, setPassword] = useState(null)
    const [Loading, setLoading] = useState(false)
    const naviget = useNavigate()

    function Tekshirish() {
        setLoading(true)
        axios.get("https://63905b3f65ff41831110b776.mockapi.io/api/todo")
            .then((res) => {
                let result = res.data.some(item => item.password == Password && item.name == Name)
                if (result) {
                    toast.success("Tabriklaymiz Siz Registratsiyadan Otingiz")
                    naviget("/")
                    setLoading(false)
                }
                else {
                    toast.error("Bunday Ism va Parol Yoq")
                    // toast.loading("Bunday Ism va Parol Yoq")
                    setLoading(false)
                }

            })
    }

    return (

        <div className='BackgroundImg'>
            <div className='SingInDiv'>
                <div className='InputDiv'>
                    <input className='SingIn_Input' onInput={(val) => { setName(val.target.value) }} type="text" placeholder='Ваша имя...' />
                    <input className='SingIn_Input' onInput={(val) => { setPassword(val.target.value) }} type="password" placeholder='Ваша пароль...' />
                    <button onClick={Tekshirish} className='InputDiv_ButtomYuborish'>{Loading ? "Loading..." : "Сохранить информацию"}</button>
                    <h3 className='InputDiv_H3'> Вы не прошли регистр ? <Link to={"/LoginPages"}>В этом Проходите регистр</Link></h3>
                </div>
            </div>
        </div>
    )
}
