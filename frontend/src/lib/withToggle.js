import { compose, withState, withHandlers } from 'recompose'

const withToggle = compose(
  withState('toggledOn', 'toggle', false),
  withHandlers({
    toggle: ({ toggle }) => e => toggle(current => !current)
  })
)

export default withToggle
