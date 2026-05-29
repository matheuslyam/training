import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'
import db from './db'



const app = new Hono()

app.use('/*', serveStatic({ root: '../' }))

app.get('/', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="pt-br">
    <head><meta charset="UTF-8"><title>CRUD made by Me</title></head>
    <body>
      <h1>Meu CRUD Real (Sem CSS)</h1>
      
      <div>
        <input type="text" id="itemName" placeholder="Novo item...">
        <button onclick="createItem()">Adicionar</button>
      </div>
      <ul id="itemList"></ul>
      <script>
        async function loadItems() {
          const res = await fetch('/api/items');
          const items = await res.json();
          const list = document.getElementById('itemList');
          list.innerHTML = items.map(item => \`
            <li>
              \${item.name} 
              <button onclick="updateItem(\${item.id})">Editar</button>
              <button onclick="deleteItem(\${item.id})">Deletar</button>
            </li>
          \`).join('');
        }
        async function createItem() {
          const name = document.getElementById('itemName').value;
          await fetch('/api/items', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name })
          });
          document.getElementById('itemName').value = '';
          loadItems();
        }
        async function deleteItem(id) {
          await fetch(\`/api/items/\${id}\`, { method: 'DELETE' });
          loadItems();
        }
        async function updateItem(id) {
          const newName = prompt("Novo nome:");
          if (newName) {
            await fetch(\`/api/items/\${id}\`, {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ name: newName })
            });
            loadItems();
          }
        }
        loadItems(); // Carrega ao abrir a página
      </script>
    </body>
    </html>
  `)
})


app.get('/slime', async (c) => {
  const slime = await Bun.file('../slime.html').text()
  return c.html(slime)
})

app.get('/api/items', (c) => {
  const items = db.query("SELECT * FROM items").all();
  return c.json(items);
})

app.post('/api/items/', async (c) => {
  const body = await c.req.json()
  const query = db.prepare("INSERT INTO items (name) VALUES (?)")
  query.run(body.name)
  return c.json({ success: true }, 201)
})

app.put('/api/items/:id', async (c) => {
  const id = c.req.param('id')
  const body = await c.req.json()
  db.run("UPDATE items SET name = ? WHERE id = ?", [body.name, id])
  return c.json({ success: true })
})

app.get('/produtos', async (c) => {
  const produtos = await Bun.file('../0.2-typescript.ts').text()
  return c.html(produtos)
})

export default app