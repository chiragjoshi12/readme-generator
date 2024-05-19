const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.post("/generate-readme", async (req, res) => {
  const files = req.body.files;

  const fetch = (await import("node-fetch")).default;

  const response = await fetch(
    "https://readme-back.onrender.com/generate-readme",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ files }),
    }
  );

  const data = await response.json();
  res.json(data);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
