const supertest = require('supertest')
const app = require('../src/server')

describe('Users endpoint', () => {
    describe('POST /users', () => {
        it('should allow new users to be created', async () => {
            const request = {
                email: 'test@testemail.com',
                username: 'TestUsername',
                password: 'TestPassword1!'
              }

              const response = await supertest(app).post('/users').send(request)
              const { user } = response.body
              expect(user.username).toEqual('TestUsername')
              expect(user.email).toEqual('test@testemail.com')
        })

        it('should reject requests to create a user with a username that already exists', async () => {
            const request = {
                email: 'test@testemail.com',
                username: 'TestUsername',
                password: 'TestPassword1!'
              }

              await supertest(app).post('/users').send(request)
              const response = await supertest(app).post('/users').send(request)
              expect(response.status).toEqual(400)
              expect(response.body.error).toEqual('User already exists with that username')
        })
    })
})