const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/health', (req, res) => res.status(200).send('ok'));
app.get('/', (req, res) => res.send('<h1>Hello</h1><button>Click</button>'));

app.listen(port, () => console.log(`Listening on ${port}`));