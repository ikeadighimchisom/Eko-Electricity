import ('./CONFIG/config.js');
import express from 'express';

import neparouter from './ROUTER/router.js';



const app = express();
app.use(express.json());
app.use('/api/v1',neparouter)

const port = 2011;
app.listen(port, () => {
    console.log(`listening on port:` + port)
});