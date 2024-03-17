type ENV = 'dev' | 'stag' | 'prod'

const env: ENV = document.documentElement.dataset.env as ENV

// const host = location.host
// if (host.indexOf('localhost') > -1) {
//   env = 'dev'
// } else if (host.includes('test')) {
//   env = 'stag'
// } else {
//   env = 'prod'
// }

interface Options {
  BASE_URL: string
  MOCK: boolean
  MOCK_URL?: string
}
const config: Record<ENV, Options> = {
  dev: {
    BASE_URL: '/api',
    MOCK: true,
    MOCK_URL: 'www.mock.com'
  },
  stag: {
    BASE_URL: 'http://www.stag.com',
    MOCK: false
  },
  prod: {
    BASE_URL: '/prod',
    MOCK: true
  }
}

export default {
  env,
  ...config[env]
}
