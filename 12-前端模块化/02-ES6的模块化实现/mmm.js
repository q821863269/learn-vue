import {flag, Person} from "./aaa.js"

if (flag) {
    console.log('小明666')
}

const p = new Person()
p.run()

import addr from "./aaa.js"
console.log(addr)

import * as all from "./aaa.js"

console.log(all)