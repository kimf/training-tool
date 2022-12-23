import { Context } from '../../utils'

export const workout = {
  async createWorkout(parent, args, ctx: Context, info) {
    return ctx.db.mutation.createWorkout(
      { data: { ...args } },
      info,
    )
  },
}
