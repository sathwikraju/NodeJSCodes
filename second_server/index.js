import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send(" <h1>Hello World.</h1>")
});

// app.get("/about", (req, res) => {
//     res.send("<h1>About</h1> <p> I am Sathwik </p>")
// });

app.get("/contact", (req, res) => {
    res.send("<h1>Contact</h1> <p> Ph: 9553265462 </p>")
})

app.post("/register", (req, res) => {
    res.sendStatus(201)
});

app.put("/user/sathwik", (req, res) => {
    res.sendStatus(200)
});

app.patch("/user/sathwik", (req, res) => {
    res.sendStatus(200)
});

app.delete("/user/sathwik", (req, res) => {
    res.sendStatus(200)
});

app.listen(port, () => {
    console.log(`server running on port ${port}.`)
});


