import NewChat from "./NewChat";

function Sidebar() {
  return (
    <div className="flex flex-col p-2 h-screen">
      <div className="flex-1">
        <div>
          {/* New Chat Button */}
          <NewChat />
          <div>{/* Algorithm Selection */}</div>

          {/* Chat history */}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
