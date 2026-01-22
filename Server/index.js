import express from 'express';
import cors from 'cors';
import users from './user.js';

const app = express();

app.use(cors());
// app.use(express.json());

app.get('/hello', (req, res) => {
  res.send('Server is ready');
});

// app.get('/users', (req, res) => {
//   res.json(users);
// });

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
