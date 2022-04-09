import {fetch} from 'undici';

export class Client {
  async run () {
    const res = await fetch('https://httbin.org/get')
    return res.json()
  }
}
