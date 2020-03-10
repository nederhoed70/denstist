import React, { Component } from 'react';
import CalendarDays from './CalendarDays';
function CalendarView(props) {
	return (
		<div>
			{' '}
			<div className='calendarview'>
				<div className='header'>
					<div>Maandag</div>
					<div>Dinsdag</div>
					<div>Woensdag</div>
					<div>Donderdag</div>
					<div>Vrijdag</div>
				</div>
				<div className='table'>
					<CalendarDays items={props} getDay={props.getDay} />
				</div>
			</div>
		</div>
	);
}

export default CalendarView;
