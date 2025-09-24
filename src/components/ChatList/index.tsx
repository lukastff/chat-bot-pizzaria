function ChatList() {
  return (
    <div className="bg-[#222323] border-x-[0.5px] border-[#6d6d6d] text-white p-5 max-w-[565px] w-full h-full">
      <h1 className="text-[25px] font-bold mb-[20px]">WhatsApp</h1>
      <input
        className="w-full h-[40px] px-[20px] bg-white rounded-[50px] mb-[40px] text-black"
        type="text"
      />
      <ul>
        <li className="flex gap-5">
          <div className="w-[45px] h-[45px] rounded-[50%] bg-white"></div>
          <div className="flex flex-col justify-between">
            <p>Pizza Hut</p>
            <p className="text-white opacity-50 text-xs">ULTIMA MSG</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ChatList;
