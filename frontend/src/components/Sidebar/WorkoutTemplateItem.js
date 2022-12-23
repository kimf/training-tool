import React from 'react'

import { workoutTemplateShape } from '../../proptypes'
import { sportColors } from '../../lib/colors'

const WorkoutTemplateItem = ({ workoutTemplate }) => (
  <li
    className="workoutTemplateItem"
    style={{ background: sportColors[workoutTemplate.sport] }}
    draggable="true"
    onDragStart={event =>
      event.dataTransfer.setData('application/json', JSON.stringify(workoutTemplate))
    }
    onDragEnd={event => console.log('Drag ended')}>
    {workoutTemplate.sport}
    &nbsp;-&nbsp;
    {workoutTemplate.type}
    &nbsp;-&nbsp;
    {workoutTemplate.time} min
    <br />
    <small>{workoutTemplate.notes}</small>
  </li>
)

WorkoutTemplateItem.propTypes = {
  workoutTemplate: workoutTemplateShape.isRequired
}

export default WorkoutTemplateItem
