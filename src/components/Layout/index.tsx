import { Layout } from "antd";
import "./styles.css";
import Pageheader from "../Pageheader";
import VaultTable from "../Table";

const { Content } = Layout;

function Vault() {
  return (
    <Layout>
      <Content>
        <Pageheader />
        <VaultTable />
      </Content>
    </Layout>
  );
}

export default Vault;
