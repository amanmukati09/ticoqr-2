const PORT = 8000;

const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();

app.use(express.json());

const API_KEY = "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";

const corsOptions = {
  origin: "http://localhost:3000", // Update this with the URL of your front-end
};

app.use(cors(corsOptions));

app.post("/generate", async (req, res) => {
  const { message } = req.body;

  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: message },
      ],
    }),
  };

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", options);
    const data = await response.json();
    res.json({ reply: data.choices[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
