import express from 'express';
import render from './render';

const app = express();

app.use('/assets', express.static('build', { maxAge: '200d' }));
app.get('*', render);

export default app;