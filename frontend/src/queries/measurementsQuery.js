import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { arrayOf, bool, shape } from 'prop-types'

import { measurementShape } from '../proptypes'

const measurementsQuery = gql`
  query measurementsQuery {
    measurements {
      id
      date
      weight
      waist
      thigh
      hips
    }
  }
`

export default measurementsQuery

export const withMeasurementsQuery = graphql(measurementsQuery)

export const measurementQueryProps = shape({
  data: shape({
    measurements: arrayOf(measurementShape),
    loading: bool
  })
})
