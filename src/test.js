const moment = require('moment')

const data = require('./data')

const firstDataArr = data.objects[0].data

for (const date of firstDataArr) {
  console.log(moment().diff(date))
}
