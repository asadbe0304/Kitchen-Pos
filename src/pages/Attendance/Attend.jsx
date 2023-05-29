import { useEffect, useState } from "react";

function App() {


  return (
    <div>
      <h1>Attendance App</h1>
      <ul>
        {studentList.map((student) => (
          <li key={student.id}>
            <span>{student.name}</span>
            <span>Check-in: {student.checkIn || "-"}</span>
            <span>Check-out: {student.checkOut || "-"}</span>
            <span>Working Hours: {calculateWorkingHours(student)}</span>
            <input
              type="checkbox"
              checked={student.checkIn && student.checkOut}
              onChange={() => toggleAttendance(student.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
