import express from 'express';
import { sum } from './sum.js';

const app = express();
const PORT = 3000;


app.get('/getSum/:a/:b', async(req, res) => {
    const a = parseInt(req.params.a,0);
    const b = parseInt(req.params.b,0);
    const result = sum(a, b);
    res.json({ sum: result });
});

app.get('/',(req,res)=>{
    res.send("Welcome to the Sum API! Use the endpoint /getSum/:a/:b to get the sum of two numbers.");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});