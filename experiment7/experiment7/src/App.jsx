import './App.css'

const students = [

  { name: "Akshara", course: "Computer Science", marks: 98 },

  { name: "Akriti Gupta", course: "Information Technology", marks: 92 },

  { name: "Aaradhya Singh", course: "Electronics", marks: 88 },

];

function StudentCard({ name, course, marks }) {

  return (

    <div className="student-card">

      <h2 className="student-name">{name}</h2>

      <p className="student-info">Course: {course}</p>

      <p className="student-info">Marks: {marks}</p>

    </div>

  );
}

function App() {

  return (

    <div className="container">

      <h1 className="title">Student Information</h1>

      {students.map((student, index) => (

        <StudentCard
          key={index}
          name={student.name}
          course={student.course}
          marks={student.marks}
        />

      ))}

      {/* Footer */}

      <footer className="footer">

        <p>Akshara 2503201000136</p>

      </footer>

    </div>

  );
}

export default App;