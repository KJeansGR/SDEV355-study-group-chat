import { CHANNELS, SEED_MESSAGES } from "./data.js";
import Sidebar from "./components/Sidebar.jsx";
import ChatHeader from "./components/ChatHeader.jsx";
import PinnedBar from "./components/PinnedBar.jsx";
import MessageList from "./components/MessageList.jsx";
import Composer from "./components/Composer.jsx";
import { useState } from "react";


function now(){
  return new Date().toLocaleTimeString([], {hour: "numeric", minute: "2-digit"});
}
export default function App() {

    const [activeId, setActiveId] = useState("general");
    const [messages, setMessages] = useState(SEED_MESSAGES);
    const [isTyping, setIsTyping] = useState(false);
    const [pinnedId, setPinnedId] = useState(null);

    const channel = CHANNELS.find((c)=> c.id === activeId);
    const pinned = messages[activeId].find((m) => m.id === pinnedId);

    function handleSend(text){
      const message = {
        id: crypto.randomUUID(),
        author: "You",
        time: now(),
        hearts: 0,
        text
      };
      setMessages(prev => (
        {
        ...prev, 
        [activeId]: [...prev[activeId], message]
        }));
    }
    function handleReact(id){
      const updated = messages[activeId].map((m) =>
        m.id === id ? {...m, hearts: m.hearts + 1} : m
      )
      setMessages({...messages, [activeId]: updated});
    }
    function handlePin(id){
      setPinnedId(pinnedId === id ? null: id);
    }
  return (
    <div className="app">
      <Sidebar 
        channels={CHANNELS}
        activeId={activeId}
        onSelectChannel={setActiveId}
       />
      <main className="main">
        <ChatHeader channel= {channel} isTyping={isTyping} />
        <PinnedBar 
          message={pinned} 
          onUnpin={()=> setPinnedId(null)}
        />
        <MessageList 
          channelId={activeId}
          messages={messages[activeId]} 
          onPin={handlePin}
          onReact={handleReact}
          pinnedId={pinnedId}
        />
        <Composer onSend={handleSend} onTypingChange={setIsTyping} />
      </main>
    </div>
  );
}

