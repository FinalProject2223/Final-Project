import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SingInCss.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import LogoImg from "../Img/mb-team_logo.png";
import { useDispatch, useSelector } from "react-redux";
import { authTrueFetching } from "../../redux/actions";

export default function SingIn() {
  // const [auth, setAuth] = useState(false)
  const [Email, setEmail] = useState(null);
  const [Password, setPassword] = useState(null);
  const [Loading, setLoading] = useState(false);
  const naviget = useNavigate();
  const dispatch = useDispatch();
  
	// const userAuth = useSelector((state) => state.auth.userAuth);

  function Tekshirish() {
    setLoading(true);
    // console.log(userAuth + "=> mbm");
    axios.get("https://63905b3f65ff41831110b776.mockapi.io/api/users")
      .then((res) => {
        let result = res.data.find(
          (item) => item.password == Password && item.email == Email
        );
        if (result) {
          toast.success("Поздравляю вы вошли в профиль");
          naviget("/");
          document.location.reload()
          setLoading(false);
    // dispatch(authTrueFetching());
     localStorage.setItem("User" , JSON.stringify(result))
        } else {
          toast.error("Данная почта или пароль отсутствует");
          // toast.loading("Bunday Ism va Parol Yoq")
          setLoading(false);
        }
      });
  }

  return (
    <div className="BackgroundImg">
      <div className="SignInLogo">
        <div className="logo_boxzz">
          <div className="dsdsd">
            <img className="thisImg" src={LogoImg} alt="" />
          </div>{" "}
          <div className="sdsds">MBM-TEAM</div>
        </div>
      </div>
      <div className="SingInDiv">
        <div className="InputDiv">
          <input
            className="SingIn_Input"
            onInput={(val) => {
              setEmail(val.target.value);
            }}
            type="text"
            placeholder="Введите электронную почту..."
          />
          <input
            className="SingIn_Input"
            onInput={(val) => {
              setPassword(val.target.value);
            }}
            type="password"
            placeholder="Введите пароль..."
          />
          <h3 className="InputDiv_H3">
            <Link to={"/LoginPages"}>Забыли свой пароль?</Link>
          </h3>
          <div className="signInButton">
            <button onClick={Tekshirish} className="InputDiv_ButtomYuborish">
              {Loading ? "Загрузка..." : "Войти в профиль"}
            </button>
            <h3 className="InputDiv_H3">
              {" "}
              Еще не прошли регистрацию? <br />
              <Link to={"/LoginPages"}>Зарегистрироваться</Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
