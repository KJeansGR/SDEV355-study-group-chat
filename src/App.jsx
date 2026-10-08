import { CHANNELS, SEED_MESSAGES } from "./data.js";
import Sidebar from "./components/Sidebar.jsx";
import ChatHeader from "./components/ChatHeader.jsx";
import MessageList from "./components/MessageList.jsx";
import Composer from "./components/Composer.jsx";
import { useState } from "react";
export default function App() {

    const [activeId, setActiveId] = useState("general");
    const channel = CHANNELS.find((c)=> c.id === activeId);
  return (
    <div className="app">
      <Sidebar 
        channels={CHANNELS}
        activeId={activeId}
        onSelectChannel={setActiveId}
       />
      <main className="main">
        <ChatHeader channel= {channel} />
        <MessageList messages={SEED_MESSAGES.general} />
        <Composer />
      </main>
    </div>
  );
}

