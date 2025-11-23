const fs = require('fs');
const jwt = require("jsonwebtoken")
const secretkey = "demo-token"
const readData = async (req, res) => {
    try {
        const data = await fs.readFileSync("example.txt", "utf8");

        res.status(200).send({
            status: "success",
            data: data
        });

    } catch (err) {
        res.status(500).send({
            status: "error",
            message: err.message
        });
    }

}
const writeData = async (req, res) => {
    try {

        let obj = {
            email: req.body.email,
            password: req.body.password
        }

        let filldata = await fs.readFileSync("user.json", "utf8");
        console.log(filldata)
        let Data = JSON.parse(filldata || "[]");
        console.log(Data)
        console.log(typeof Data)
        Data.push(obj)
        let result = await fs.writeFileSync('user.json', JSON.stringify(Data));

        res.status(200).send({
            status: "success",
            message: "user created successfully"
        });

    } catch (err) {
        res.status(500).send({
            status: "error",
            message: err.message
        });
    }

}


const loginuser = async (req, res) => {
    try {
        const { email, password } = req.body
        let filldata = await fs.readFileSync("user.json", "utf8");
        let Data = JSON.parse(filldata || "[]");

        let existUser = Data.find((user) => user.email == email)

        if (existUser) {
            if (existUser.password == password) {

                let token = jwt.sign({
                    email
                }, secretkey, {
                    expiresIn: "1h"
                })
                return res.json({
                    isSuccess: true,
                    message: "login successfully",
                    token
                })
            } else {
                return res.json({ message: "password can not match" })
            }
        } else {
            return res.json({ message: "user not found" })
        }

    } catch (err) {
        res.status(400)
        res.send({ message: err.message });
    }

}

const getUserList = () => {

}
module.exports = { readData, writeData, loginuser };