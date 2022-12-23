import { Context } from '../../utils'

export const workoutTemplate = {
  async createWorkoutTemplate(parent, args, ctx: Context, info) {
    return ctx.db.mutation.createWorkoutTemplate(
      { data: { ...args } },
      info,
    )
  },
}
