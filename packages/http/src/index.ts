import {fetch} from 'undici';

export class Client {
  async run () {
    const res = await fetch('https://httpbin.org/get')
    return res.json()
  }
}
