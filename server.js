import express from "express";

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/data", async (req, res) => {
  try {
    const response = await fetch("https://www.deutschlandfunk.de/nachrichten-100.html");
    const text = await response.text();

    res.send(text);
  } catch (e) {
    console.error(e);
    res.status(500).send("Fehler");
  }
});

app.listen(process.env.PORT || 3000);
