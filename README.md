# Bot Pizzaria

Este é um projeto full stack monolítico para um atendente virtual de pizzaria com IA. Ele utiliza **DeepSeek** como modelo de linguagem, comunicação em tempo real com **WebSocket**, e armazena o histórico em **SQLite** via **Prisma ORM**.

---

## Tecnologias

- **Frontend**: React + Vite + TypeScript --> [Projeto Frontend](https://github.com/lukastff/chat-bot-pizzaria/)
- **Backend**: Node.js + TypeScript + WebSocket --> [Projeto Backend](https://github.com/lukastff/chat-bot-pizzaria-backend)
- **IA**: DeepSeek API
- **Banco de Dados**: SQLite via Prisma ORM

---

## Como Rodar o Projeto

### Pré-requisitos

- [Node.js 18+](https://nodejs.org/)
- (Opcional) [npm](https://npm.io/) para gerenciamento de pacotes

---


##  Variáveis de Ambiente

1. adicione ao `.env` sua chave de API do DeepSeek:

```env
PORT=3001
DEEPSEEK_API_KEY=your_deepseek_api_key_here
FRONTEND_URL=http://localhost:3000
NODE_ENV=development
DATABASE_URL="file:./prisma/dev.db"
```

---

## Prisma (uso local opcional)

```bash
cd backend
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run dev
```

---

##  Frontend Local

```bash
cd frontend
npm install
npm run dev
```

---

## WebSocket

O backend expõe um WebSocket para conversas em tempo real via `socket.io`. A comunicação é iniciada automaticamente no frontend com base no `window.location.hostname`.

---

## Histórico de Conversas

Toda troca de mensagens é armazenada no SQLite. Ao reabrir o chat, o histórico é recuperado automaticamente.


