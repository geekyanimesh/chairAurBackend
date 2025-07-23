import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("The server is working!");
});

app.get("/login", (req, res) => {
  res.send("Login here!");
});

const characters = [
  { name: "Sansa Stark", email: "sophie_turner@gameofthron.es" },
  { name: "Daenerys Targaryen", email: "emilia_clarke@gameofthron.es" },
  { name: "Petyr Baelish", email: "aidan_gillen@gameofthron.es" },
  { name: "Viserys Targaryen", email: "harry_lloyd@gameofthron.es" },
  { name: "Ned Stark", email: "sean_bean@gameofthron.es" },
  { name: "Arya Stark", email: "maisie_williams@gameofthron.es" }
];

app.get("/api/characters", (req, res) => {
  res.json(characters);
});

app.listen(port, () => {
  console.log(`Server listening at port: ${port}`);
});
