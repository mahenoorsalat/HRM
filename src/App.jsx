import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Recruiting from "./pages/Recruiting";
import Payroll from "./pages/Payroll";
import Attendance from "./pages/Attendance";
import Benefits from "./pages/Benefits";
import New from "./pages/New";
import Profile from "./pages/Profile";
import Setting from "./pages/Setting";
import Help from "./pages/Help";

import Sidebar from "./components/Sidebar"; // Updated from Navbar to Sidebar
import "./App.css";

function Layout({ children }) {
  const location = useLocation();
  const hideSidebar = location.pathname === "/"; // Sidebar hidden on login page

  return (
    <div className="flex h-screen">
      {!hideSidebar && <Sidebar />} {/* Sidebar on Left */}
      <main className="flex-1 p-6 overflow-auto">{children}</main> {/* Main Content Area */}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Pages with Sidebar */}
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/employees" element={<Layout><Employees /></Layout>} />
        <Route path="/recruiting" element={<Layout><Recruiting /></Layout>} />
        <Route path="/payroll" element={<Layout><Payroll /></Layout>} />
        <Route path="/attendance" element={<Layout><Attendance /></Layout>} />
        <Route path="/benefits" element={<Layout><Benefits /></Layout>} />
        <Route path="/new" element={<Layout><New /></Layout>} />

        {/* Other Pages */}
        <Route path="/profile" element={<Layout><Profile /></Layout>} />
        <Route path="/setting" element={<Layout><Setting /></Layout>} />
        <Route path="/help" element={<Layout><Help /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
