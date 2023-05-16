import express, { Application} from 'express'
import cors from 'cors'

const app:Application = express()

// application route 
import userRoutes from './app/modules/user/user.route';

// using cors 
app.use(cors())

// purse data 
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// api calling 
app.use('/api/v1/user', userRoutes)

export default app;