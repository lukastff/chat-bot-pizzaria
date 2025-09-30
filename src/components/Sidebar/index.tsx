import comentario from "../../assets/comentario.png";
import status from "../../assets/status.png";
import comunidade from "../../assets/comunidade.png";
import configuracoes from "../../assets/configuracoes.png";
import "./styles.css";

function Sidebar() {
  return (
    <aside className="h-screen bg-[#1d1d1d] border-r-[0.5px] border-[#6d6d6d] px-[10px] py-[30px] flex flex-col justify-between items-center list-bar">
      <div>
        <div className="space-y-10">
          <img className="w-[24px]" src={comentario} alt="" />
          <img className="w-[24px]" src={status} alt="" />
          <img className="w-[24px]" src={comunidade} alt="" />
        </div>
      </div>
      <div>
        <div className="flex flex-col justify-between items-center space-y-10">
          <img className="w-[24px]" src={configuracoes} alt="" />
          <div className="w-[45px] h-[45px] rounded-[50%] bg-white"></div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
