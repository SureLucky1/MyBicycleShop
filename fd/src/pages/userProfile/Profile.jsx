import React, { useEffect, useContext, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { ExitToApp as LogoutIcon } from "@material-ui/icons";
import { Link } from "react-router-dom";
import UpdateProfile from "./UpdateProfile";
import "./Profile.css";
import ShowContext from "../../index";
import { useTranslation, Trans } from 'react-i18next';
import { useNavigate, useParams, useMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userAction";
import { useAlert } from "react-alert";
const ProfilePage = () => {
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [mynumber, setMyNumber] = useState('');
const [myGender, setMyGender] = useState('')
const [myName, setMyName] = useState('')
const [date, setDate] = useState('')
  const navigate = useNavigate();
  const {chooseRecord, setChooseRecord, login, setLogin} = useContext(ShowContext);
  const tt = localStorage.getItem('token');  // 讀取 useremail
  const contact = localStorage.getItem('contact');  // 讀取 useremail
  const mytoken = localStorage.getItem('token'); // 確保 token 已經保存在 localStorage 中
  
  const useremail = localStorage.getItem('useremail');  // 讀取 useremail
  useEffect(()=>{

    console.log(token)
      // 使用 GET 請求從 /userData 端點獲取用戶數據
      fetch(`http://localhost:5000/profile?token=${mytoken}&useremail=${useremail}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "ok") {
          console.log(data, "userData");
          console.log(email)
          // 在這裡處理用戶數據\
          setMyNumber(data.data.contactNumber);
        setToken(mytoken);
          setEmail(data.data.email);
          setMyName(data.data.name);
          setDate(data.data.date)
          setMyGender(data.data.gender);
        } else {
          alert(data.message); // 如果有錯誤，顯示錯誤信息
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    
    
  }, [useremail])
// useEffect(()=>{
//           // 獲取用戶的消費記錄
//           fetch(`http://localhost:5000/getP/${email}`, {
//             method: "GET",
//             crossDomain: true,
//             headers: {
//               "Content-Type": "application/json",
//               Accept: "application/json",
//               "Access-Control-Allow-Origin": "*",
//             },
//           })
//             .then((res) => res.json())
//             .then((data) => {
//               console.log(data, "userPurchaseRecord");
//               // 在這裡處理用戶的消費記錄
//               setChooseRecord(data);
//               setLogin(true)
//               navigate("/profile/");
              
//             });
// }, [login])
  function handleLogout(e) {
    e.preventDefault();

    // 清除存儲在 localStorage 中的用戶信息
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("loggedIn");
    window.localStorage.removeItem("useremail");
    window.localStorage.removeItem("cartItems");
    setChooseRecord([]);
    setLogin(false);
    // 導航到登入頁面（或任何其他適當的頁面）
    navigate("/login");
}

  function getInfo(e) {
    e.preventDefault();
          // 獲取用戶的消費記錄
          fetch(`http://localhost:5000/getP/${localStorage.getItem('useremail')}`, {
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
              navigate("/order/");
              //setEmail(data.userId);
            });
}

  // const alert = useAlert();
  // const dispatch = useDispatch();
  // const history = useNavigate();
  //  const { user, isAuthenticated } = useSelector((state) => state.userData);

  // const logoutHandler = () => {
  //   dispatch(logout());
  //   alert.success("Logged out successfully");
  //   history("/login");
  // };
  // useEffect(() => {
  //   // if user not logged in
  //   if (isAuthenticated === false) {
  //     history("/login");
  //   }
  // }, [history, isAuthenticated]);

  // const createdAt = (user) => {
  //   const createdAt = new Date(user.createdAt);
  //   const options = {
  //     year: "numeric",
  //     month: "2-digit",
  //     day: "2-digit",
  //     hour: "2-digit",
  //     minute: "2-digit",
  //     hour12: true,
  //     timeZone: "Asia/Kolkata",
  //   };

  //   const formatter = new Intl.DateTimeFormat("en-IN", options);
  //   const formattedDate = formatter.format(createdAt);
  //   return formattedDate;
  // };

  return (
    <div className="rootProfile">
      <div className="header-root">
        <Typography variant="h5" component="h1" className="headingProfile">
        {t("hi")}, <strong>{myName}</strong> !
        </Typography>

        <Typography variant="body2" className="greeting">
        {t("welcomeBack")}
        </Typography>
      </div>

      <div className="profileConatiner">
        <div className="leftCotainer">
          <h4
          
            className="profileHeadingLeft"
          >
           {t("overview")}
          </h4>
          <div className="profileSection">
            <Avatar
              
             
              className="profileAvatar"
            />
            <div className="leftDetails">
              <Typography className="profileText">
                <h5 className="profileSubHeading">{t("customerName")} : <strong>{myName}</strong></h5>
 
              </Typography>
              <Typography className="profileText">
                <h5 className="profileSubHeading">{t("email")} : <strong>{email}</strong></h5>
          
              </Typography>
              <Typography className="profileText">
                <h5 className="profileSubHeading">{t("registerationDay")} : <strong>{date}</strong></h5>{" "}

              </Typography>
            </div>
          </div>

          <div className="myOrder">
            <Typography variant="h4" component="h1" className="profileHeading">
            {t("shopRecord")}
            </Typography>
            <Link
            onClick={getInfo}
              to="/order/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button  variant="contained" className="ordersButton">
              {t("check")}
              </Button>
            </Link>
          </div>
        </div>

        <div className="rightConatiner">
          <div className="righHeadings">
            <Typography variant="h4" component="h1" className="profileHeading">
            {t("personalInfo")}
            </Typography>
            <Typography className="profileText2">
            {t("text2")}
            </Typography>
          </div>
          <div className="profileDetials">
            <div className="detials">
              <Typography
                variant="h4"
                component="h1"
                className="profileHeading"
                
              >
                {t("details")}
              </Typography>
              <Typography className="profileText"></Typography>
              <Typography className="profileText">{t("email")}: <strong>{email}</strong></Typography>
              <Typography className="profileText"> {t("Phone")}: <strong>{mynumber}</strong></Typography>
              <Typography className="profileText">{t("gender")}: <strong>{myGender}</strong></Typography>
            </div>

            <Link to="/profile/update" style={{ textDecoration: "none" }}>
              <Button variant="contained" className="profileButton">
              {t("edit")}
              </Button>
            </Link>
            <div className="detials">
              <Typography
                variant="h4"
                component="h1"
                className="profileHeading"
                style={{ marginTop: "1.5rem" }}
              >
                {t("loginDetail")}
              </Typography>
              <Typography className="profileSubHeading">{t("email")}</Typography>
              <Typography className="profileText"><strong>{email}</strong></Typography>

              <Typography
                className="profileSubHeading"
                style={{ marginTop: "10px" }}
              >
                {t("PW")}
              </Typography>
              <Typography className="profileSubHeading">
                *************
              </Typography>
            </div>
            <Link
              to={`/reset-password/${email}/${token}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button variant="contained" className="profileButton">
              {t("updatePW")}
              </Button>
            </Link>

            <div className="mangeAccount">
              <Typography
                variant="h4"
                component="h1"
                className="profileHeading"
              >
                {t("logoutAll")}
              </Typography>

              <p className="profileText3">
              {t("text")}
              </p>
            </div>
            <Button
              variant="contained"
              color="primary"
              className="profileButton"
              startIcon={<LogoutIcon />}
              onClick={handleLogout}
            >
              {t("logout")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfilePage;
