import express from "express";
import cors from 'cors';


const app = express();
const router = express.Router();
app.use(cors());

app.get('/comments', (req,res, next) => {
    res.header('Content-Range', 'comments 0.20/20')
    res.header('Access-Control-Expose-Headers', 'Content-Range')
});

app.use(express.json());
app.use('/', router);

const PORT = process.env.PORT || 5000;
app.listen(5000);