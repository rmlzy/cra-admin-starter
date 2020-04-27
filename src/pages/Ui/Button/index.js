import React from "react";
import { Card, Button, Row, Col, Tooltip, Radio, Menu, Dropdown } from "antd";
import { SearchOutlined, DownloadOutlined, PoweroffOutlined, DownOutlined } from "@ant-design/icons";
import "./style.less";

export default class ButtonPage extends React.Component {
  state = {
    size: "large",
    loadings: [],
  };

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  };

  enterLoading = (index) => {
    const newLoadings = [...this.state.loadings];
    newLoadings[index] = true;
    this.setState({
      loadings: newLoadings,
    });
    setTimeout(() => {
      newLoadings[index] = false;
      this.setState({ loadings: newLoadings });
    }, 6000);
  };

  handleMenuClick = (e) => {
    console.log("click", e);
  };

  render() {
    const { size, loadings } = this.state;
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">1st item</Menu.Item>
        <Menu.Item key="2">2nd item</Menu.Item>
        <Menu.Item key="3">3rd item</Menu.Item>
      </Menu>
    );
    return (
      <div className="button-page">
        <Row gutter={20}>
          <Col span={12}>
            <Card title="按钮类型">
              <p>按钮有四种类型：主按钮、次按钮、虚线按钮和链接按钮。主按钮在同一个操作区域最多出现一次。</p>
              <Button type="primary">Primary</Button>
              <Button>Default</Button>
              <Button type="dashed">Dashed</Button>
              <Button type="link">Link</Button>
            </Card>

            <Card title="按钮尺寸">
              <p>按钮有大、中、小三种尺寸。</p>
              <p>通过设置 size 为 large small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中。</p>
              <Radio.Group value={size} onChange={this.handleSizeChange}>
                <Radio.Button value="large">Large</Radio.Button>
                <Radio.Button value="default">Default</Radio.Button>
                <Radio.Button value="small">Small</Radio.Button>
              </Radio.Group>
              <br />
              <br />
              <Button type="primary" size={size}>
                Primary
              </Button>
              <Button size={size}>Default</Button>
              <Button type="dashed" size={size}>
                Dashed
              </Button>
              <br />
              <Button type="link" size={size}>
                Link
              </Button>
              <br />
              <Button type="primary" icon={<DownloadOutlined />} size={size} />
              <Button type="primary" shape="circle" icon={<DownloadOutlined />} size={size} />
              <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size} />
              <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size}>
                Download
              </Button>
              <Button type="primary" icon={<DownloadOutlined />} size={size}>
                Download
              </Button>
            </Card>

            <Card title="加载中状态">
              <p>添加 loading 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。</p>
              <Button type="primary" loading>
                Loading
              </Button>
              <Button type="primary" size="small" loading>
                Loading
              </Button>
              <Button type="primary" icon={<PoweroffOutlined />} loading />
              <br />
              <Button type="primary" loading={loadings[0]} onClick={() => this.enterLoading(0)}>
                Click me!
              </Button>
              <Button
                type="primary"
                icon={<PoweroffOutlined />}
                loading={loadings[1]}
                onClick={() => this.enterLoading(1)}
              >
                Click me!
              </Button>
              <Button
                type="primary"
                icon={<PoweroffOutlined />}
                loading={loadings[2]}
                onClick={() => this.enterLoading(2)}
              />
            </Card>

            <Card title="幽灵按钮">
              <p>幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上。</p>
              <div className="site-button-ghost-wrapper">
                <Button type="primary" ghost>
                  Primary
                </Button>
                <Button ghost>Default</Button>
                <Button type="dashed" ghost>
                  link
                </Button>
                <Button type="link" ghost>
                  link
                </Button>
              </div>
            </Card>

            <Card title="Block 按钮">
              <p>block属性将使按钮适合其父宽度。</p>
              <Button type="primary" block>
                Primary
              </Button>
              <Button block>Default</Button>
              <Button type="dashed" block>
                Dashed
              </Button>
              <Button type="link" block>
                Link
              </Button>
            </Card>
          </Col>
          <Col span={12}>
            <Card title="图标按钮">
              <p>
                当需要在 Button 内嵌入 Icon 时，可以设置 icon 属性，或者直接在 Button 内使用 Icon 组件。 如果想控制 Icon
                具体的位置，只能直接使用 Icon 组件，而非 icon 属性。
              </p>
              <Tooltip title="search">
                <Button type="primary" shape="circle" icon={<SearchOutlined />} />
              </Tooltip>
              <Button type="primary" shape="circle">
                A
              </Button>
              <Button type="primary" icon={<SearchOutlined />}>
                Search
              </Button>
              <Tooltip title="search">
                <Button shape="circle" icon={<SearchOutlined />} />
              </Tooltip>
              <Button icon={<SearchOutlined />}>Search</Button>
              <br />
              <Tooltip title="search">
                <Button shape="circle" icon={<SearchOutlined />} />
              </Tooltip>
              <Button icon={<SearchOutlined />}>Search</Button>
              <Tooltip title="search">
                <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
              </Tooltip>
              <Button type="dashed" icon={<SearchOutlined />}>
                Search
              </Button>
            </Card>

            <Card title="不可用状态">
              <p>添加 disabled 属性即可让按钮处于不可用状态，同时按钮样式也会改变。</p>
              <Button type="primary">Primary</Button>
              <Button type="primary" disabled>
                Primary(disabled)
              </Button>
              <br />
              <Button>Default</Button>
              <Button disabled>Default(disabled)</Button>
              <br />
              <Button type="dashed">Dashed</Button>
              <Button type="dashed" disabled>
                Dashed(disabled)
              </Button>
              <br />
              <Button type="link">Link</Button>
              <Button type="link" disabled>
                Link(disabled)
              </Button>
              <br />
              <Button type="link" danger>
                Danger Link
              </Button>
              <Button type="link" danger disabled>
                Danger Link(disabled)
              </Button>
              <br />
              <Button danger>Danger Default</Button>
              <Button danger disabled>
                Danger Default(disabled)
              </Button>
              <div className="site-button-ghost-wrapper">
                <Button ghost>Ghost</Button>
                <Button ghost disabled>
                  Ghost(disabled)
                </Button>
              </div>
            </Card>

            <Card title="多个按钮组合">
              <p>
                按钮组合使用时，推荐使用 1 个主操作 + n 个次操作，3 个以上操作时把更多操作放到 Dropdown.Button
                中组合使用。
              </p>
              <Button type="primary">primary</Button>
              <Button>secondary</Button>
              <Dropdown overlay={menu}>
                <Button>
                  Actions <DownOutlined />
                </Button>
              </Dropdown>
            </Card>

            <Card title="危险按钮">
              <p>在 4.0 之后，危险成为一种按钮属性而不是按钮类型。</p>
              <Button type="primary" danger>
                Primary
              </Button>
              <Button danger>Default</Button>
              <Button type="dashed" danger>
                link
              </Button>
              <Button type="link" danger>
                link
              </Button>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
