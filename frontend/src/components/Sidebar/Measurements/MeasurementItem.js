import React from 'react'
import { string, shape, oneOf } from 'prop-types'

import { measurementShape } from '../../../proptypes'

export const colors = {
  weight: '#8884d8',
  waist: '#82ca9d',
  thigh: '#4a90e2',
  hips: '#29858f'
}

const getPercentageChange = (oldNumber, newNumber) => {
  const decreaseValue = oldNumber - newNumber
  return (decreaseValue / oldNumber * 100).toFixed(2)
}

const presentNumber = toPresent => (toPresent > 0 ? '+' + toPresent : '' + toPresent)

const MeasurementItem = ({ mt, first, last }) => (
  <tr style={{ color: colors[mt.key] }}>
    <td>{mt.title}</td>
    <td>
      <strong>
        {last[mt.key]} {mt.unit}
      </strong>
    </td>
    <td>
      {presentNumber((last[mt.key] - first[mt.key]).toFixed(1))} {mt.unit}
    </td>
    <td>{presentNumber(getPercentageChange(last[mt.key], first[mt.key]))} %</td>
  </tr>
)

MeasurementItem.propTypes = {
  mt: shape({
    title: string.isRequired,
    key: oneOf(['weight', 'waist', 'thigh', 'hips']).isRequired,
    unit: string.isRequired
  }).isRequired,
  first: measurementShape.isRequired,
  last: measurementShape.isRequired
}

export default MeasurementItem
