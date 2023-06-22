import express from 'express';
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'
import postRoutes from './routes/posts.js';

dotenv.config()
const app = express();

app.use(bodyParser.json({limit: "30mb" , extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb" , extended: true}));
app.use(cors({
    origin: 'https://pixelmp.netlify.app/'
}));

app.use('/posts', postRoutes);
const CONNECTION_URL = process.env.CONNECTION_URL
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL ,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => app.listen(PORT , () => console.log(`server listening on ${PORT}`)))
  .catch(err => console.error(err))
