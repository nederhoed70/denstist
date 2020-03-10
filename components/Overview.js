import React, { Component } from 'react';
import DayView from './DayView';
import CalendarView from './CalendarView';
import { fireEvent } from '@testing-library/react';

class Overview extends Component {
	constructor() {
		super();

		const patients = require('../Objects/patients.json');
		let id = 1;
		const patientsToState = patients.map(patient => ({
			id: id++,
			name: patient.name,
			surname: patient.surname,
			gender: patient.gender,
			dob: 2020 - patient.age,
			phone: patient.phone,
			email: patient.email.join,
			isIll: false
		}));
		const dentistsToState = require('../Objects/dentists.json');
		const assistantsToState = require('../Objects/assistants.json');

		const scheduleToState = {
			dayNumber: '',
			hour: '',
			patientToSchedule: '',
			dentistToSchedule: '',
			assistantToSchedule: '',
			treatmentToSchedule: '',
			isWeekend: ''
		};
		this.state = {
			dentists: { ...dentistsToState },
			assistants: { ...assistantsToState },
			patients: { ...patientsToState },
			schedule: { ...scheduleToState }
		};
	}

	getRandomPerson = roll => {
		let person = '';
		switch (roll) {
			case 'patient':
				person = this.state.patients[Math.floor(Math.random() * 50)];
				return person.name + ' ' + person.surname;
				break;
			case 'dentist':
				person = this.state.dentists[Math.floor(Math.random() * 4)];
				return person.name + ' ' + person.surname;
			case 'assistent':
				person = this.state.assistants[Math.floor(Math.random() * 2)];
				return person.name + ' ' + person.surname;
		}
	};

	getRandomTime = () => {
		let goodTime = false;
		let hour;
		while (goodTime === false) {
			hour = Math.floor(Math.random() * 24);
			if (hour > 7 && hour < 19) {
				goodTime = true;
			}
		}
		return hour + ':00u';
	};

	getDay = () => {
		for (let i = 1; i < 28; i++) {
			if ([6, 7, 13, 14, 20, 21, 27, 28].includes(i)) {
				continue;
			}
			const scheduledTime = this.getRandomTime();
			const day = [];
			day.push(i);

			return day;
		}
	};
	scheduleTime = () => {
		return this.getDay();
	};

	scheduleAppointment = () => {
		let randomPatient = this.getRandomPerson('patient');
		let randomDentist = this.getRandomPerson('dentist');
		let randomAssistant = this.getRandomPerson('assistent');
		const appointmentToSchedule = {};
		console.log(this.getDay);
	};

	render() {
		return <CalendarView items={this.state} getDay={this.getDay} />;
	}
}

export default Overview;
