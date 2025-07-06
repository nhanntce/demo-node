const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from backend NodeJs!' });
});

app.listen(80, () => {
  console.log('Server is running on port 3000');
});