import { shape, number, string } from 'prop-types'

export const measurementShape = shape({
  id: string.isRequired,
  date: string.isRequired,
  weight: number.isRequired,
  waist: number.isRequired,
  thigh: number.isRequired,
  hips: number.isRequired
})

export const workoutTemplateShape = shape({
  id: string.isRequired,
  type: string.isRequired,
  sport: string.isRequired,
  time: number.isRequired,
  km: number,
  notes: string,
  workout: shape()
})

export const workoutTypeShape = shape({
  id: string.isRequired,
  name: string.isRequired
})

export const sportShape = shape({
  id: string.isRequired,
  name: string.isRequired
})

export const workoutShape = shape({
  id: string.isRequired,
  plannedDate: string.isRequired,
  plannedKm: number,
  plannedMinutes: number.isRequired,
  plannedType: string.isRequired,
  plannedSport: string.isRequired,
  plannedInformation: string,
  activityData: string.isRequired,
  actualDate: string,
  actualKm: number,
  actualMinutes: number,
  actualType: string,
  actualSport: string
})
