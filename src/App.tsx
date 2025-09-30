import ChatBot from "./components/ChatBot";
import ChatList from "./components/ChatList";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex h-screen w-screen font-sans bg-[#1d1d1d] text-white box-border overflow-hidden">
      <Sidebar />
      <ChatList />
      <ChatBot />
    </div>
  );
}

export default App;
