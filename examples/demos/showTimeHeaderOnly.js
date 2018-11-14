import React from 'react'
import PropTypes from 'prop-types'
import BigCalendar from 'react-big-calendar'
import events from '../events'
import dates from '../../src/utils/dates'

const allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

const allDayEvents = events.map((e, _) => {
  e.allDay = true

  return e
})

const ShowTimeHeaderOnly = ({ localizer }) => (
  <BigCalendar
    showTimeGridHeaderOnly={true}
    events={allDayEvents}
    views={allViews}
    defaultView={BigCalendar.Views.WEEK}
    step={60}
    showMultiDayTimes
    max={dates.add(dates.endOf(new Date(2015, 17, 1), 'day'), -1, 'hours')}
    defaultDate={new Date(2015, 3, 1)}
    localizer={localizer}
  />
)

ShowTimeHeaderOnly.propTypes = {
  localizer: PropTypes.object,
}

export default ShowTimeHeaderOnly
