import PropTypes from 'prop-types'
import moment from 'moment'

import eventShape from './eventShape'

export default PropTypes.shape({
  date: PropTypes.instanceOf(moment),
  events: PropTypes.arrayOf(eventShape).isRequired
})
