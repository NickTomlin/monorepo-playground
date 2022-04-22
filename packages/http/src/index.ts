import {request} from 'undici';

export class Client {
  async run () {
    const {body} = await request('https://httpbin.org/get')
    return body.json()
  }
}
