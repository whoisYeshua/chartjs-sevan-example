import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)
import '/index.css'
import { chartjsColorScheme } from './chartjsColorScheme'
import './time.js'

console.log(chartjsColorScheme)
const ctx = document.getElementById('myChart')

const axisTitleFontOptions = {
  weight: '600',
  size: 16,
}
const axisMiscOptions = {
  grid: {
    color: '#8F929640',
    borderColor: '#8F929640',
    tickColor: '#8F929640',
  },
  ticks: {
    font: {
      weight: '500',
      size: 16,
    },
  },
}
const title = {
  display: true,
  text: 'Checkouts - 08.07.2021',
  color: '#FFAB80',
  font: {
    weight: '700',
    size: 20,
  },
  padding: {
    top: 10,
  },
}
const legend = {
  display: false,
}
const line = {
  tension: 0.3,
  borderWidth: 5,
}
const point = {
  pointStyle: 'circe',
  radius: 2, // set 0 to disable
}

const options = {
  animation: false,
  responsive: false,
  scales: {
    y: {
      title: {
        display: true,
        text: 'Value',
        font: axisTitleFontOptions,
      },
      ...axisMiscOptions,
    },
    x: {
      title: {
        display: true,
        text: 'Store',
        font: axisTitleFontOptions,
      },
      ...axisMiscOptions,
    },
  },
  plugins: {
    title,
    legend,
  },
  elements: {
    line,
    point,
  },
}

const data = {
  datasets: [
    {
      label: 'Chekouts',
      categoryPercentage: 0.4,
      backgroundColor: [],
      data: [],
    },
  ],
}

const incomingAraay = [
  {
    name: 'OZON',
    value: 34,
  },
  {
    name: 'NIKE_RU',
    value: 12,
  },
]

for (const incomingData of incomingAraay) {
  const storeScheme = chartjsColorScheme[incomingData.name]
  const dataset = data.datasets[0]
  dataset.data.push({
    x: storeScheme.name,
    y: incomingData.value,
  })
  dataset.backgroundColor.push(storeScheme.color)
}

const image = new Image()
image.src = './sevan-only-logo.svg'

const bgTheme = {
  beforeDraw: chart => {
    if (image.complete) {
      const ctx = chart.ctx
      console.log(ctx)
      ctx.fillStyle = '#313336'
      ctx.fillRect(0, 0, chart.width, chart.height)
      const { top, left, width, height } = chart.chartArea
      console.log(top)
      console.log(left)
      console.log(width)
      console.log(height)
      const x = left + width / 2 - image.width / 2
      const y = top + height / 2 - image.height / 2
      console.log('x:', x)
      console.log('y:', y)
      ctx.drawImage(image, x, y)
    } else {
      image.onload = () => chart.draw()
    }
  },
}

Chart.defaults.color = '#8F9296'

console.log(data)

const myChart = new Chart(ctx, {
  type: 'bar',
  data,
  plugins: [bgTheme],
  options,
})
