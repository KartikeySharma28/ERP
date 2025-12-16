import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

function AdminDashboard() {
  const navigate = useNavigate();
  const [dashlist, setdashlist] = useState(false);

  function handleLogout() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userRole");
    navigate("/");
  }

  return (
    <div className="p-8 space-y-6">
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-500 mt-1">
            Overview of system activity and key metrics.
          </p>
        </div>

        <div className="relative">
          <button className="mr-4" onClick={() => setdashlist((prev) => !prev)}>
            <MenuOutlined style={{ fontSize: 29 }} />
          </button>

          {dashlist && (
            <div className="bg-gray-100 border border-gray-300 shadow p-4 rounded-xl absolute top-10 right-0 w-48 flex flex-col z-20">
              <button className="text-left py-1 border-b border-gray-200">
                Settings
              </button>
              <button className="text-left py-1 mt-1" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 text-white p-5 shadow-lg">
          <p className="text-sm opacity-90">Total Employees</p>
          <p className="mt-2 text-3xl font-semibold">247</p>
          <p className="mt-1 text-xs opacity-80">+12 this month</p>
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-5 shadow-lg">
          <p className="text-sm opacity-90">Pending Leave Requests</p>
          <p className="mt-2 text-3xl font-semibold">8</p>
          <p className="mt-1 text-xs opacity-80">Review required</p>
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white p-5 shadow-lg">
          <p className="text-sm opacity-90">Unprocessed Payrolls</p>
          <p className="mt-2 text-3xl font-semibold">3</p>
          <p className="mt-1 text-xs opacity-80">This week</p>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-5">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            Recent Activity
          </h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• John approved 2 leave requests</li>
            <li>• Payroll for November marked as completed</li>
            <li>• 3 new employees onboarded</li>
            <li>• System settings updated</li>
          </ul>
        </div>

        <div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-5">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            Quick Actions
          </h2>
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 rounded-xl bg-gray-100 text-gray-800 text-sm hover:bg-gray-200">
              Add Employee
            </button>
            <button className="px-4 py-2 rounded-xl bg-gray-100 text-gray-800 text-sm hover:bg-gray-200">
              View Leave Requests
            </button>
            <button className="px-4 py-2 rounded-xl bg-gray-100 text-gray-800 text-sm hover:bg-gray-200">
              Open Payroll
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AdminDashboard;
