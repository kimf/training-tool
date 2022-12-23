import React from 'react'
import CalendarHeatmap from 'react-calendar-heatmap'
import './heatmap.css'

const classForValue = value => {
  if (!value) {
    return 'color-empty'
  }
  return `color-scale-${value.count}`
}

const values = [
  { date: '2017-12-28', count: 1 },
  { date: '2017-12-31', count: 1 },
  { date: '2017-12-27', count: -1 }
]

const Heatmap = () => (
  <CalendarHeatmap
    startDate={new Date('2017-06-01')}
    endDate={new Date('2017-12-31')}
    values={values}
    classForValue={classForValue}
    gutterSize={2}
  />
)

export default Heatmap
