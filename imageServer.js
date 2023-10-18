const express = require("express");
const cors = require("cors");
const { createCanvas, loadImage } = require("canvas");
const fs = require("fs");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/generateImage", async (req, res) => {
  try {
    const { message } = req.body;

    // Create a canvas and context
    const canvas = createCanvas(600, 400); // Adjust the dimensions as needed
    const ctx = canvas.getContext("2d");

    // Create your image based on the user's message
    // For simplicity, let's just draw some text on the canvas
    ctx.font = "36px Arial";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(message, canvas.width / 2, canvas.height / 2);

    // Convert the canvas to a data URL (you can also save it as an image file)
    const dataURL = canvas.toDataURL("image/png");

    // Respond with the image data URL
    res.json({ imageUrl: dataURL });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const PORT = 8001; // Use a different port for this server
app.listen(PORT, () => {
  console.log(`Image server is running on port ${PORT}`);
});
