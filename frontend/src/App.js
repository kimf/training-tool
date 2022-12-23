import React from 'react'
import moment from 'moment'

import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header'
import Main from './components/Main'

const start = moment('2017-04-01')
const stop = moment()
  .endOf('year')
  .add(2, 'years')

const App = () => (
  <React.Fragment>
    <Header />
    <div className="wrapper">
      <Sidebar />
      <div className="main">
        <Main start={start} stop={stop} />
      </div>
    </div>
  </React.Fragment>
)

export default App
