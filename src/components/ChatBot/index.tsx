import search from "../../assets/procurar.png";
import play from "../../assets/play.png";

function ChatBot() {
  return (
    <div className="w-[100%] min-w-[400px] flex flex-col justify-between">
      <div className="w-[100%] bg-[#222323] py-[20px] px-[16px]">
        <div className="w-[100%] max-w-[95%] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-[40px] text-white">
            <div className="w-[45px] h-[45px] rounded-[50%] bg-white"></div>
            <div>Pizza Hut</div>
          </div>
          <img src={search} className="w-6" />
        </div>
      </div>
      <div className="py-[10px] px-[16px] h-full flex flex-col justify-end">
        <div className="w-full max-w-[95%] mx-auto text-white flex flex-col">
          <div>Texto da IA</div>
          <div className="self-end">Texto Myself</div>
          <form className="relative" action="" method="post">
            <input
              className="w-[100%] h-[40px] rounded-[50px] mb-[16px] mt-[24px] bg-[#3b3b3b] px-[40px]"
              type="text"
              placeholder="Como eu posso te ajudar?"
            />
            <button className="w-[20px] absolute top-[33px] right-[15px] cursor-pointer">
              <img src={play} alt="" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChatBot;
