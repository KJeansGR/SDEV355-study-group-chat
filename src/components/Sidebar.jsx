export default function Sidebar({ channels }) {
  
  function handleChannelClick(channel){
    console.log("clicked", channel.name);
  }
  
  return (
    <nav className="sidebar">
      <h2>Channels</h2>
      {channels.map((channel) => (
        <button key={channel.id} className="channel"
          onClick={()=>{ handleChannelClick(channel)}}
        >
          # {channel.name}
        </button>
      ))}
    </nav>
  );
}
