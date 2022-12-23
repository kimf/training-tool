import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { arrayOf, bool, shape } from 'prop-types'

import { workoutTemplateShape } from '../proptypes'

const workoutTemplatesQuery = gql`
  query workoutTemplatesQuery {
    workoutTemplates {
      id
      type
      sport
      time
      km
      notes
      workout
    }
  }
`

export default workoutTemplatesQuery

export const withWorkoutTemplatesQuery = graphql(workoutTemplatesQuery)

export const workoutTemplatesQueryProps = shape({
  data: shape({
    workoutTemplates: arrayOf(workoutTemplateShape),
    loading: bool
  })
})
