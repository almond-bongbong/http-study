import express from 'express';
import path from 'path';

const __dirname = path.resolve();
const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/examples/connectionless/index.html'));
});

app.get('/hello1', (req, res) => {
  console.log('hello1');
  res.send('hello1');
});

app.get('/hello2', (req, res) => {
  console.log('hello2');
  res.send('hello2');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000!');
});
