import React from 'react'
import { func } from 'prop-types'
import { withState, withHandlers, compose } from 'recompose'

import { withCreateWorkoutTemplateMutation } from '../../mutations/createWorkoutTemplateMutation'
import {
  workoutTypesAndSportsQueryProps,
  withWorkoutTypesAndSportsQuery
} from '../../queries/workoutTypesAndSportsQuery'

const NewWorkout = ({ data, state, setFormState, save }) => {
  if (data.loading) {
    return null
  }

  return (
    <div className="form">
      <label>
        Sport:
        <select value={state.sport} onChange={e => setFormState({ sport: e.target.value })}>
          <option>....</option>
          {data.sports.map(sport => (
            <option key={sport.id} value={sport.name}>
              {sport.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Typ av träning:
        <select value={state.type} onChange={e => setFormState({ type: e.target.value })}>
          <option>....</option>
          {data.workoutTypes.map(wt => (
            <option key={wt.id} value={wt.name}>
              {wt.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Tid <small>minuter</small>:
        <input
          type="number"
          value={state.time || 0}
          step="5"
          onChange={e => setFormState({ time: e.target.value })}
        />
      </label>
      <label>
        Km <small>hmm?</small>:
        <input
          type="number"
          value={state.km || ''}
          onChange={e => setFormState({ km: e.target.value })}
        />
      </label>
      <label>
        Info:
        <textarea onChange={e => setFormState({ notes: e.target.value })}>{state.notes}</textarea>
      </label>
      <button onClick={save}>SPARA</button>
    </div>
  )
}

NewWorkout.propTypes = {
  onDone: func.isRequired,
  data: workoutTypesAndSportsQueryProps.isRequired,
  save: func.isRequired
}

export default compose(
  withCreateWorkoutTemplateMutation,
  withWorkoutTypesAndSportsQuery,
  withState('state', 'setFormState', {}),
  withHandlers({
    setFormState: ({ state, setFormState }) => e => setFormState({ ...state, ...e }),
    save: ({ state, onDone, createWorkoutTemplate }) => async () => {
      const { type, sport, time, km, notes, workout } = state
      await createWorkoutTemplate(type, sport, parseFloat(time), parseFloat(km), notes, workout)
      onDone()
    }
  })
)(NewWorkout)
