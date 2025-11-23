const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());

app.post("/add-product", (req, res) => {
    try {

        // Step 1: Read product.json
        let fileData = fs.readFileSync("product.json", "utf8");

        // Step 2: If file empty ho to default array set karo
        if (!fileData.trim()) {
            fileData = "[]";
        }

        // Step 3: Convert JSON → JS value
        let products = JSON.parse(fileData);

        // ⭐ Step 4: Agar array nahi ho to empty array set karo
        if (!Array.isArray(products)) {
            products = [];
        }

        // Step 5: New product from body
        const newProduct = req.body;

        // Step 6: Push product in array
        products.push(newProduct);

        // Step 7: Write back to file
        fs.writeFileSync("product.json", JSON.stringify(products, null, 2));

        // Step 8: Response
        res.status(201).send({
            status: "success",
            message: "Product added successfully!",
            data: newProduct
        });

    } catch (err) {
        res.status(500).send({
            status: "error",
            message: err.message
        });
    }
});

app.listen(5000, () => {
    console.log("Server started on port 5000");
});
