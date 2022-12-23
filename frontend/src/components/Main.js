import React from 'react'
import moment from 'moment'
import { compose, withState, lifecycle } from 'recompose'

import ScrollingCalendar from './ScrollingCalendar'
import { withWorkoutsQuery, workoutsQueryProps } from '../queries/workoutsQuery'

const onVisibleRangeChanged = ({ start, stop }) =>
  console.log(`VISIBLE RANGE CHANGED ${start} - ${stop}`)

const refreshEvents = ({ start, stop }) => console.log(`REFRESH EVENTS ${start} - ${stop}`)

const Main = ({ stop, events, setEvents }) => {
  // const refreshEvents = async ({ start, stop }) => {
  //   console.log(`REFRESHING EVENT ${start} - ${stop}`)
  //   await data.refetch({ start, stop })
  // }

  console.log('...... MAIN RENDERED...', events)

  return (
    <div
      style={{
        height: '100%',
        float: 'left',
        width: '100%'
      }}>
      <ScrollingCalendar
        visibleWeekCount={10}
        key={events.length}
        events={events}
        min="2017-04-01"
        max={stop}
        onVisibleRangeChanged={onVisibleRangeChanged}
        onLoadEvents={refreshEvents}
      />
    </div>
  )
}

Main.propTypes = {
  data: workoutsQueryProps.isRequired
}

export default compose(
  withWorkoutsQuery,
  withState('events', 'setEvents', []),
  lifecycle({
    componentWillReceiveProps(nextProps) {
      console.log('componentWillReceiveProps')
      const { events, setEvents, data: { workouts, loading } } = nextProps
      if (!loading) {
        if (events.length !== workouts.length) {
          const newEvents = workouts.map(wo => ({
            id: wo.id,
            sport: wo.plannedSport,
            start: moment(wo.plannedDate).startOf('day'),
            end: moment(wo.plannedDate).startOf('day'),
            title: [wo.plannedType, `${wo.plannedMinutes} min`, wo.plannedInformation]
              .filter(String)
              .join(', '),
            expanded: true
          }))
          setEvents(newEvents)
        }
      }
    }
  })
)(Main)
