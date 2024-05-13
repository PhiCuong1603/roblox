import "../style.css";
import { useState, useEffect } from "react";
import { notification, Spin, Form, Input, Button, Tooltip } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register, reset } from "../../../features/auth/authSlice";
import { InfoCircleOutlined } from "@ant-design/icons";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    re_password: "",
  });
  // const [form] = Form.useForm();
  const { username, email, password, re_password } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const colors = ["rgb(75 105 239)"];

  const renderRulesPassword = () => {
    return (
      <div>
        <p>Mật khẩu phải chứa ít nhất 8 ký tự.</p>
        <p>Không dùng các mật khẩu phổ biến.</p>
        <p>Mật khẩu không chứa ký tự chỉ là số</p>
      </div>
    );
  };

  const validateMessages = {
    types: {
      email: "${name} phải có định dạng @gmail.com!",
    },
  };

  /*------------------------------------------------------------------------------------*/
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handelLogin = () => {
    navigate("/login");
  };

  // Xử lý khi người dùng nhấn nút đăng ký
  const handleSubmit = async () => {
    // Nếu mọi thứ hợp lệ, gửi yêu cầu đăng ký đến server
    const userData = {
      username,
      email,
      password,
      re_password,
    };

    dispatch(register(userData));
  };

  useEffect(() => {
    if (isError) {
      notification.error({
        message: "Thông báo",
        description: message,
        placement: "bottomRight",
      });
    }

    if (isSuccess) {
      navigate("/");
      notification.success({
        message: "Thông báo",
        description: "Email xác thực được gửi đến bạn. Vui lòng kiểm tra email",
        placement: "bottomRight",
        duration: 10,
      });
    }

    dispatch(reset());
  }, [isError, isSuccess, navigate, dispatch]);

  return (
    <div>
      <Form
        className="sign-box"
        onFinish={handleSubmit}
        autoComplete="off"
        // form={form}
        validateMessages={validateMessages}
      >
        <div className="lableTitle">ĐĂNG KÝ TÀI KHOẢN</div>
        <div className="lableForm">Tên đăng nhập</div>
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
        <div className="lableForm">Email</div>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Email bắt buộc nhập!",
            },
            {
              type: "email",
            },
          ]}
        >
          <Input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            value={email}
          />
        </Form.Item>
        <div className="lableForm">
          Nhập mật khẩu
          <Tooltip title={renderRulesPassword()} color={colors}>
            <InfoCircleOutlined />
          </Tooltip>
        </div>
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
            placeholder="Nhập lại mật Khẩu"
          />
        </Form.Item>

        <div className="lableForm">Nhập lại mật khẩu</div>
        <Form.Item
          name="re_password"
          rules={[
            {
              required: true,
              message: "Mật khẩu bắt buộc nhập!",
            },
          ]}
        >
          <Input.Password
            name="re_password"
            type="Password"
            onChange={handleChange}
            value={re_password}
            placeholder="Nhập lại mật Khẩu"
          />
        </Form.Item>

        {/* <Form.Item className="next-button" label="" shouldUpdate>
          {() => {
            const { username, email, password, re_password } =
              form?.getFieldsValue();
            const disabled = !username || !email || !password || !re_password;
            return (
              <Button type="primary" disabled={disabled} htmlType="submit" className="button">
                Đăng ký
              </Button>
            );
          }}
        </Form.Item> */}

        <Button type="primary" className="button" htmlType="submit">
          Đăng ký
        </Button>

        <div className="mesaageBottom">
          <div className="msgNotify">Bạn đã có tài khoản?</div>
          <div className="msgSign" onClick={handelLogin}>
            Đăng nhập!
          </div>
        </div>
      </Form>

      {isLoading && <Spin spinning={true} fullscreen />}
    </div>
  );
};

export default SignUp;
