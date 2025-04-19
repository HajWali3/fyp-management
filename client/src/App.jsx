import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import StudentDashboard from "./pages/StudentDashboard";
import SupervisorDashboard from "./pages/SupervisorDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard/student" element={<StudentDashboard />} />
        <Route path="/dashboard/supervisor" element={<SupervisorDashboard />} />
        <Route path="/dashboard/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
