function ChatList() {
  return (
    <div className="bg-[#222323] border-x-[0.5px] border-[#6d6d6d] text-white p-5 max-w-[565px] w-full h-full">
      <h1 className="text-[25px] font-bold mb-[20px]">WhatsApp</h1>
      <input
        className="w-full h-[40px] px-[20px] bg-white rounded-[50px] mb-[40px] text-black"
        type="text"
      />
      <ul>
        <li className="relative flex gap-5 before:absolute before:content[''] before:top-[-15px] before:left-[-10px] before:w-[calc(100%+20px)] before:h-[calc(100%+30px)] before:bg-transparent hover:before:bg-[#1d1d1d] before:z-1 before:rounded-[5px] cursor-pointer">
          <div className="w-[45px] h-[45px] rounded-[50%] bg-white z-2"></div>
          <div className="flex flex-col justify-between z-2">
            <p>Pizza Hut</p>
            <p className="text-white opacity-50 text-xs">ULTIMA MSG</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ChatList;
