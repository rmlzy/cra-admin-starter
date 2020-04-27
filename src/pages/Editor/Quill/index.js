import React from "react";
import { Row, Col, Card } from "antd";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./style.less";

export default class QuillPage extends React.Component {
  state = {
    value: "",
  };

  setValue = (value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <div className="quill-page">
        <Row gutter={20}>
          <Col span={12}>
            <Card title="富文本编辑器">
              <ReactQuill theme="snow" value={value} onChange={this.setValue} />
            </Card>
          </Col>
          <Col span={12}>
            <Card title="预览">
              <div className="preview" dangerouslySetInnerHTML={{ __html: value }} />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
