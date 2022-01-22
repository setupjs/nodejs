const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json()); // for parsing re.body and only if header has Content-Type: application/json

app.listen(PORT, () => {
  console.log(`server started. visit localhost:${PORT} to see your server`);
});


app.get('/', (req, res) => {
  res.send('Template server is running');
});
