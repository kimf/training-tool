import React from 'react'
import { string } from 'prop-types'

import { sportColors } from '../lib/colors'

const Dot = ({ color }) => (
  <svg height="10" width="10" style={{ marginRight: 10 }}>
    <circle cx="5" cy="5" r="5" fill={color} />
  </svg>
)

Dot.propTypes = {
  color: string.isRequired
}

const Legend = () => (
  <ul className="legend">
    <li style={{ color: sportColors.Running }}>
      <Dot color={sportColors.Running} />Löpning
    </li>
    <li style={{ color: sportColors.Cycling }}>
      <Dot color={sportColors.Cycling} />Cykel
    </li>
    <li style={{ color: sportColors.Swimming }}>
      <Dot color={sportColors.Swimming} />Simning
    </li>
    <li style={{ color: sportColors['Cross Country Skiing'] }}>
      <Dot color={sportColors['Cross Country Skiing']} />Skidor
    </li>
    <li style={{ color: sportColors.Strength }}>
      <Dot color={sportColors.Strength} />Styrka
    </li>
    <li style={{ color: sportColors.Flexibility }}>
      <Dot color={sportColors.Flexibility} />Smidighet
    </li>
  </ul>
)

export default Legend
