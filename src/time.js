import moment from 'moment'
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)
import 'chartjs-adapter-moment'

const context = document.getElementById('chartTime')

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
  font: {
    weight: '700',
    size: 20,
  },
  padding: {
    top: 10,
  },
}
const legend = {
  labels: {
    font: {
      weight: '500',
      size: 18,
    },
  },
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
      beginAtZero: true,
      ticks: {
        stepSize: 1,
      },
      ...axisMiscOptions,
    },
    x: {
      title: {
        display: true,
        text: 'Time',
        font: axisTitleFontOptions,
      },
      stacked: true,
      type: 'time',
      ticks: {
        source: 'data',
      },
      time: {
        round: 'hour',
        unit: 'hour',
        stepSize: 6,
        displayFormats: {
          hour: 'HH:mm',
        },
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
      label: 'Ozon',
      backgroundColor: '#7490F1B3',
      borderColor: '#7490F1B3',
      data: [
        {
          x: '2021-07-08T21:43:19.000Z',
          y: 1,
        },
        {
          x: '2021-07-09T01:43:19.000Z',
          y: 1,
        },
        {
          x: '2021-07-09T01:45:19.000Z',
          y: 1,
        },
        {
          x: '2021-07-09T01:46:19.000Z',
          y: 1,
        },
        {
          x: '2021-07-09T04:32:22.000Z',
          y: 1,
        },
        {
          x: '2021-07-09T05:43:19.000Z',
          y: 1,
        },
        {
          x: '2021-07-09T05:43:19.000Z',
          y: 1,
        },
      ],
    },
    {
      label: 'Nike RU',
      backgroundColor: '#FF8095B3',
      borderColor: '#FF8095B3',
      data: [
        {
          x: '2021-07-09T01:00:00.000Z',
          y: 2,
        },
        {
          x: '2021-07-09T01:10:22.000Z',
          y: 3,
        },
        {
          x: '2021-07-09T09:43:20.000Z',
          y: 4,
        },
      ],
    },
  ],
}

const image = new Image()
image.src = './sevan-only-logo.svg'

const bgTheme = {
  beforeDraw: chart => {
    if (image.complete) {
      const ctx = chart.ctx
      ctx.fillStyle = '#313336'
      ctx.fillRect(0, 0, chart.width, chart.height)
      const { top, left, width, height } = chart.chartArea
      const x = left + width / 2 - image.width / 2
      const y = top + height / 2 - image.height / 2
      ctx.drawImage(image, x, y)
    } else {
      image.onload = () => chart.draw()
    }
  },
}

Chart.defaults.color = '#8F9296'

const myChart = new Chart(context, {
  type: 'line',
  data,
  plugins: [bgTheme],
  options,
})
