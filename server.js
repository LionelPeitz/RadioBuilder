import express from "express";
import fetch from "node-fetch";

const app = express();

app.get("/data", async (req, res) => {
  try {
    const response = await fetch("https://www.deutschlandfunk.de/nachrichten-100.html");
    const text = await response.text();

    res.send(text); // kompletter HTML-Text
  } catch (e) {
    res.status(500).send("Fehler");
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server läuft");
});
