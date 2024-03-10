import React, { useState, useContext } from 'react';
import "./login.css"
import ProfilePage from "../userProfile/Profile"
import ShowContext from '../../index';
import { useNavigate, Link } from 'react-router-dom';
import { Table, Button, Label , FormGroup, Input, Col, Form, Row  } from 'reactstrap';
const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {chooseRecord, setChooseRecord, login, setLogin} = useContext(ShowContext);
const navigate = useNavigate()
  function handleSubmit(e) {
    e.preventDefault();

    console.log(email, password);
    fetch("http://localhost:5000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
        //contactNumber,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status == "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);
          window.localStorage.setItem("useremail", email);  // 保存 useremail 到 localStorage
          //window.localStorage.setItem("contact", contactNumber);  // 保存 useremail 到 localStorage
          // 保存 useremail 到 localStorage

          // 獲取用戶的消費記錄
          fetch(`http://localhost:5000/getP/${email}`, {
            method: "GET",
            crossDomain: true,
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data, "userPurchaseRecord");
              // 在這裡處理用戶的消費記錄
              setChooseRecord(data);
              setLogin(true)
              navigate("/profile/");
            });

          
        }
      });
  }
  return (
    <>
    {login?  <ProfilePage />  : <div className='form'>        
    <Form>
    <h4>登入商店</h4>
<Row>
  <Col md={6}>
    <FormGroup>
      <Input
        id="exampleEmail"
        name="email"
        placeholder="電郵"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
                <Input
        id="examplePassword"
        name="password"
        placeholder="密碼"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
    </FormGroup>
    <FormGroup>
                <Input
        id="examplePassword"
        name="check"
        placeholder="聯絡號碼"
        type="checkbox"
      />
          <Label for="check">
          自動登入
    </Label>
    </FormGroup>
  </Col>
</Row>
<Button onClick={handleSubmit}style={{backgroundColor: "black", color: "rgb(170, 170, 170)", }}>
登入商店
</Button>
<Button style={{backgroundColor: "rgb(170, 170, 170)", color: "white"}}>
<Link
                    to="/register/"
                    style={{ textDecoration: "none", color: "white" }}
                  >新用戶註冊</Link>
</Button>
</Form>
<div className="forgetPW">
<span>忘記密碼?</span>
<span>前往管理員登入</span>
</div>
</div>}

</>
  )
}

export default Login