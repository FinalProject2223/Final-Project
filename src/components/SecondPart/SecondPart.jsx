import React from "react";
import "./SecondPart.css";
const SecondPart = () => {
  return (
    <div className="secondPart">
      <h2 className="About_Text_1">Наши преимущества</h2>
      <div className="container ">
        <div className="rowchik">
          <div className="col-4">
            <div className="obyekti">
              <div className="obyekt_1">
                {/* <img className="birinchi_img" src="birinchi.png" alt="" /> */}
                <p className="zaga_1">
                  Большой выбор <br /> курсов
                </p>
              </div>
              <div className="obyekt_2">
                  Мы аккумулируем большое количество курсов по различным
                  направлениям, позволяя сравнивать их, и выбирать то, что вам
                  нравится
                
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="obyekti">
              <div className="obyekt_1">
                {/* <img className="birinchi_img" src="ikinchi.png" alt="" /> */}
                <p className="zaga_1">
                  Актуальная <br /> информация
                </p>
              </div>
              <div className="obyekt_2">
                  Мы регулярно обновляем наши базы данных, чтобы предоставлять
                  вам только самую свежую информацию о новых курсах, старте
                  обучения, скидках и предложениях от школ
        
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="obyekti">
              <div className="obyekt_1">
                {/* <img className="birinchi_img" src="ikinchi.png" alt="" /> */}
                <p className="zaga_1">
                  Скорость <br /> Поиска
                </p>
              </div>
              <div className="obyekt_2">
                  Агрегатор курсов создан для экономии вашего времени. Вы можете
                  с легкостью найти подходящий курс в нашем каталоге по
                  различным фильтрам
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPart;
