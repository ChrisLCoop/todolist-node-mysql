import express from 'express'
import {dirname,join} from 'path'
import { fileURLToPath } from 'url'
import index from './routes/index.routes.js'
import cors from 'cors'
import bodyParser from 'body-parser'



const app = express()

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const __dirname= dirname(fileURLToPath(import.meta.url))

app.set('views',join(__dirname,'views'))
app.set('view engine','ejs')
app.use(index)



app.listen(3000)
console.log('app runing in port 3000 XD')

app.use(express.static(join(__dirname,'public')))