import React from "react";
import "./style.css";
import { Dropdown } from "antd";
import {
  CaretDownOutlined,
  LoginOutlined,
  UserOutlined,
} from "@ant-design/icons";
import useUserLogin from "../../hooks/useUserLogin";
import { logout, reset } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useUserLogin();

  const handleLogOut = () => {
    dispatch(logout());
    navigate("/login");
  };

  const items = isLogin
    ? [
        {
          key: "logout",
          label: (
            <a rel="noopener noreferrer" onClick={handleLogOut}>
              Đăng xuất
            </a>
          ),
        },
      ]
    : [
        {
          key: "login",
          label: (
            <a rel="noopener noreferrer" href="/login">
              Đăng nhập
            </a>
          ),
        },
        {
          key: "register",
          label: (
            <a rel="noopener noreferrer" href="/register">
              Đăng ký
            </a>
          ),
        },
      ];

  return (
    <div>
      <div className="header-nav">
        <div className="header-navbar">
          <div className="header-nav-logo">
            <a href="/">Logo</a>
          </div>
          <div className="header-nav-items">
            <ul>
              <li>
                <a href="/"> TRANG CHỦ </a>
              </li>
              <li>
                <a href="#"> NẠP ATM - VÍ </a>
              </li>
              <li>
                <a href="#"> HƯỚNG DẪN </a>
              </li>
            </ul>
          </div>
          <Dropdown menu={{ items }} placement="bottomRight">
            <div>
              {isLogin ? (
                <div className="sign-in-button">
                  <UserOutlined />
                  <div className="sign-in-icon">
                    <CaretDownOutlined />
                  </div>
                </div>
              ) : (
                <div className="sign-in-button">
                  <UserOutlined />
                  Đăng ký/ Đăng nhập
                  <div className="sign-in-icon">
                    <CaretDownOutlined />
                  </div>
                </div>
              )}
            </div>
          </Dropdown>
          <div id="hamburger-menu">&#9776;</div>
        </div>
      </div>

      {/* <div id="mobile-menu">
        <div className="mobile-header-nav-items">
          <ul>
            <li>
              <a href="#"> Home </a>
            </li>
            <li>
              <a href="#"> Services </a>
            </li>
            <li>
              <a href="#"> About </a>
            </li>
            <li>
              <a href="#"> Contact </a>
            </li>
            <li>
              <a href="#"> Home </a>
            </li>
          </ul>
        </div>
        <div className="mobile-header-nav-button">
          <div className="anim-layer"></div>
          <a href="#">Sign Up</a>
        </div>
        <div id="hamburger-cross">&#10006;</div>
      </div> */}
    </div>
  );
};

export default Header;
