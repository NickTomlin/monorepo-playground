#!/usr/bin/env node

import {main} from "../index"

main(process.argv[2] ?? "Default name")
  .then(result => console.log(result))
