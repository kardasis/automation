import express from 'express'
import {Gpio} from 'onoff'

console.log({Gpio})

const app = express()
const port = 3000
const led = new Gpio(21, 'out')

led.writeSync(0)

app.get('/heat/on', (req, res) => {
  console.log('turning heat on')
  led.writeSync(1)
  res.send('the heat is on')
})

app.get('/heat/off', (req, res) => {
  console.log('turning heat off')
  led.writeSync(0)
  res.send('the heat is off')
})

app.get('/heat/toggle', (req, res) => {
  let state = led.readSync()
  let newState = 1 - state
  console.log('old state : ' + state + '  ---  new state : ' + newState)
  console.log('toggling heat')
  led.writeSync(newState)
  if (newState) {
    res.send('the heat is on')
  } else { 
    res.send('the heat is off')
  }
})

app.listen(port, () => { 
  console.log('listening on port : ' + port)
  led.writeSync(0)
})
