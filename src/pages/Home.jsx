import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Menu from "../components/Menu.jsx";
import AdminMenu from "../components/AdminMenu.jsx";

import Attendance from "./Attendance.jsx";
import Leave from "./Leave.jsx";
import PayslipHistory from "./PayslipHistory.jsx";
import DashboardView from "./Dashboard.jsx";
import Profile from "./Profile.jsx";
import AdminDashboard from "./AdminDashboard.jsx";
import AdminUsers from "./AdminUsers.jsx";
import AdminReports from "./AdminReports.jsx";

function Home() {
  const [activePage, setActivePage] = useState("dashboard");
  const [userRole] = useState(
    () => localStorage.getItem("userRole") || "employee"
  );
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [navigate]);

  if (userRole === "admin") {
    return (
      <div className="Dashboard flex h-screen">
        <AdminMenu
          activePage={activePage}
          onChangePage={setActivePage}
          userRole={userRole}
        />

        <div className="h-screen w-full overflow-y-auto flex flex-col gap-10 p-4">
          {activePage === "dashboard" && <AdminDashboard />}
          {activePage === "users" && <AdminUsers />}
          {activePage === "reports" && <AdminReports />}
        </div>
      </div>
    );
  }

  return (
    <div className="Dashboard flex h-screen">
      <Menu
        activePage={activePage}
        onChangePage={setActivePage}
        userRole={userRole}
      />

      <div className="h-screen w-full overflow-y-auto flex flex-col gap-10 p-4">
        {activePage === "dashboard" && <DashboardView />}
        {activePage === "profile" && <Profile />}
        {activePage === "attendance" && <Attendance />}
        {activePage === "leave" && <Leave />}
        {activePage === "payslipHistory" && <PayslipHistory />}
      </div>
    </div>
  );
}

export default Home;
