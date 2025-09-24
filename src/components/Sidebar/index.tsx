import comentario from "../../assets/comentario.png";
import status from "../../assets/status.png";
import comunidade from "../../assets/comunidade.png";
import configuracoes from "../../assets/configuracoes.png";

function Sidebar() {
  return (
    <div className="h-screen bg-[#1d1d1d] p-[6px] py-[20px] flex flex-col justify-between items-center">
      <div>
        <div className="p-2 space-y-10">
          <img className="w-8" src={comentario} alt="" />
          <img className="w-8" src={status} alt="" />
          <img className="w-8" src={comunidade} alt="" />
        </div>
      </div>
      <div>
        <div className="flex flex-col justify-between items-center p-2 space-y-10">
          <img className="w-8" src={configuracoes} alt="" />
          <div className="w-[45px] h-[45px] rounded-[50%] bg-white"></div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
