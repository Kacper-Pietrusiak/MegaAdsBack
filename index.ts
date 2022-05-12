import express, {json} from "express";
import cors from 'cors';
import 'express-async-errors';
import {handleError} from "./utils/error";

const app = express()

app.use(cors({
    origin: 'http://localhost:3000',
}))
app.use(json());


//Routes

app.get('/', async (req, res) => {
    throw new Error('damn boy where you find this')
});


app.use(handleError)

app.listen(3001, '0.0.0.0', ()=>{
    console.log('listening on port https://localhost:3001')
})