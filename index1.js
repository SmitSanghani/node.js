const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json())
app.get("/read", async (req, res) => {
    try {
        const result = await new Promise((resolve, reject) => {
            fs.readFile('example.txt', 'utf8', (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });

        // Success response
        res.status(200).send({
            status: "success",
            data: result
        });

    } catch (err) {
        // Error response
        res.status(500).send({
            status: "error",
            message: err.message
        });
    }
});
app.post("/write", async (req, res) => {
    try {
        const result = await new Promise((resolve, reject) => {
            fs.writeFile('example1.txt', req.body.text, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });

        // Success response
        res.status(200).send({
            status: "success",
            data: result
        });

    } catch (err) {
        // Error response
        res.status(500).send({
            status: "error",
            message: err.message
        });
    }
});
app.delete("/delete", async (req, res) => {
    try {
        const result = await fs.unlinkSync("example1.txt")
        console.log(result)
        // Success response
        res.status(200).send({
            status: "success",
            data: result
        });

    } catch (err) {
        // Error response
        res.status(500).send({
            status: "error",
            message: err.message
        });
    }
});

app.post("/append", (req, res) => {
    try {
        fs.appendFileSync('example1.txt', req.body.text + "\n");

        res.status(200).send({
            status: "success",
            message: "Data appended successfully"
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
