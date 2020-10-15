import * as functions from 'firebase-functions';
import * as express from 'express';
import * as cors from 'cors';

import routes from './routes';

const app = express();
app.use(cors({ origin: true }));
app.use(routes);

exports.app = functions.https.onRequest(app);