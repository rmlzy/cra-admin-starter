import React from "react";
import { Form, Card, Input, DatePicker, Button } from "antd";

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const BasicFormPage = (props) => {
  const { submitting } = props;
  const [form] = Form.useForm();
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 7 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 12 },
      md: { span: 10 },
    },
  };
  const submitFormLayout = {
    wrapperCol: {
      xs: { span: 24, offset: 0 },
      sm: { span: 10, offset: 7 },
    },
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Card>
        <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <Form.Item {...formItemLayout} label="标题" name="field1" rules={[{ required: true, message: "必填项" }]}>
            <Input placeholder="给目标起个名字" />
          </Form.Item>
          <Form.Item {...formItemLayout} label="起止日期" name="field2" rules={[{ required: true, message: "必填项" }]}>
            <RangePicker style={{ width: "100%" }} placeholder={["开始日期", "结束日期"]} />
          </Form.Item>
          <Form.Item {...formItemLayout} label="目标描述" name="field4" rules={[{ required: true, message: "必填项" }]}>
            <TextArea style={{ minHeight: 32 }} placeholder="请输入你的阶段性工作目标" rows={4} />
          </Form.Item>
          <Form.Item {...formItemLayout} label="衡量标准" name="field5" rules={[{ required: true, message: "必填项" }]}>
            <TextArea style={{ minHeight: 32 }} placeholder="请输入衡量标准" rows={4} />
          </Form.Item>
          <Form.Item {...formItemLayout} label="客户" name="field6">
            <Input placeholder="请描述你的客户" />
          </Form.Item>
          <Form.Item {...submitFormLayout} style={{ marginTop: 32 }}>
            <Button type="primary" htmlType="submit" loading={submitting}>
              提交
            </Button>
            <Button style={{ marginLeft: 8 }}>取消</Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default BasicFormPage;
