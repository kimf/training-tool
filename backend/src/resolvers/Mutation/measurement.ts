import { Context } from '../../utils'

export const measurement = {
  async createMeasurement(parent, args, ctx: Context, info) {
    return ctx.db.mutation.createMeasurement(
      { data: { ...args } },
      info,
    )
  },
}
