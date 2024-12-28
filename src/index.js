const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send("Hello World !! \n");
});
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});