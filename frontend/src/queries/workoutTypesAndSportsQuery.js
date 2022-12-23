import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { arrayOf, bool, shape } from 'prop-types'

import { workoutTypeShape, sportShape } from '../proptypes'

const workoutTypesAndSportsQuery = gql`
  query workoutTypesAndSportsQuery {
    workoutTypes {
      id
      name
    }
    sports {
      id
      name
    }
  }
`

export default workoutTypesAndSportsQuery

export const withWorkoutTypesAndSportsQuery = graphql(workoutTypesAndSportsQuery)

export const workoutTypesAndSportsQueryProps = shape({
  data: shape({
    workoutTypes: arrayOf(workoutTypeShape),
    sports: arrayOf(sportShape),
    loading: bool
  })
})
