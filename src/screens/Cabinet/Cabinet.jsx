import React, { useState } from "react";
import "./Cabinet.css";
import { HiOutlineHome, HiOutlineAcademicCap } from "react-icons/hi";
import { BiAddToQueue, BiEdit } from "react-icons/bi";
import {
  AiOutlineSetting,
  AiOutlineEyeInvisible,
  AiOutlineEye,
} from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { BsPlusCircle } from 'react-icons/bs'

export default function Cabinet() {
  const [OZgaruvchi, setOZgaruvchi] = useState("Cabinet__LeftNavbar__Settings");
  const [Password, setPassword] = useState("none");
  const [Password2, setPassword2] = useState("inline");
  const [Password3, setPassword3] = useState("password");

  const selector = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [DataPages, setDataPages] = useState("inline");
  const [CoursesPages, setCoursesPages] = useState("none");
  const [AdditionsPages, setAdditionsPages] = useState("none");
  const [SettingsPages, setSettingsPages] = useState("none");

  const [Name, setName] = useState(null);
  const [SurName, setSurName] = useState(null);
  const [Email, setEmail] = useState(null);
  const [City, setCity] = useState();
  const [PassowrdPut, setPassowrdPut] = useState(null);

  function Open() {
    setPassword2("none");
    setPassword("inline");
    setPassword3("text");
  }

  function Closed() {
    setPassword2("inline");
    setPassword("none");
    setPassword3("password");
  }

  function DataOn() {
    setDataPages("inline");
    setCoursesPages("none");
    setAdditionsPages("none");
    setSettingsPages("none");
  }

  function CoursesOn() {
    setDataPages("none");
    setCoursesPages("inline");
    setAdditionsPages("none");
    setSettingsPages("none");
  }

  function AdditionsOn() {
    setDataPages("none");
    setCoursesPages("none");
    setAdditionsPages("inline");
    setSettingsPages("none");
  }

  function SettingsOn() {
    setDataPages("none");
    setCoursesPages("none");
    setAdditionsPages("none");
    setSettingsPages("inline");
  }

  function handleChange(params) {
    setCity(params);
  }

  function DeleteAkk() {
    axios.delete(`https://63905b3f65ff41831110b776.mockapi.io/api/users/${selector.id}`)
        localStorage.removeItem("User");
        navigate("/");
        document.location.reload();
    
  }


  function Yuborish() {
    if (Name != null) {
      axios
        .put(
          `https://63905b3f65ff41831110b776.mockapi.io/api/users/${selector.id}`,
          {
            name: Name,
          }
        )
        .then((res) => {
          console.log(res.data);
          localStorage.setItem("User", JSON.stringify(res.data));
        });
      toast.success("Изменение успешно завершено");
    }

    if (SurName != null) {
      axios
        .put(
          `https://63905b3f65ff41831110b776.mockapi.io/api/users/${selector.id}`,
          {
            surname: SurName,
          }
        )
        .then((res) => {
          console.log(res.data);
          localStorage.setItem("User", JSON.stringify(res.data));
        });
      toast.success("Изменение успешно завершено");
    }

    if (Email != null) {
      axios
        .put(
          `https://63905b3f65ff41831110b776.mockapi.io/api/users/${selector.id}`,
          {
            email: Email,
          }
        )
        .then((res) => {
          console.log(res.data);
          localStorage.setItem("User", JSON.stringify(res.data));
        });
      toast.success("Изменение успешно завершено");
    }

    if (PassowrdPut != null) {
      axios
        .put(
          `https://63905b3f65ff41831110b776.mockapi.io/api/users/${selector.id}`,
          {
            password: PassowrdPut,
          }
        )
        .then((res) => {
          console.log(res.data);
          localStorage.setItem("User", JSON.stringify(res.data));
        });
      toast.success("Изменение успешно завершено");
    }
    if (City != null) {
      axios
        .put(
          `https://63905b3f65ff41831110b776.mockapi.io/api/users/${selector.id}`,
          {
            city: City,
          }
        )
        .then((res) => {
          console.log(res.data);
          localStorage.setItem("User", JSON.stringify(res.data));
        });
      toast.success("Изменение успешно завершено");
    }
    // else {
    //   toast.error("Вы ничего не изменили");
    //   console.log("yoq ishlamadi");
    // }
  }

  function Exit() {
    localStorage.removeItem("User");
    navigate("/");
    document.location.reload();
  }

  return (
    <div className="Cabinet">
      <div className="Cabinet__LeftNavbar">
        <h1 className="text_profile">Профиль</h1>
        <div
          onClick={DataOn}
          className={
            DataPages == "inline"
              ? "Cabinet__LeftNavbar__Data__Active"
              : "Cabinet__LeftNavbar__Data"
          }
        >
          <HiOutlineHome />
          <p className="Text_NavBar">Данные</p>
        </div>
        <div
          onClick={CoursesOn}
          className={
            CoursesPages == "inline"
              ? "Cabinet__LeftNavbar__Courses__Active"
              : "Cabinet__LeftNavbar__Courses"
          }
        >
          <HiOutlineAcademicCap />
          <p className="Text_NavBar">Курсы</p>
        </div>
        <div
          onClick={AdditionsOn}
          className={
            AdditionsPages == "inline"
              ? "Cabinet__LeftNavbar__Additions__Active"
              : "Cabinet__LeftNavbar__Additions"
          }
        >
          <BiAddToQueue />
          <p className="Text_NavBar">Добавления</p>
        </div>
        <div
          onClick={SettingsOn}
          className={
            SettingsPages == "inline"
              ? "Cabinet__LeftNavbar__Settings__Active"
              : "Cabinet__LeftNavbar__Settings"
          }
        >
          <AiOutlineSetting />
          <p className="Text_NavBar">Настройки</p>
        </div>
        <div className="Cabinet__LeftNavbar__line"></div>
        <h3 onClick={Exit} style={{ cursor: "pointer" }} className="leave_room">
          Выход
        </h3>
      </div>

      <div className="Cabinet__RightContent">
        <div
          style={{ display: `${DataPages}` }}
          className="Cabinet__RightContent__Data_Dani"
        >
          <div className="Cabinet__RightContent__Data_Dani__Img">
            <FaRegUserCircle style={{ fontSize: "100px" }} />
            <h1>
              {selector.name} <br /> {selector.surname}
            </h1>
          </div>
          <div className="Cabinet__RightContent__Data_Dani__Input">
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
            <div
              style={{
                position: "absolute",
                top: "175px",
                right: "110px",
                fontSize: "18px",
                display: `${Password2}`,
              }}
            >
              <AiOutlineEyeInvisible onClick={Open} />
            </div>
            <div
              style={{
                position: "absolute",
                top: "175px",
                right: "110px",
                fontSize: "18px",
                display: `${Password}`,
              }}
            >
              <AiOutlineEye onClick={Closed} />
            </div>
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

        <div style={{ display: `${CoursesPages}` }}>salom</div>

        <div style={{ display: `${AdditionsPages}` }}>
          <h1 style={{ marginLeft: "60px" }}>Добавить курсы:</h1>
          <div className="Course_Add">
            <BsPlusCircle style={{ fontSize: "130px", cursor: "pointer" }} />
          </div>
          <div className="Course_Add">
            <BsPlusCircle style={{ fontSize: "130px", cursor: "pointer" }} />
          </div>
          <div className="Course_Add">
            <BsPlusCircle style={{ fontSize: "130px", cursor: "pointer" }} />
          </div>
        </div>

        <div classnmae="settings_pages" style={{ display: `${SettingsPages}`, boxSizing: "border-box" }}>
          <h2 style={{ marginLeft: "50px" }}>Настройки</h2>
          <TextField
            id="standard-read-only-input"
            sx={{ width: "400px", marginLeft: "250px", marginTop: "0px" }}
            label="Имя"
            defaultValue={selector.name}
            onInput={(val) => {
              setName(val.target.value);
            }}
            variant="standard"
          />
          <BiEdit
            style={{
              position: "absolute",
              top: "140",
              left: "930px",
              fontSize: "25px",
            }}
          />
          <br />
          <TextField
            id="standard-read-only-input"
            sx={{ width: "400px", marginLeft: "250px", marginTop: "50px" }}
            label="Фамилия"
            defaultValue={selector.surname}
            onInput={(val) => {
              setSurName(val.target.value);
            }}
            variant="standard"
          />
          <BiEdit
            style={{
              position: "absolute",
              top: "240",
              left: "930px",
              fontSize: "25px",
            }}
          />
          <br />
          <TextField
            id="standard-read-only-input"
            sx={{ width: "400px", marginLeft: "250px", marginTop: "50px" }}
            label="Почта"
            defaultValue={selector.email}
            onInput={(val) => {
              setEmail(val.target.value);
            }}
            variant="standard"
          />
          <BiEdit
            style={{
              position: "absolute",
              top: "340",
              left: "930px",
              fontSize: "25px",
            }}
          />
          <br />
          <select
            onChange={(event) => handleChange(event.target.value)}
            name=""
            id=""
            style={{
              width: "400px",
              marginLeft: "250px",
              marginTop: "50px",
              border: "none",
              height: "50px",
              borderBottom: "1px solid black",
              outline: "none",
            }}
          >
            <option disabled selected value={selector.city}>
              {selector.city}
            </option>
            <option value="Ташкент">Ташкент</option>
            <option value="Самарканд">Самарканд</option>
            <option value="Бухара">Бухара</option>
            <option value="Наманган">Наманган</option>
            <option value="Фергана">Фергана</option>
            <option value="Андижан">Андижан</option>
            <option value="Гулистан">Гулистан</option>
            <option value="Джизак">Джизак</option>
            <option value="Термез">Термез</option>
            <option value="Навои">Навои</option>
            <option value="Ургенч">Ургенч</option>
            <option value="Нукус">Нукус</option>
            <option value="Другой город">Другой город</option>
          </select>
          <br />
          <TextField
            id="standard-read-only-input"
            sx={{ width: "400px", marginLeft: "250px", marginTop: "50px" }}
            label="Пароль"
            defaultValue={selector.password}
            onInput={(val) => {
              setPassowrdPut(val.target.value);
            }}
            variant="standard"
            type={Password3}
          />
          <BiEdit
            style={{
              position: "absolute",
              top: "538",
              left: "930px",
              fontSize: "25px",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "530px",
              left: "900px",
              fontSize: "23px",
              display: `${Password2}`,
            }}
          >
            <AiOutlineEyeInvisible onClick={Open} />
          </div>
          <div
            style={{
              position: "absolute",
              top: "530px",
              left: "900px",
              fontSize: "23px",
              display: `${Password}`,
            }}
          >
            <AiOutlineEye onClick={Closed} />
          </div>
          <br />
          <div className="div_Btn_Syn">
            <button onClick={Yuborish} className="input_change_syn">
              Сохранить
            </button>
            <button onClick={DeleteAkk} className="input_change_syn_red">
              Удалить Аккаунт
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
