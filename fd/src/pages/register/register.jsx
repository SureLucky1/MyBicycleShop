import React, { useState } from 'react';
import TimezoneSelect from 'react-timezone-select';
import { Table, Button, Label , FormGroup, Input, Col, Form, Row  } from 'reactstrap';
import './register.css'
const Register = () => {
  const [date, setDate] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [secretKey, setSecretKey] = useState("");
    const [selectedTimezone, setSelectedTimezone] = useState(
        Intl.DateTimeFormat().resolvedOptions().timeZone
      );
  const handleSubmit = (e) => {
      e.preventDefault();

      //console.log(fname, lname, email, password);
      fetch("http://localhost:5000/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          selectedTimezone,
          date,
          email,
          contactNumber,
          password,
          userType,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status == "ok") {
            alert("Registration Successful");
          } else {
            alert("Something went wrong");
          }
        });
    
  };

  return (
    <div>
        <Form >
        <h4>新用戶註冊</h4>
    <Row>
      <Col md={6}>
        <FormGroup >
        <TimezoneSelect value={selectedTimezone} onChange={setSelectedTimezone} />


          <Input
            id="exampleEmail"
            name="email"
            placeholder="電郵"
            type="email"
            onChange={(e) => setEmail(e.target.value)} />
                    <Input
            id="examplePassword"
            name="password"
            placeholder="密碼"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
                    <Input
            id="examplePassword"
            name="password"
            placeholder="確認密碼"
            type="password"
          />
                    <Input
            id="examplePassword"
            name="password"
            placeholder="氐"
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />
                    <Input
            id="examplePassword"
            name="password"
            placeholder="聯絡號碼"
            type="text"
            onChange={(e) => setContactNumber(e.target.value)}
          />
        </FormGroup>
      </Col>
    </Row>
    <Button type="submit" onClick={handleSubmit} style={{backgroundColor: "rgb(170, 170, 170)", color: "white"}}>
      新用戶註冊
    </Button>
    <Button style={{backgroundColor: "white", color: "rgb(170, 170, 170)", textDecoration: "underline"}}>
      返回登入頁面
    </Button>
  </Form>
  </div>
  )
}

export default Register