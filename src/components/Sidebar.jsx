import { useState } from "react";


export default function Sidebar({ channels, activeId, onSelectChannel}) {

  // const [activeId, setActiveId] = useState("general");

  
  // function handleChannelClick(e, channel){
  //   console.log("clicked", channel.name);
  //   console.log("type: ", e.type);
  //   console.log("target: ", e.target.tagName, e.target.textContent);
  //   console.log("A real browser event underneath: ", e.nativeEvent instanceof MouseEvent);
  // }
  
  return (
    <nav className="sidebar">
      <h2>Channels</h2>
      {channels.map((channel) => (
        <button key={channel.id} 
        className={channel.id === activeId ? "channel active" : "channel"}
        onClick={()=>onSelectChannel(channel.id)}
        >
          # {channel.name}
        </button>
      ))}
    </nav>
  );
}
