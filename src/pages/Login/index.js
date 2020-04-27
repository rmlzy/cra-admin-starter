import React from "react";
import { Row, Col, Form, Input, Button, Checkbox } from "antd";
import _ from "lodash";
import { LazyLoadImage } from "react-lazy-load-image-component";
import bg1 from "../../images/login-bg-1.jpg";
import bg2 from "../../images/login-bg-2.jpg";
import bg3 from "../../images/login-bg-3.jpg";
import bg4 from "../../images/login-bg-4.jpg";
import "./style.less";

class Login extends React.Component {
  state = {
    background: "",
  };

  componentDidMount() {
    this.setRandomBg();
  }

  setRandomBg = () => {
    const bgs = [bg1, bg2, bg3, bg4];
    const random = _.random(0, 3, false);
    this.setState({
      background: bgs[random],
    });
  };

  onFinish = (values) => {
    console.log("Success:", values);
    this.props.history.push("/");
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  render() {
    const { background } = this.state;
    return (
      <div className="login" style={{ backgroundImage: background }}>
        <LazyLoadImage src={background} className="login__bg" />
        <Row>
          <Col xs={0} sm={12} md={10} lg={16} />
          <Col xs={24} sm={12} md={14} lg={8}>
            <div className="login__form">
              <h2 className="login__form__title">登录</h2>
              <p className="login__form__desc">CRA Admin 是一个基于 CRA 的中后台系统</p>
              <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
              >
                <Form.Item name="username">
                  <Input placeholder="请输入用户名" />
                </Form.Item>

                <Form.Item name="password">
                  <Input.Password placeholder="请输入密码" />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked">
                  <Checkbox>记住我七天</Checkbox>
                </Form.Item>

                <Form.Item>
                  <Button type="primary" block htmlType="submit">
                    登录
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Login;
