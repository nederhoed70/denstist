import patients from './Patients';
console.log(patients);
const getRandomName = () => {
	const person = this.names[Math.floor(Math.random() * 250)];
	return `${person.name} ${person.surname}`;
};

const getRandomTime = () => {
	let goodTime = false;
	let hour;
	while (goodTime === false) {
		hour = Math.floor(Math.random() * 24);
		if (hour > 7 && hour < 19) {
			goodTime = true;
		}
	}
	return `${hour}:00u`;
};

const createDayView = () => {
	const appointments = [];

	for (i = 0; i < 30; i++) {
		appointments.push(`<li class="appointment">
      <div class="time">${getRandomTime()}</div>
      <div class="patient">Patiënt: ${getRandomName()}</div>
      <div class="dentist">Tandarts: ${getRandomName()}</div>
      <div class="assistant">Assistent: ${getRandomName()}</div>
      </li>`);
	}
	document.querySelector('.dayview').innerHTML = appointments.join('');
};

const createDayOnCalendar = numAppointments => {
	const appointments = [];
	for (let i = 0; i < numAppointments; i++) {
		appointments.push(`
      <div class="appointment">
        <span class="time">${getRandomTime()}</span>
        <span class="patient">${getRandomName()}</span>
      </div>`);
	}
	return `<div class="day">${appointments.join('')}</div>`;
};

const createCalendarView = () => {
	const days = [];

	for (let i = 1; i < 28; i++) {
		if ([6, 7, 13, 14, 20, 21, 27, 28].includes(i)) {
			continue;
		}
		days.push(createDayOnCalendar(5));
	}
	document.querySelector('.calendarview .table').innerHTML = days.join('');
};

const start = () => {
	try {
		createDayView();
	} catch {}

	try {
		createCalendarView();
	} catch {}
};

document.addEventListener('DOMContentLoaded', start);
