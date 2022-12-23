import React from 'react'
import { func } from 'prop-types'
import { withState, withHandlers, compose } from 'recompose'
import moment from 'moment'
import { measurementShape } from '../../../proptypes'

import { withCreateMeasurementMutation } from '../../../mutations/createMeasurementMutation'

const AddMeasurement = ({ state, setFormState, save }) => (
  <div className="form">
    <label>
      Datum:
      <input
        type="date"
        value={moment(state.newDate).format('YYYY-MM-DD')}
        onChange={e => setFormState({ newDate: e.target.value })}
      />
    </label>
    <label>
      Vikt:
      <input
        type="number"
        step="0.1"
        value={state.weight}
        onChange={e => setFormState({ weight: e.target.value })}
      />
    </label>
    <label>
      Mage:
      <input
        type="number"
        step="0.1"
        value={state.waist}
        onChange={e => setFormState({ waist: e.target.value })}
      />
    </label>
    <label>
      Höft:
      <input
        type="number"
        step="0.1"
        value={state.hips}
        onChange={e => setFormState({ hips: e.target.value })}
      />
    </label>
    <label>
      Lår:
      <input
        type="number"
        step="0.1"
        value={state.thigh}
        onChange={e => setFormState({ thigh: e.target.value })}
      />
    </label>
    <button onClick={save}>SPARA</button>
  </div>
)

AddMeasurement.propTypes = {
  last: measurementShape.isRequired,
  onDone: func.isRequired,
  save: func.isRequired
}

export default compose(
  withCreateMeasurementMutation,
  withState('state', 'setFormState', ({ last }) => ({ ...last, newDate: last.date })),
  withHandlers({
    setFormState: ({ state, setFormState }) => e => setFormState({ ...state, ...e }),
    save: ({ state, onDone, createMeasurement }) => async () => {
      const { newDate, weight, waist, hips, thigh } = state
      await createMeasurement(
        moment(newDate),
        parseFloat(weight),
        parseFloat(waist),
        parseFloat(hips),
        parseFloat(thigh)
      )
      onDone()
    }
  })
)(AddMeasurement)
