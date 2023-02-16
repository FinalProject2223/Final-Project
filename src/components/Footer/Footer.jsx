import React from 'react'
import "./Footer.css"

import logoImg from "../Img/mb-team_logo.png";


const Footer = () => {
  return (
    <div>
      <div className='Footer'>
      <div className="container">
        <div className="row">
          <div className="col-3">
              <div className='father_categorias'>
                <p className='glav_p'>Категории</p>
                <p>Маркетинг</p>
                <p>Дизайн</p>
                <p>Програмирования</p>
                <p>Управления</p>
                <p>Контент Макер</p>

              </div>
          </div>
          <div className="col-3">
              <div className='father_categorias'>
                <p className='glav_p'>Школы</p>
                <p>Маркетинг</p>
                <p>Дизайн</p>
                <p>Програмирования</p>
                <p>Управления</p>
                <p>Контент Макер</p>

              </div>
          </div>
          <div className="col-3">
              <div className='father_categorias'>
                <p className='glav_p'>Отзывы о школах</p>
                <p>Маркетинг</p>
                <p>Дизайн</p>
                <p>Програмирования</p>
                <p>Управления</p>
                <p>Контент Макер</p>

              </div>
          </div>
          <div className="col-3">
              <div className='father_categorias'>
                <p className='glav_p'>Курсы</p>
                <p>Маркетинг</p>
                <p>Дизайн</p>
                <p>Програмирования</p>
                <p>Управления</p>
                <p>Контент Макер</p>

              </div>
          </div>
          
        </div>
      </div>
    
      </div>
     <div className="Footer2">
     <div className="container mt-2">
        <div className=" border_bor">
          <div className="">
            <div className="Footer_bootom">
              <img className='logo_foot' src={logoImg} alt="" />
              <p className='mt-2'>© 2023. MB-TEAM. Все права защищены</p>
            </div>
          </div>
          <div className="">
            
            
          </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Footer