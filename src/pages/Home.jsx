import { useState } from "react";
import Menu from "../components/Menu.jsx";
import Attendance from "./Attendance.jsx";
import Leave from "./Leave.jsx";
import PayslipHistory from "./PayslipHistory.jsx";
import DashboardView from "./Dashboard.jsx";
import Profile from "./Profile.jsx";
function Home() {
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <div className="Dashboard flex h-screen">
      <Menu activePage={activePage} onChangePage={setActivePage} />

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
