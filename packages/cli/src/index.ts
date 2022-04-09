import {Client} from "@nicktomlin/mono-http"

async function greet (name: string) {
  const client = new Client()
  const res = await client.run()
  return `Hi ${name}. Here's an http thing:${res}`
}
console.log('Hi from cli')

greet(process.argv[2])
