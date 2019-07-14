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
const BASE_URL = `api:${process.env.API_PORT}`
const expect = chai.expect

chai.use(chaiHttp)
chai.should()

describe('POST /tasks', () => {
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

  it('OK, Create new task is success', (done) => {
    chai.request(BASE_URL)
      .post('/tasks')
      .send({name: 'example'})
      .end((err, res) => {
        res.should.have.status(201)
        res.body.should.be.a('object')
        expect(res.body.name).to.equal('example')
        expect(res.body.is_finished).to.not.equal(true)
        done()
      })
  })

  it('OK, Create new task is failure', (done) => {
    chai.request(BASE_URL)
      .post('/tasks')
      .end((err, res) => {
        res.should.have.status(400)
        done()
      })
  })

})