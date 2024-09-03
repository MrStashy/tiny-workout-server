const { config } = require('dotenv');
config();
const express = require('express')
const cors = require('cors')
const morgan = require('morgan');
const userRouter = require('./routes/user')
const authRouter = require('./routes/auth')
const statsRouter = require('./routes/stats')

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/users', userRouter)
app.use('/stats', statsRouter)
app.use('/', authRouter)


module.exports =  app 