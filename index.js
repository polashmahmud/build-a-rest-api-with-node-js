import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('This is Home Page'));

app.use('/users', usersRoutes);

app.listen(PORT, () => console.log(`Server Running on port http://localhost:${PORT}`));