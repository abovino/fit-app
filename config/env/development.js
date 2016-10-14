'use strict'

module.exports = {
  db: 'mongodb://' + (process.env.DB_PORT_27017_TCP_ADDR || 'localhost') + '/git-fit-TEST',
  debug: true,
  logging: {
    format: 'tiny'
  },
  //  aggregate: 'whatever that is not false, because boolean false value turns aggregation off', //false
  aggregate: false,
  mongoose: {
    debug: false
  },
  hostname: 'http://localhost:3000',
  app: {
    name: 'MEAN - A Modern Stack - Development'
  },
  strategies: {
    local: {
      enabled: true
    },
    landingPage: '/',
    fitbit: {
      clientID: '22828X',
      clientSecret: 'd24dfc6f7bb64f374459e04747b67cf8',
      callbackURL: 'http://localhost:3000/api/auth/fitbit/callback',
      enabled: true
    },
    twitter: {
      clientID: 'DEFAULT_CONSUMER_KEY',
      clientSecret: 'CONSUMER_SECRET',
      callbackURL: 'http://localhost:3000/api/auth/twitter/callback',
      enabled: true
    },
    github: {
      clientID: 'e7088cbdb9f7151b1c19',
      clientSecret: 'ead29cdd536a555d78a8fb2e37cfed16f931cd00',
      callbackURL: 'http://localhost:3000/api/auth/github/callback',
      enabled: true
    },
    google: {
      clientID: 'DEFAULT_APP_ID',
      clientSecret: 'APP_SECRET',
      callbackURL: 'http://localhost:3000/api/auth/google/callback',
      enabled: true
    },
    linkedin: {
      clientID: 'DEFAULT_API_KEY',
      clientSecret: 'SECRET_KEY',
      callbackURL: 'http://localhost:3000/api/auth/linkedin/callback',
      enabled: true
    }
  },
  emailFrom: 'SENDER EMAIL ADDRESS', // sender address like ABC <abc@example.com>
  mailer: {
    service: 'SERVICE_PROVIDER', // Gmail, SMTP
    auth: {
      user: 'EMAIL_ID',
      pass: 'PASSWORD'
    }
  },
  secret: 'SOME_TOKEN_SECRET'
}
