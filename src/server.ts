import express, { Request, Response, NextFunction } from 'express'
import expressPino from 'express-pino-logger'
import HttpException from './components/exceptions/HttpException'
import UserRoutes from './components/users/UserRoutes'
import logger from './components/config/logger'

const app = express()

app.use(expressPino({
  logger: logger
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', UserRoutes)

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
  logger.info(`Example app listening at http://localhost:${port}`)
})
