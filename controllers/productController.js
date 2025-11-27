const productController = {
    addproduct: (req, res) => {

    },
    getproduct: async (req, res) => {
        try {
            const data = await fs.readFileSync("peoduct2.json", "utf8");

            res.status(200).send({
                status: "success",
                data: data
            });

            res.json({
                data: []
            })

        } catch (err) {
            res.json({
                message: err.message
            });
        }
    }
}

module.exports = { productController };