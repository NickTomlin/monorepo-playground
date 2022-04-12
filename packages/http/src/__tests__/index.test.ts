import {Client} from "../index"
import {MockAgent, setGlobalDispatcher} from "undici"
import test from 'ava'

function setup () {
  const mockAgent = new MockAgent()
  const mockPool = mockAgent.get('https://httpbin.org')
  setGlobalDispatcher(mockAgent)
  mockAgent.disableNetConnect()
  return { mockPool }
}

const {mockPool} = setup()

test('basic mocking tests', async (t) => {
  mockPool
    .intercept({ path: '/get'})
    .reply(200, JSON.stringify({ hi: "there"}))
  const client = new Client()
  const result = await client.run()
  t.like({ hi: "there"}, result)
})
