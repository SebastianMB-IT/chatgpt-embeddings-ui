import Layout from "./components/Layout";
import Menu from "./components/Menu";
import Chat from "./components/Chat";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";

function App() {
  return (
    <>
      <Layout>
        <Menu />
        <LeftBar />
        <Chat />
        <RightBar />
      </Layout>
    </>
  );
}

export default App;
