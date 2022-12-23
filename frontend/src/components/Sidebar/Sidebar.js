import React, { Fragment } from 'react'
import { bool, func } from 'prop-types'

import WorkoutList from './WorkoutList'
import Heatmap from './Heatmap'
import Measurements from './Measurements/Measurements'
import Goals from './Goals'
import withToggle from '../../lib/withToggle'

const Sidebar = ({ toggledOn, toggle }) => (
  <div className="sidebar">
    {!toggledOn && <WorkoutList />}
    {toggledOn && (
      <Fragment>
        <h2>Sammanfattning</h2>
        <Heatmap />
        <hr />
        <Goals />
        <hr />
        <Measurements />
      </Fragment>
    )}
    <hr />
    <button onClick={toggle}>{toggledOn ? 'VISA SAMMANFATTNING' : 'SCHEMALÄGG'}</button>
  </div>
)

Sidebar.propTypes = {
  toggledOn: bool.isRequired,
  toggle: func.isRequired
}

export default withToggle(Sidebar)
