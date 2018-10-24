import express from 'express'
import {Gpio} from 'onoff'

console.log({Gpio})

const app = express()
const port = 3000
const led = new Gpio(21, 'out')

led.writeSync(0)

app.get('/', (req, res) => {
  console.log('message')
  led.writeSync(1)
}) 
app.listen(port, () => { 
})
