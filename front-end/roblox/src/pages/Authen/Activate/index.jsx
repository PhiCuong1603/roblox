import { React, useEffect, useState } from "react";
import "../style.css";
import { activate, reset } from "../../../features/auth/authSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { notification, Spin } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";

const Activate = () => {
  const { uid, token } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [spinning, setSpinning] = useState(false);
  const { isError, isSuccess, message } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSpinning(true); // Khi click vào nút xác thực, hiển thị Spin

    const userData = {
      uid,
      token,
    };
    dispatch(activate(userData));
  };

  useEffect(() => {
    if (isError) {
      notification.error({
        message: "Thông báo",
        description: message,
        placement: "bottomRight",
      });
      setSpinning(false);
    }

    if (isSuccess) {
      notification.success({
        message: "Thông báo",
        description: "Tài khoản của bạn đã được xác thực!",
        placement: "bottomRight",
      });
      setSpinning(false);
      navigate("/login");
    }

    dispatch(reset());
  }, [isError, isSuccess, navigate, dispatch]);

  return (
    <div>
      <form className="sign-box">
        <h2>
          Xác thực tài khoản <CheckCircleOutlined style={{ color: "green" }} />
        </h2>
        <button type="submit" onClick={handleSubmit}>
          Xác thực tài khoản
        </button>
      </form>
      {spinning && <Spin spinning={true} fullscreen />}
      {/* Hiển thị Spin khi isLoading true */}
    </div>
  );
};

export default Activate;
