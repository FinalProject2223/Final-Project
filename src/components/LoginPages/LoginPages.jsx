import React, { useEffect, useState } from "react";
import "./LoginCss.css";
import img from "../Img/working.png";
import { MdCloudUpload } from "react-icons/md";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import LogoImg from "../Img/mb-team_logo.png";
import Modal from "../Modal/index"

export default function LoginPages() {
	const [isSaveShow, setIsSaveShow] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
  const [Email, setEmail] = useState(null);
  const [Name, setName] = useState(null);
  const [Surname, setSurname] = useState(null);
  const [Password, setPassword] = useState(null);
  const [Password2, setPassword2] = useState(null);
  const [Border, setBorder] = useState();
  const [Border2, setBorder2] = useState();
  const [Loading, setLoading] = useState(false);

  const naviget = useNavigate();

  // async function GetImage(e) {
  //   let z = window.URL.createObjectURL(e.target.files[0])

  //   if (e) {
  //     setImage(z)
  //     let result = localStorage.setItem("ImgUrl", JSON.stringify({ img: z }))

  //     console.log(image);
  //   }
  // }
  const removeTaskOpeningModal = () => {
		setIsModalOpen(true);
	};

  function Yuborish() {
    setLoading(true);
    
    if (
      Password != null &&
      Password2 != null &&
      Name != null &&
      Email != null
    ) {
      if (Password == Password2) {
        axios
          .post("https://63905b3f65ff41831110b776.mockapi.io/api/users", {
            email: Email,
            password: Password,
            surname: Surname,
            name: Name,
          })
          .then((res) => {
            console.log(res.data);
          });
        toast.success("Вы зарегестрировались!");
        naviget("/SingInPages");
        setBorder2("");
        setLoading(false);
      } else {
        // alert("hato tekshirib qaytadan parol kiriting")
        setBorder("red");
        toast.error(
          "Второй пароль не совпадает с первым, проверьте и попробуйте снова"
        );
        setBorder2("");
        setLoading(false);
      }
    } else {
      setBorder("red");
      setBorder2("red");
      toast.error("Заполните поля с краснымы границами");
      setLoading(false);
    }
  }

  return (
    <div className="sign_in_page">
      <div className="SignInLogo">
        <div className="logo_boxzz">
          <div className="dsdsd">
            <img className="thisImg" src={LogoImg} alt="" />
          </div>{" "}
          <div className="sdsds">MBM-TEAM</div>
        </div>
      </div>
      <div className="partik">
        <div className="inputs_container">
          <input
            onInput={(val) => {
              setName(val.target.value);
            }}
            className="input"
            style={{
              borderBottom: `3px solid ${Border2}`,
              border: `3px solid ${Border2}`,
            }}
            type="text"
            placeholder="Введите имя..."
          />
          <input
            onInput={(val) => {
              setSurname(val.target.value);
            }}
            className="input"
            type="text"
            placeholder="Введите фамилию..."
          />
              <input
                type="text"
                onInput={(val) => {
                  setEmail(val.target.value);
                }}
                className="input"
                style={{
                  borderBottom: `3px solid ${Border2}`,
                  border: `3px solid ${Border2}`,
                }}
                placeholder="Введите электронную почту..."
              />
              <button className="ButtomYuborish2" onClick={removeTaskOpeningModal}>
                Отправить код на почту
          </button>
          <input
            onInput={(val) => {
              setPassword(val.target.value);
            }}
            className="input"
            style={{
              borderBottom: `3px solid ${Border2}`,
              border: `3px solid ${Border2}`,
            }}
            type="password"
            placeholder="Введите пароль..."
          />
          <input
            onInput={(val) => {
              setPassword2(val.target.value);
            }}
            className="input"
            style={{
              borderBottom: `3px solid ${Border}`,
              border: `3px solid ${Border}`,
            }}
            type="password"
            placeholder="Введите пароль ещё раз..."
          />
        </div>

        <div className="col-12 d-flex align-items-center justify-content-around">
          <button className="ButtomYuborish" onClick={Yuborish}>
            {Loading ? "Loading..." : "Зарегистрироваться"}
          </button>
        </div>
      </div>
      <Modal
				isVisible={isModalOpen}
				setIsVisible={setIsModalOpen}
			/>
    </div>
  );
}
