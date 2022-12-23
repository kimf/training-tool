import React from 'react'
import { bool, func } from 'prop-types'
import { compose } from 'recompose'

import NewWorkout from './NewWorkout'
import WorkoutTemplateItem from './WorkoutTemplateItem'
import {
  workoutTemplatesQueryProps,
  withWorkoutTemplatesQuery
} from '../../queries/workoutTemplatesQuery'
import withToggle from '../../lib/withToggle'

const WorkoutList = ({ data, toggledOn, toggle }) => {
  if (data.loading) {
    return null
  }

  return (
    <div className="workoutlist">
      <header>
        <h3>Träningspass</h3>
        <button onClick={toggle}>{toggledOn ? 'STÄNG' : 'SKAPA NYTT'}</button>
      </header>
      {toggledOn && <NewWorkout onDone={toggle} />}
      <ul>
        {data.workoutTemplates.map(wt => <WorkoutTemplateItem key={wt.id} workoutTemplate={wt} />)}
      </ul>
    </div>
  )
}

WorkoutList.propTypes = {
  data: workoutTemplatesQueryProps.isRequired,
  toggledOn: bool.isRequired,
  toggle: func.isRequired
}

export default compose(withWorkoutTemplatesQuery, withToggle)(WorkoutList)
