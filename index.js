import express from "express";
import path, {dirname} from 'path'
import { fileURLToPath } from "url";
import { create } from "express-handlebars";
import AuthRouter from "./routes/auth.js"
import ProductRouter from "./routes/products.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express();

const hbs = create({
  defaultLayout: 'main',
  extname: 'hbs'
})



app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', './views');

app.use(AuthRouter)
app.use(ProductRouter)


const PORT = process.env.PORT || 4100;
app.listen(PORT, () => {
  console.log("server is running port");
});











// app.get('/', (req, res)=>{
//     res.status(200)
//     res.sendFile(path.join(__dirname, "views", 'index.html'))
//     // res.send('Main page')
// })

// app.get('/about', (req, res)=>{
//     res.status(200)
//     res.sendFile(path.join(__dirname, "views", 'about.html'))
//     // res.send('about page')
// })