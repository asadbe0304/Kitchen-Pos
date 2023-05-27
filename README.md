# KitchenApp
# KitchenApp


export const students = [
  { id: 1, name: "John Doe", checkIn: null, checkOut: null },
  { id: 2, name: "Jane Smith", checkIn: null, checkOut: null },
  { id: 3, name: "Alice Johnson", checkIn: null, checkOut: null },
  { id: 4, name: "Bob Williams", checkIn: null, checkOut: null },
  // Add more students
];




function App() {
  const [studentList, setStudentList] = useState(students);

  // Function to toggle the attendance status and calculate working hours
  const toggleAttendance = (id) => {
    setStudentList((prevList) =>
      prevList.map((student) =>
        student.id === id
          ? {
              ...student,
              checkIn: student.checkIn ? null : new Date().toLocaleTimeString(),
              checkOut: student.checkOut
                ? null
                : new Date().toLocaleTimeString(),
            }
          : student
      )
    );
  };

  // Function to calculate working hours
  const calculateWorkingHours = (student) => {
    if (student.checkIn && student.checkOut) {
      const checkInTime = new Date(`01/01/2023 ${student.checkIn}`);
      const checkOutTime = new Date(`01/01/2023 ${student.checkOut}`);
      const workingHours = (checkOutTime - checkInTime) / (1000 * 60 * 60);
      return workingHours.toFixed(2);
    }
    return "-";
  };

  return (
    <!-- <div>
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
} -->
