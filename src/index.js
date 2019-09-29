'use strict'
import Launcher from '@wdio/cli'

let conf = './wdio.conf.js'
let suite = process.argv[2] || ['default']

const wdio = new Launcher(conf, { suite: [suite] })

wdio.run().then((code) => {
  process.exit(code)
}, (error) => {
  if (!error) {
    process.exit(0)
  } else {
    console.error('Launcher failed to start the test', error.stacktrace)
    process.exit(1)
  }
})

