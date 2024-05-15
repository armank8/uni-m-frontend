"use client";

import { Button, Col, Row } from "antd";
import loginImage from '../../assets/login.svg';
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";

type FormValues = {
  id: string;
  password: string;
}

const LoginPage = () => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    try {
      console.log(data);
    } catch (error) {

    }
  }
  return (
    <Row justify="center" style={{ minHeight: "100vh" }} align="middle">
      <Col sm={12} md={16} lg={10}>
        <Image src={loginImage} width={500} height={500}></Image>
      </Col>
      <Col sm={12} md={8} lg={8}>
        <h1 style={{margin:"15px 0px"}}>FIrst login your account</h1>
        <div>
          <Form submitHandler={onSubmit}>
            <div  style={{margin:"15px 0px"}}>
              <FormInput name="id" type="text" size="large" label="User Id"></FormInput>
            </div>
            <div>
              <FormInput name="password" type="password" size="large" label="User Password"></FormInput>
            </div>
            <Button type="primary" htmlType="submit">Login</Button>
          </Form>
        </div>
      </Col>

    </Row>
  )
}

export default LoginPage