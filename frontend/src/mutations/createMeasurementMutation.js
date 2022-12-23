import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
// import update from 'immutability-helper'

const createMeasurementMutation = gql`
  mutation createMeasurement(
    $date: DateTime!
    $weight: Float!
    $waist: Float!
    $hips: Float!
    $thigh: Float!
  ) {
    createMeasurement(date: $date, weight: $weight, waist: $waist, hips: $hips, thigh: $thigh) {
      id
      date
      weight
      waist
      hips
      thigh
    }
  }
`

export default createMeasurementMutation

export const withCreateMeasurementMutation = graphql(createMeasurementMutation, {
  props: ({ mutate }) => ({
    createMeasurement: (date, weight, waist, hips, thigh) =>
      mutate({
        variables: { date, weight, waist, hips, thigh },
        refetchQueries: ['measurementsQuery']
      })
  })
})

// updateQueries: {
//   mutations: (prev, { mutationResult }) => {
//     const newMs = mutationResult.data.createMeasurement
//     console.log(newMs)
//     return update(prev, {
//       measurementsQuery: {
//         measurements: { $push: [newMs] }
//       }
//     })
//   }
// }
