import express from 'express';        // call express
import { urlencoded, json } from 'body-parser';
import { databaseProvider } from './db/database-provider'

const app = express();                 // define our app using express
app.use(urlencoded({ extended: true }));
app.use(json());

const port = process.env.PORT || 8080;

import router from './router';

app.use('/api', router);
app.listen(port);

// db config
databaseProvider.init();