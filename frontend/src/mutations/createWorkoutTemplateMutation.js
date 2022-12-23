import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const createWorkoutTemplateMutation = gql`
  mutation createWorkoutTemplate(
    $type: String!
    $sport: String!
    $time: Float!
    $km: Float
    $notes: String
    $workout: Json
  ) {
    createWorkoutTemplate(
      type: $type
      sport: $sport
      time: $time
      km: $km
      notes: $notes
      workout: $workout
    ) {
      type
      sport
      time
      km
      notes
      workout
    }
  }
`

export default createWorkoutTemplateMutation

export const withCreateWorkoutTemplateMutation = graphql(createWorkoutTemplateMutation, {
  props: ({ mutate }) => ({
    createWorkoutTemplate: (type, sport, time, km, notes, workout) => {
      console.log(type, sport, time, km, notes, workout)
      return mutate({
        variables: { type, sport, time, km, notes, workout },
        refetchQueries: ['workoutTemplatesQuery']
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
