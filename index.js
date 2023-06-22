import express from 'express';
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({limit: "30mb" , extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb" , extended: true}));
app.use(cors({
    origin: 'https://64949afdb82df90305fb5660--fantastic-frangollo-1a4fa9.netlify.app/'
}));

app.use('/posts', postRoutes);
const CONNECTION_URL = process.env.CONNECTION_URL
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL ,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => app.listen(PORT , () => console.log(`server listening on ${PORT}`)))
  .catch(err => console.error(err))
