import ChatList from "./components/ChatList";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex h-screen w-screen font-sans bg-[#222323] overflow-hidden">
      <Sidebar />
      <ChatList />
    </div>
  );
}

export default App;
