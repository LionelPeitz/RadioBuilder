import express from "express";

const app = express();

app.get("/data", async (req, res) => {
  try {
    const r = await fetch("https://www.deutschlandfunk.de/nachrichten-100.html");
    const t = await r.text();
    res.send(t);
  } catch (e) {
    console.error(e);
    res.status(500).send("error");
  }
});

app.listen(process.env.PORT || 3000);
