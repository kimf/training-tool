import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const createWorkoutMutation = gql`
  mutation createWorkout(
    $plannedDate: DateTime!
    $plannedMinutes: Float!
    $plannedType: String!
    $plannedSport: String!
    $plannedKm: Float
    $plannedInformation: String
  ) {
    createWorkout(
      plannedDate: $plannedDate
      plannedMinutes: $plannedMinutes
      plannedType: $plannedType
      plannedSport: $plannedSport
      plannedKm: $plannedKm
      plannedInformation: $plannedInformation
    ) {
      id
      plannedDate
      plannedMinutes
      plannedType
      plannedSport
      plannedKm
      plannedInformation
    }
  }
`

export default createWorkoutMutation

export const withCreateWorkoutMutation = graphql(createWorkoutMutation, {
  props: ({ mutate }) => ({
    createWorkout: (
      plannedDate,
      plannedMinutes,
      plannedType,
      plannedSport,
      plannedKm,
      plannedInformation
    ) => {
      return mutate({
        variables: {
          plannedDate,
          plannedMinutes,
          plannedType,
          plannedSport,
          plannedKm,
          plannedInformation
        },
        refetchQueries: ['workoutsQuery']
      })
    }
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
