import express from 'express'

const app = express()

const PORT = 3000

app.get("/ping", (req, res) => {
    res.status(200).json({ message: "Status OK" })
})

app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`);
    
})