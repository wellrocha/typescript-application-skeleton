import express, { Request, Response, NextFunction } from 'express'
import HttpException from './components/exceptions/HttpException'
// const logger = require('morgan')
import userRoutes from './components/users/UserRoutes'

const app = express()

// app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', userRoutes)

app.use((err: HttpException, _req: Request, res: Response, _next: NextFunction) => {
  const status = err instanceof HttpException ? err.status : 500
  const message = err.message

  res
    .status(status)
    .json({
      status,
      message
    })
})

const port = 8080
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
