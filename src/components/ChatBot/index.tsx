import search from "../../assets/procurar.png";
import play from "../../assets/play.png";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./styles.css";

function ChatBot() {
  const [mensagens, setMensagens] = useState<
    Array<{ id: number; texto: string; remetente: string }>
  >([]);
  const [inputMensagem, setInputMensagem] = useState("");
  const [carregando, setCarregando] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [mensagens]);

  const enviarMensagem = async () => {
    if (!inputMensagem.trim()) return;

    const novaMensagem = {
      id: Date.now(),
      texto: inputMensagem,
      remetente: "usuario",
    };

    setMensagens((prev) => [...prev, novaMensagem]);
    setInputMensagem("");
    setCarregando(true);

    try {
      const resposta = await axios.post(
        "https://api.deepseek.com/chat/completions",
        {
          model: "deepseek-chat",
          messages: [
            {
              role: "user",
              content: inputMensagem,
            },
          ],
          stream: false,
        },
        {
          headers: {
            Authorization: `Bearer sk-5d3821d5c01846ccadaee1366855995b`,
            "Content-Type": "application/json",
          },
        }
      );

      const respostaBot = {
        id: Date.now() + 1,
        texto: resposta.data.choices[0].message.content,
        remetente: "bot",
      };

      setMensagens((prev) => [...prev, respostaBot]);
    } catch (error) {
      console.error("Erro ao chamar API:", error);

      const mensagemErro = {
        id: Date.now() + 1,
        texto: "Desculpe, ocorreu um erro. Verifique sua API key.",
        remetente: "bot",
      };

      setMensagens((prev) => [...prev, mensagemErro]);
    } finally {
      setCarregando(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      enviarMensagem();
    }
  };

  return (
    <div className=" w-full min-w-[400px] h-full flex flex-col justify-between">
      <div className="w-full h-full max-h-[80px] bg-[#222323] px-[16px] flex items-center">
        <div className="w-[100%] max-w-[95%] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-[30px]">
            <div className="w-[45px] h-[45px] rounded-[50%] bg-white"></div>
            <div>Pizza Hut</div>
          </div>
          <img src={search} className="w-6" />
        </div>
      </div>

      <div className="pt-[10px] px-[16px] h-full content-end">
        <div className="w-full max-w-[95%] mx-auto overflow-auto">
          <div className="flex flex-col gap-5 px-[16px] h-full max-h-[calc(100vh_-_160px)] ">
            {mensagens.map((msg) => (
              <div
                key={msg.id}
                className={msg.remetente === `usuario` ? "user-msg" : "bot-msg"}
              >
                <div>{msg.texto}</div>
              </div>
            ))}
            {carregando && <div className="loading">Digitando...</div>}
            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>

      <div className="px-[16px]">
        <form
          className="relative w-full max-w-[95%] h-full max-h-[80px] mx-auto"
          action=""
          method="post"
        >
          <input
            className="w-[100%] h-[40px] rounded-[50px] mb-[16px] mt-[24px] bg-[#3b3b3b] px-[40px]"
            type="text"
            placeholder="Como eu posso te ajudar?"
            value={inputMensagem}
            onChange={(e) => setInputMensagem(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button
            className="w-[20px] absolute top-[33px] right-[15px] cursor-pointer"
            onClick={enviarMensagem}
            disabled={carregando || !inputMensagem.trim()}
          >
            <img src={play} alt="" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatBot;
