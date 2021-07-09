import Chart from 'chart.js/auto'
import '/index.css'
import dataJSON from './data.json'

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
      ...axisMiscOptions,
    },
    x: {
      title: {
        display: true,
        text: 'Time',
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

const labels = [
  '00:00',
  '01:00',
  '02:00',
  '03:00',
  '04:00',
  '05:00',
  '06:00',
  '07:00',
  '08:00',
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',
  '23:00',
  '24:00',
]
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Ozon',
      backgroundColor: '#7490F1B3',
      borderColor: '#7490F1B3',
      data: [
        0, 0, 6, 2, 2, 3, 5, 0, 0, 6, 2, 2, 3, 5, 0, 0, 6, 2, 2, 3, 5, 0, 6, 2,
      ],
    },
    {
      label: 'Nike RU',
      backgroundColor: '#FF8095B3',
      borderColor: '#FF8095B3',
      data: [25, 25, 27, 23, 20, 15, 12, 10, 8, 5, 1, 3, 7],
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

const myChart = new Chart(ctx, {
  type: 'line',
  data,
  plugins: [bgTheme],
  options,
})
