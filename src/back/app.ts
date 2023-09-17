//basic express static server in typescript
import express from 'express';
import path from 'path';
import { Request, Response } from 'express';

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, './static')));

app.get('/', (req: Request, res: Response) => {
    res.send('The sedulous hyena ate the antelope!');
});

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});