const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve frontend
app.use(express.static(path.join(__dirname, "public")));

// Web Service
app.post("/convert", (req, res) => {
    const f = parseFloat(req.body.fahrenheit);

    if (isNaN(f)) {
        return res.status(400).json({ error: "Invalid input" });
    }

    const c = (f - 32) * 5 / 9;

    res.json({ fahrenheit: f, celsius: c.toFixed(2) });
});

app.listen(3000, () => console.log("Server running on port 3000"));
