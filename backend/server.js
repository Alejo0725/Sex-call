const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
    const { email, password } = req.body;
    return res.json({ message: "Usuario registrado", email });
});

app.post("/login", (req, res) => {
    const { email } = req.body;
    return res.json({ token: "TOKEN_DE_PRUEBA", email });
});

app.get("/coins/:userId", (req, res) => {
    return res.json({ coins: 100 });
});

app.post("/buy-coins", (req, res) => {
    const { userId, amount } = req.body;
    return res.json({ message: "Compra exitosa", amount });
});

app.post("/start-call", (req, res) => {
    return res.json({ roomId: "sala_12345" });
});

app.listen(3000, () => console.log("Backend iniciado en puerto 3000"));
