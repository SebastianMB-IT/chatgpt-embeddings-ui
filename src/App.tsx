import Layout from "./components/Layout";
import Menu from "./components/Menu";
import Chat from "./components/Chat";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
import { useState } from "react";

function App() {

  const [deleteConversation, setDeleteConversation] = useState<boolean>(false)

  return (
    <>
      <Layout>
        <Menu />
        <LeftBar deleteConversationCallback={() => setDeleteConversation(true)} />
        <Chat deleteConversation={deleteConversation} newConversationCallback={() => setDeleteConversation(false)} />
        <RightBar />
      </Layout>
    </>
  );
}

export default App;
