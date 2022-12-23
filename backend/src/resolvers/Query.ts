import { Context } from '../utils'

export const Query = {
  workouts(parent, args, ctx: Context, info) {
    return ctx.db.query.workouts({ orderBy: 'plannedDate_ASC' }, info)
  },
  workoutsBetweenDates(parent, args, ctx: Context, info) {
    return ctx.db.query.workouts(
      {
        where: { plannedDate_gte: args.start, plannedDate_lte: args.stop},
        orderBy: 'plannedDate_ASC'
      },
      info
    )
  },
  measurements(parent, args, ctx: Context, info) {
    return ctx.db.query.measurements({ orderBy: 'date_ASC' }, info)
  },
  workoutTemplates(parent, args, ctx: Context, info) {
    return ctx.db.query.workoutTemplates({ orderBy: 'sport_ASC' }, info)
  },
  workoutTypes(parent, args, ctx: Context, info) {
    return ctx.db.query.workoutTypes({ orderBy: 'name_ASC' }, info)
  },
  sports(parent, args, ctx: Context, info) {
    return ctx.db.query.sports({}, info)
  },
}
