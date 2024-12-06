import React, { useState } from 'react';
import './App.css';

function App() {
  const [patients, setPatients] = useState([]);
  const [bills, setBills] = useState([]);
  const [appointment, setAppointment] = useState({ name: '', date: '', time: '', dentist: '' });
  const [billDetails, setBillDetails] = useState({ patientId: '', amount: '', date: '' });

  const handleAppointmentSubmit = (e) => {
    e.preventDefault();
    setPatients([...patients, { ...appointment, id: patients.length + 1 }]);
    setAppointment({ name: '', date: '', time: '', dentist: '' });
  };

  const handleBillSubmit = (e) => {
    e.preventDefault();
    setBills([...bills, { ...billDetails, id: bills.length + 1 }]);
    setBillDetails({ patientId: '', amount: '', date: '' });
  };

  return (
    <div className="App">
      <header>
        <h1>Dental Clinic Management System</h1>
      </header>

      <nav>
        <ul>
          <li><a href="#appointments">Appointments</a></li>
          <li><a href="#patients">Patients</a></li>
          <li><a href="#bills">Billing</a></li>
        </ul>
      </nav>

      <main>
        <section id="appointments">
          <h2>Book Appointment</h2>
          <form onSubmit={handleAppointmentSubmit}>
            <label>Patient Name:</label>
            <input 
              type="text" 
              value={appointment.name} 
              onChange={(e) => setAppointment({ ...appointment, name: e.target.value })} 
              required 
            />

            <label>Date:</label>
            <input 
              type="date" 
              value={appointment.date} 
              onChange={(e) => setAppointment({ ...appointment, date: e.target.value })} 
              required 
            />

            <label>Time:</label>
            <input 
              type="time" 
              value={appointment.time} 
              onChange={(e) => setAppointment({ ...appointment, time: e.target.value })} 
              required 
            />

            <label>Dentist:</label>
            <select 
              value={appointment.dentist} 
              onChange={(e) => setAppointment({ ...appointment, dentist: e.target.value })} 
              required
            >
              <option value="">Select Dentist</option>
              <option value="Dr. Smith">Dr. Smith</option>
              <option value="Dr. Jones">Dr. Jones</option>
              <option value="Dr. Taylor">Dr. Taylor</option>
            </select>

            <button type="submit">Book Appointment</button>
          </form>
        </section>

        <section id="patients">
          <h2>Patients</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Dentist</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <tr key={patient.id}>
                  <td>{patient.id}</td>
                  <td>{patient.name}</td>
                  <td>{patient.date}</td>
                  <td>{patient.time}</td>
                  <td>{patient.dentist}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section id="bills">
          <h2>Billing</h2>
          <form onSubmit={handleBillSubmit}>
            <label>Patient ID:</label>
            <input 
              type="number" 
              value={billDetails.patientId} 
              onChange={(e) => setBillDetails({ ...billDetails, patientId: e.target.value })} 
              required 
            />

            <label>Amount:</label>
            <input 
              type="number" 
              value={billDetails.amount} 
              onChange={(e) => setBillDetails({ ...billDetails, amount: e.target.value })} 
              required 
            />

            <label>Date:</label>
            <input 
              type="date" 
              value={billDetails.date} 
              onChange={(e) => setBillDetails({ ...billDetails, date: e.target.value })} 
              required 
            />

            <button type="submit">Add Bill</button>
          </form>

          <table>
            <thead>
              <tr>
                <th>Bill ID</th>
                <th>Patient ID</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {bills.map((bill) => (
                <tr key={bill.id}>
                  <td>{bill.id}</td>
                  <td>{bill.patientId}</td>
                  <td>{bill.amount}</td>
                  <td>{bill.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Smile Dental Clinic. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
