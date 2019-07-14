/* eslint-disable no-undef */
import express from 'express'
import routes from './routes/task'
import bodyParser from 'body-parser'
import { connect } from './models/index'


const PORT = process.env.API_PORT

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

routes(app)

connect().then(() => {
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
})
