import { PageHeader, Input, Space, Button } from "antd";

import "./styles.css";

const { Search } = Input;

function Pageheader() {
  return (
    <PageHeader
      className="pageheader"
      title="Cofre de Senhas"
      extra={[
        <Space>
          <Search
            type="search"
            style={{ width: 200 }}
            placeholder="buscar"
          ></Search>
          <Button
            htmlType="submit"
            type="primary"
            style={{ backgroundColor: "darkcyan" }}
          >
            Novo Cofre
          </Button>
        </Space>,
      ]}
    />
  );
}

export default Pageheader;
