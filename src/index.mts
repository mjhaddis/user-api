import express, { json } from 'express'
import { loginRouter} from './routes/loginRouter.mjs'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { registerRouter } from './routes/registerRoute.mjs'


dotenv.config()

const app = express()

app.use(json())
app.use("/register", registerRouter)
app.use("/login", loginRouter)

const PORT= process.env.PORT  || 3000
const dbUrl = process.env.MONGO_URL

if (!dbUrl) throw Error("No MONGO_URL in the env file");


app.get("/ping", (req, res) => {
    res.status(200).json({ message: "Status OK" })
})

app.listen(PORT, async () => {

    try {
        await mongoose.connect(dbUrl)
        console.log(`Running on http://localhost:${PORT}`);
        
    } catch (error) {
        console.error("error", error)
    }
    
})