import pino from 'pino'

const transport = pino.transport({
  targets: [{
    level: 'info',
    target: 'pino/file',
    options: {
      destination: 'logs/application',
      mkdir: true
    }
  }, {
    level: 'info',
    target: 'pino-pretty',
    options: {}
  }]
})
export default pino(transport)
