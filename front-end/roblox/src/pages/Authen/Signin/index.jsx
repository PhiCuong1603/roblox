import "../style.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, reset, getUserInfo } from "../../../features/auth/authSlice";
import { notification, Spin, Form, Input, Button } from "antd";

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  /*------------------------------------------------------------------------------------*/
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    const userData = {
      username,
      password,
    };
    dispatch(login(userData));
  };

  const handelRegister = () => {
    navigate("/register");
  };

  const handelReset = () => {
    navigate("/reset-password");
  };

  useEffect(() => {
    if (isError) {
      notification.error({
        message: "Thông báo",
        description: message,
        placement: "bottomRight",
      });
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
    dispatch(getUserInfo());
  }, [isError, isSuccess, user, navigate, dispatch]);

  return (
    <div>
      <Form className="sign-box" onFinish={handleSubmit} autoComplete="off">
        <div className="lableTitle">ĐĂNG NHẬP TÀI KHOẢN</div>
        <div className="lableForm">Tên tài khoản</div>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Tài khoản bắt buộc nhập!",
            },
          ]}
        >
          <Input
            name="username"
            type="text"
            placeholder="Nhập Tài Khoản"
            onChange={handleChange}
            value={username}
          />
        </Form.Item>
        <div className="lableForm">Mật khẩu</div>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Mật khẩu bắt buộc nhập!",
            },
          ]}
        >
          <Input.Password
            name="password"
            type="Password"
            onChange={handleChange}
            value={password}
            placeholder="Nhập mật Khẩu"
          />
        </Form.Item>

        <div className="reset ">
          <div onClick={handelReset}>Quên mật khẩu?</div>
        </div>

        <Button type="primary" className="button" htmlType="submit">
          Đăng nhập
        </Button>

        <div className="mesaageBottom">
          <div className="msgNotify">Bạn chưa có tài khoản?</div>
          <div className="msgSign" onClick={handelRegister}>
            Tạo tài khoản!
          </div>
        </div>
      </Form>
      {isLoading && <Spin spinning={true} fullscreen />}
    </div>
  );
};

export default SignIn;
