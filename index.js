const express = require("express");
const app = express();

app.use(express.json()); // to read JSON body

// 1) GET - data lene ke liye
app.get("/get-data", (req, res) => {
    res.json({
        message: "GET Method Working",
        name: "smit"
    });
});

// 2) POST - data add karne ke liye
app.post("/add-data", (req, res) => {
    console.log("POST Body:", req.body);
    res.json({
        message: "POST Method Working",
        received: req.body
    });
});

// 3) PUT - data ko update (full) karne ke liye
app.put("/update-data", (req, res) => {
    console.log("PUT Body:", req.body);
    res.json({
        message: "PUT Method Working (full update)",
        updatedData: req.body
    });
});

// 4) PATCH - data ko update (partial) karne ke liye
app.patch("/modify-data", (req, res) => {
    console.log("PATCH Body:", req.body);
    res.json({
        message: "PATCH Method Working (partial update)",
        updatedFields: req.body
    });
});

// 5) DELETE - data delete karne ke liye
app.delete("/delete-data", (req, res) => {
    res.json({
        message: "DELETE Method Working"
    });
});

// Server start
app.listen(4500, () => {
    console.log("Server running on port 4500");
});
