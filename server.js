const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

// Dados estáticos para a lista de compras
const listaCompras = [
  { id: 1, item: 'Maçã', quantidade: 5 },
  { id: 2, item: 'Leite', quantidade: 2 },
  { id: 3, item: 'Pão', quantidade: 1 },
  { id: 4, item: 'Ovos', quantidade: 12 },
  { id: 5, item: 'Arroz', quantidade: 1 },
];

// Rota GET para retornar a lista de compras
app.get('/api/compras', (req, res) => {
  res.json(listaCompras);
});
app.use(express.static('public'));
// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});