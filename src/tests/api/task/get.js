
import chai from 'chai'
import chaiHttp from 'chai-http'

import { 
  after ,
  before, 
  describe,
  it,
} from 'mocha'

import { connect, close } from '../../../models'

// eslint-disable-next-line no-undef
const BASE_URL = `${process.env.API_HOST}:${process.env.API_PORT}`

chai.use(chaiHttp)
chai.should()

describe('GET /tasks', () => {
  before((done) => {
    connect()
      .then(() => done())
      .catch((err) => done(err))
  })

  after((done) => {
    close()
      .then(() => done())
      .catch((err) => done(err))
  })

  it('OK, fetching all task data.', (done) => {
    chai.request(BASE_URL)
      .get('/tasks')
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('array')
        done()
      })
  })

})