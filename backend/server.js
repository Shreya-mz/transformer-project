const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let users = [];

app.post("/api/login", (req, res) => {
  const { name, email, password } = req.body;
  const userId = Date.now(); // unique ID
  const user = { id: userId, name, email, password };
  users.push(user);
  res.json({ userId, name });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
