
import { useState } from "react";

export default function Message({ message, onReact }) {
  const [showTime, setShowTIme] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPinned, setIsPinned] = useState(false);

  return (
    <li 
      className={ isPinned ? "message pinned" : "message"}
      onClick={()=> setShowTIme(!showTime)}
      onDoubleClick={()=>onReact(message.id)}
      onMouseEnter={()=>setIsHovered(true)}
      onMouseLeave={()=>setIsHovered(false)}
    >
      
      <span className="author">{message.author}</span>
      <p className="text">{message.text}</p>
      {showTime &&
        <span className="time">{message.time}</span>
      }
      {message.hearts > 0 && 
        <span className="hearts">♥ {message.hearts}</span>
      }
      {isHovered && (
       <div className="toolbar">
        <button onClick={()=> setIsPinned(!isPinned)}>
          {isPinned ? "Unpin":"pin"}
        </button>
       </div> 
      )
      }
    </li>
  );
}
