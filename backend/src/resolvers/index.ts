import { Query } from './Query'
import { workout } from './Mutation/workout'
import { measurement } from './Mutation/measurement'
import { workoutTemplate } from './Mutation/workoutTemplate'

export default {
  Query,
  Mutation: {
    ...workout,
    ...measurement,
    ...workoutTemplate
  },
}
