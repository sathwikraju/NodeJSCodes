import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.post("/submit", (req, res) => {
    const count = (req.body["fname"] + req.body["lname"]).length;
    res.render("index.ejs", { noOfLetters: count });
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})