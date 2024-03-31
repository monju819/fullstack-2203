import React, { useEffect } from "react";
import { Button, Form, Input } from "antd";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

// otpvirification
const OtpVerification = () => {
  let navigate = useNavigate();
  let param = useParams();
  console.log(param.email);

  useEffect(() => {
    async function otpverification() {
      let data = await axios.post(
        "http://localhost:8000/api/v1/auth/otpverification",
        {
          email: param.email,
          otp: param.otp,
        }
      );
      console.log(data);
      navigate("/login");
    }
    otpverification();
  }, []);

  // const onFinish = async (values) => {
  //   console.log("Success:", values);
  //   let data = await axios.post(
  //     "http://localhost:8000/api/v1/auth/otpverification",
  //     {
  //       email: param.email,
  //       otp: param.otp,
  //     }
  //   );
  //   console.log(data);
  // };
  // const onFinishFailed = (errorInfo) => {
  //   console.log("Failed:", errorInfo);
  // };
  return (
    <h1>Loading.......</h1>
    // <Form
    //   name="basic"
    //   labelCol={{
    //     span: 8,
    //   }}
    //   wrapperCol={{
    //     span: 16,
    //   }}
    //   style={{
    //     maxWidth: 600,
    //   }}
    //   initialValues={{
    //     remember: true,
    //   }}
    //   onFinish={onFinish}
    //   onFinishFailed={onFinishFailed}
    //   autoComplete="off"
    // >
    //   <Form.Item
    //     label="OTP"
    //     name="otp"
    //     rules={[
    //       {
    //         required: true,
    //         message: "Please Enter valid otp!!",
    //       },
    //     ]}
    //   >
    //     <Input />
    //   </Form.Item>

    //   <Form.Item
    //     wrapperCol={{
    //       offset: 8,
    //       span: 16,
    //     }}
    //   >
    //     <Button type="primary" htmlType="submit">
    //       Submit
    //     </Button>
    //   </Form.Item>
    // </Form>
  );
};

export default OtpVerification;
