import React, { Component } from 'react';
function DayView(props) {
	console.log('dayview', props.state);
	return (
		<div>
			<h1>Maandag 6 December</h1>
			<ul class='dayview'>{props.dayView}</ul>
		</div>
	);
}

export default DayView;
