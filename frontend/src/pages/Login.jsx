import React from "react";
import { Button, Form, Input } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { activeUser } from "../slice/userSlice";
const Login = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch;
  const onFinish = async (values) => {
    console.log("Success:", values);

    let data = await axios.post("http://localhost:8000/api/v1/auth/login", {
      email: "sajidhasan819@gmail.com",
      password: "123456789",
    });
    console.log(data);
    if (!data.data.isEmailverified) {
      console.log("plase virify your email");
    } else if (data.data.role == "user") {
      console.log("you do not have permission to enter");
    } else {
      localStorage.setItem("user", JSON.stringify(data.data));
      dispatch(activeUser(data.data));
      navigate("/home");
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        // rules={[
        //   {
        //     required: true,
        //     message: "Please input your username!",
        //   },
        // ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        // rules={[
        //   {
        //     required: true,
        //     message: "Please input your password!",
        //   },
        // ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
