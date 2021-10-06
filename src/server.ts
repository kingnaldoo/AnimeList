import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import cors from 'cors';
import { router } from './routes';

const app = express();
const port = (process.env.PORT || 3000);

app.set('view engine', 'ejs');
app.set('views','./src/views');
app.use(cors());
app.use(expressLayouts);
app.use(express.static('public'));
app.use(express.json());
app.use(router);

app.listen(port, () => console.log(`O servidor está rodando na porta ${port}😎`));