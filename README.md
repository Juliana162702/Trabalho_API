 ## 🛒 Lista de Compras Interativa 
Um projeto simples mas funcional que combina frontend web com backend Node.js para gerenciar uma lista de compras.

Preview

## ✨ Funcionalidades Principais
📋 Visualização de itens da lista de compras

🔄 Consumo de API REST real

🎨 Design limpo e responsivo

⚡ Armazenamento estático no backend

## 🚀 Começando
Pré-requisitos
Node.js v14+

Navegador moderno (Chrome, Firefox, Edge)

## 🔧 Instalação Passo a Passo
Clone o repositório

bash
Copy
git clone https://github.com/seu-usuario/lista-compras.git
cd lista-compras
Instale as dependências

bash
Copy
npm install express cors
Inicie o servidor

bash
Copy
node server.js
Acesse a aplicação
Abra no navegador:

Copy
http://localhost:3000
🛠 Estrutura do Projeto
Copy
lista-compras/
├── index.html          # Página principal
├── server.js           # Servidor Node.js
└── README.md           # Este arquivo

## 🌐 Endpoints da API

Método	Endpoint	Descrição
GET	/api/compras	Retorna todos os itens
Exemplo de resposta:

json
Copy
[
  {
    "id": 1,
    "item": "Maçã",
    "quantidade": 5
  }
]
💻 Tecnologias Utilizadas
Frontend: HTML5, CSS3, JavaScript ES6

Backend: Node.js, Express

Middleware: CORS

