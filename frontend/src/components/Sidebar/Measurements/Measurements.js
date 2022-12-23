import React, { Fragment } from 'react'
import moment from 'moment'
import { compose } from 'recompose'
import { bool, func } from 'prop-types'
import {
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'

import { withMeasurementsQuery, measurementQueryProps } from '../../../queries/measurementsQuery'

import MeasurementItem, { colors } from './MeasurementItem'
import AddMeasurement from './AddMeasurement'
import withToggle from '../../../lib/withToggle'

const measurementTypes = [
  { title: 'Vikt', unit: 'kg', key: 'weight' },
  { title: 'Mage', unit: 'cm', key: 'waist' },
  { title: 'Höft', unit: 'cm', key: 'hips' },
  { title: 'Lår', unit: 'cm', key: 'thigh' }
]

const labelFormatter = label => moment(label).format('YYYY-MM-DD')

const Measurements = ({ data, toggledOn, toggle }) => {
  if (data.loading || !data.measurements) {
    return <h3>Laddar mätningar...</h3>
  }

  const last = [...data.measurements].pop()
  const first = data.measurements[0]

  return (
    <Fragment>
      <header>
        <h3>Mina mått</h3>
        <button onClick={toggle}>{toggledOn ? 'X' : '+'}</button>
      </header>
      {toggledOn && <AddMeasurement last={last} onDone={toggle} />}
      {!toggledOn && (
        <Fragment>
          <div style={{ height: '150px' }}>
            <ResponsiveContainer>
              <LineChart
                layout="horizontal"
                data={data.measurements}
                margin={{ top: 20, right: 0, bottom: 20, left: 0 }}>
                <XAxis
                  style={{ fontSize: 8 }}
                  dataKey="date"
                  tickFormatter={val => moment(val).format('D MMM')}
                />
                <YAxis type="number" width={20} style={{ fontSize: 8 }} domain={[70, 100]} />
                <Tooltip
                  itemStyle={{ fontSize: 12 }}
                  labelStyle={{ fontSize: 14 }}
                  labelFormatter={labelFormatter}
                />
                <ReferenceLine y={75} stroke="red" strokeDasharray="3 3" />
                <Line
                  animationDuration={1000}
                  animationEasing="ease-in-out"
                  dot={false}
                  key={`bar_weight`}
                  dataKey="weight"
                  fill={colors.weight}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <h4>
            Senaste mätning: <em>{moment(last.date).format('D MMMM YYYY')}</em>
          </h4>
          <table>
            <tbody>
              {measurementTypes.map(mt => (
                <MeasurementItem key={`tr_${mt.key}`} mt={mt} first={first} last={last} />
              ))}
            </tbody>
          </table>
        </Fragment>
      )}
    </Fragment>
  )
}

Measurements.propTypes = {
  data: measurementQueryProps.isRequired,
  toggledOn: bool.isRequired,
  toggle: func.isRequired
}

export default compose(withToggle, withMeasurementsQuery)(Measurements)
