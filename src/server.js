/* eslint-disable no-undef */
import express from 'express'
import mongoose from 'mongoose'
import routes from './routes/task'
import bodyParser from 'body-parser'


const PORT = process.env.API_PORT
const MONGO_USER = process.env.TODO_DB_USER
const MONGO_PASS = process.env.TODO_DB_PASS
const MONGO_PORT = process.env.MONGO_PORT
const MONGO_DB_NAME = process.env.TODO_DB_NAME

mongoose.Promise = global.Promise
mongoose.connect(`mongodb://${MONGO_USER}:${MONGO_PASS}@db:${MONGO_PORT}/${MONGO_DB_NAME}`, {useNewUrlParser: true})

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

routes(app)

app.listen(PORT, () =>{
  const banner = `
  TTTTTTTTTTTTTTTTTTTTTTT     OOOOOOOOO     DDDDDDDDDDDDD             OOOOOOOOO                         AAA               PPPPPPPPPPPPPPPPP   IIIIIIIIII
  T:::::::::::::::::::::T   OO:::::::::OO   D::::::::::::DDD        OO:::::::::OO                      A:::A              P::::::::::::::::P  I::::::::I
  T:::::::::::::::::::::T OO:::::::::::::OO D:::::::::::::::DD    OO:::::::::::::OO                   A:::::A             P::::::PPPPPP:::::P I::::::::I
  T:::::TT:::::::TT:::::TO:::::::OOO:::::::ODDD:::::DDDDD:::::D  O:::::::OOO:::::::O                 A:::::::A            PP:::::P     P:::::PII::::::II
  TTTTTT  T:::::T  TTTTTTO::::::O   O::::::O  D:::::D    D:::::D O::::::O   O::::::O                A:::::::::A             P::::P     P:::::P  I::::I  
          T:::::T        O:::::O     O:::::O  D:::::D     D:::::DO:::::O     O:::::O               A:::::A:::::A            P::::P     P:::::P  I::::I  
          T:::::T        O:::::O     O:::::O  D:::::D     D:::::DO:::::O     O:::::O              A:::::A A:::::A           P::::PPPPPP:::::P   I::::I  
          T:::::T        O:::::O     O:::::O  D:::::D     D:::::DO:::::O     O:::::O             A:::::A   A:::::A          P:::::::::::::PP    I::::I  
          T:::::T        O:::::O     O:::::O  D:::::D     D:::::DO:::::O     O:::::O            A:::::A     A:::::A         P::::PPPPPPPPP      I::::I  
          T:::::T        O:::::O     O:::::O  D:::::D     D:::::DO:::::O     O:::::O           A:::::AAAAAAAAA:::::A        P::::P              I::::I  
          T:::::T        O:::::O     O:::::O  D:::::D     D:::::DO:::::O     O:::::O          A:::::::::::::::::::::A       P::::P              I::::I  
          T:::::T        O::::::O   O::::::O  D:::::D    D:::::D O::::::O   O::::::O         A:::::AAAAAAAAAAAAA:::::A      P::::P              I::::I  
        TT:::::::TT      O:::::::OOO:::::::ODDD:::::DDDDD:::::D  O:::::::OOO:::::::O        A:::::A             A:::::A   PP::::::PP          II::::::II
        T:::::::::T       OO:::::::::::::OO D:::::::::::::::DD    OO:::::::::::::OO        A:::::A               A:::::A  P::::::::P          I::::::::I
        T:::::::::T         OO:::::::::OO   D::::::::::::DDD        OO:::::::::OO         A:::::A                 A:::::A P::::::::P          I::::::::I
        TTTTTTTTTTT           OOOOOOOOO     DDDDDDDDDDDDD             OOOOOOOOO          AAAAAAA                   AAAAAAAPPPPPPPPPP          IIIIIIIIII
  `
  console.log(banner)
  console.log(`your server is running on ${PORT}`)
})
