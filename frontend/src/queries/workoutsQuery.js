import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { arrayOf, bool, shape } from 'prop-types'

import { workoutShape } from '../proptypes'

const workoutsQuery = gql`
  query workoutsQuery($start: String!, $stop: String!) {
    workouts: workoutsBetweenDates(start: $start, stop: $stop) {
      id
      plannedDate
      plannedKm
      plannedMinutes
      plannedType
      plannedSport
      plannedInformation
      activityData
      actualDate
      actualKm
      actualMinutes
      actualType
      actualSport
    }
  }
`

export default workoutsQuery

export const withWorkoutsQuery = graphql(workoutsQuery, {
  options: ({ start, stop }) => ({
    variables: { start: start.format('YYYY-MM-DD'), stop: stop.format('YYYY-MM-DD') }
  })
})

export const workoutsQueryProps = shape({
  data: shape({
    workouts: arrayOf(workoutShape),
    loading: bool
  })
})
