import search from "../../assets/procurar.png";
import play from "../../assets/play.png";
import "./styles.css";
import { useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';
import { api } from '../../services/api';
import type { Message } from '../../models/Message';
import ReactMarkdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';

const socket = io(`${window.location.hostname}:3001`);

function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    loadHistory();

    socket.on('bot-message', (resposta: string) => {
      setMessages(prev => [
        ...prev.slice(0, -1), // remove "Digitando..."
        {
          role: 'assistant',
          content: resposta,
        },
      ]);
      setLoading(false);
    });

    return () => {
      socket.off('bot-message');
    };
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const loadHistory = async () => {
    try {
      const res = await api.get<Message[]>('/messages');
      setMessages(res.data);
    } catch (err) {
      console.error('Erro ao carregar histórico:', err);
    }
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      role: 'user',
      content: input,
    };

    setMessages(prev => [...prev, userMessage, {
      role: 'assistant',
      content: 'Digitando...'
    }]);

    setInput('');
    setLoading(true);

    socket.emit('nova-mensagem', userMessage.content);
  };

  return (
    <main className="w-full min-w-[400px] h-full flex flex-col justify-between">
      <div className="w-full bg-[#222323] px-[16px] flex items-center">
        <div className="h-[80px] w-[100%] max-w-[95%] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-[30px]">
            <div className="w-[45px] h-[45px] rounded-[50%] bg-white"></div>
            <div>Pizza Hut</div>
          </div>
          <img src={search} className="w-6" alt="Pesquisar" />
        </div>
      </div>

      <div className="pt-[10px] px-[16px] h-[calc(100%-80px)] content-end">
        <div className="w-full max-w-[95%] mx-auto overflow-auto">
          <div className="flex flex-col gap-5 px-[16px] h-full max-h-[calc(100vh_-_160px)] ">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={msg.role === `user` ? "user-msg" : "bot-msg"}
              >
                <ReactMarkdown remarkPlugins={[remarkBreaks]}>{msg.content}</ReactMarkdown>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>
        </div>
      </div>

      <div className="h-[80px] px-[16px]">
        <form
          className="relative h-full w-full max-w-[95%] mx-auto flex items-center"
          onSubmit={(e) => { e.preventDefault(); sendMessage(); }}
        >
          <input
            className="w-[100%] h-[40px] rounded-[50px] bg-[#3b3b3b] px-[40px]"
            type="text"
            placeholder="Como eu posso te ajudar?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="button"
            className="w-[20px] absolute top-[26px] right-[15px] cursor-pointer"
            onClick={(e) => { e.preventDefault(); sendMessage(); }}
            disabled={loading || !input.trim()}
          >
            <img src={play} alt="Enviar" />
          </button>
        </form>
      </div>
    </main>
  );
}

export default ChatBot;
