import React, { useState } from 'react';

const AppointmentScheduler = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [patientName, setPatientName] = useState('');

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handlePatientNameChange = (e) => {
    setPatientName(e.target.value);
  };

  const handleAppointmentSubmit = (e) => {
    e.preventDefault();
    // Perform logic to submit appointment data to the backend
    console.log('Appointment Submitted:', {
      date: selectedDate,
      time: selectedTime,
      patient: patientName,
    });
    // Reset form fields after submission
    setSelectedDate('');
    setSelectedTime('');
    setPatientName('');
  };

  return (
    <div>
      <h2>Schedule an Appointment</h2>
      <form onSubmit={handleAppointmentSubmit}>
        <label>Date:</label>
        <input type="date" value={selectedDate} onChange={handleDateChange} required />

        <label>Time:</label>
        <input type="time" value={selectedTime} onChange={handleTimeChange} required />

        <label>Patient Name:</label>
        <input type="text" value={patientName} onChange={handlePatientNameChange} required />

        <button type="submit">Schedule Appointment</button>
      </form>
    </div>
  );
};

export default AppointmentScheduler;
