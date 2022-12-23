import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { compose, withState, withHandlers } from 'recompose'

import eventShape from './proptypes/eventShape'
import Event from './Event'

import { withCreateWorkoutMutation } from '../../mutations/createWorkoutMutation'

const dayStyle = props =>
  Object.assign(
    {
      position: 'relative',
      flex: '1'
    },
    props.isPast && { opacity: '0.3' }
  )

const dateWrapperStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  overflow: 'visible'
}

const dateTextStyle = {
  display: 'block',
  padding: '4px'
}

const dragOver = event => {
  event.preventDefault()
  return false
}

let originalBorder
const dragEnter = event => {
  originalBorder = event.target.style.border
  event.target.style.border = '2px dashed #ff0000'
}

const dragLeave = event => (event.target.style.border = originalBorder)

const drop = (isPast, event, addDraggedEvent, date) => {
  if (isPast) {
    event.preventDefault()
    return false
  }

  const data = JSON.parse(event.dataTransfer.getData('application/json'))
  addDraggedEvent(date, data)
  event.target.style.border = originalBorder
  event.preventDefault()
  return false
}

const Day = ({
  isPast,
  isCurrentMonth,
  isToday,
  events,
  date,
  onEventClick,
  eventRenderer,
  addDraggedEvent
}) => (
  <li
    onDragOver={isPast ? null : dragOver}
    onDragLeave={isPast ? null : dragLeave}
    onDragEnter={isPast ? null : dragEnter}
    onDrop={event => drop(isPast, event, addDraggedEvent, date)}
    style={dayStyle({ isPast })}
    className={getDayClass({ isPast, isCurrentMonth, isToday })}>
    {events.length ? renderDayEvents(events, date) : renderDateText(date)}
  </li>
)

const renderDateText = date => (
  <span style={dateTextStyle} className="date">
    {date.format('MMM D')}
  </span>
)

const renderDayEvents = (events, date, onEventClick, eventRenderer) => (
  <div style={dateWrapperStyle}>
    {renderDateText(date)}
    {events.map(ev => (
      <Event key={ev.id} event={ev} onEventClick={onEventClick} eventRenderer={eventRenderer} />
    ))}
  </div>
)

const getDayClass = ({ isPast, isCurrentMonth, isToday }) => {
  let cls = 'day'
  if (isPast) cls += ' past'
  if (isToday) cls += ' today'
  if (isCurrentMonth) cls += ' current'
  return cls
}

Day.propTypes = {
  date: PropTypes.instanceOf(moment).isRequired,
  events: PropTypes.arrayOf(eventShape).isRequired,
  isPast: PropTypes.bool.isRequired,
  isToday: PropTypes.bool.isRequired,
  isCurrentMonth: PropTypes.bool.isRequired,
  eventRenderer: PropTypes.func,
  onEventClick: PropTypes.func,
  addDraggedEvent: PropTypes.func.isRequired
}
export default compose(
  withCreateWorkoutMutation,
  withState('events', 'setEvents', ({ events }) => events),
  withHandlers({
    addDraggedEvent: props => async (date, event) => {
      // const newEvent = {
      //   id: String(faker.random.uuid()),
      //   start: date.set({ hour: 6, minute: 0 }),
      //   end: date.set({ hour: 23, minute: 0 }),
      //   sport: event.sport,
      //   title: [event.type, `${event.time} min`, event.notes].filter(String).join(', '),
      //   expanded: true
      // }
      await props.createWorkout(
        date.format('YYYY-MM-DD'),
        event.time,
        event.type,
        event.sport,
        event.km,
        event.notes
      )
      // props.setEvents([...props.events, newEvent])
    }
  })
)(Day)
