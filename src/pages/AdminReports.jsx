function AdminReports() {
  const reports = [
    { title: "Monthly Attendance Summary", period: "Nov 2025", status: "Ready" },
    { title: "Payroll Overview", period: "Nov 2025", status: "In Progress" },
    { title: "Leave Analysis", period: "Q4 2025", status: "Ready" },
  ];

  return (
    <div className="p-8 space-y-6">
      <header className="flex flex-col  gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Reports</h1>
          <p className="text-gray-500 mt-1">
            View and generate HR & payroll reports.
          </p>
        </div>
        <button className="px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-medium shadow hover:bg-blue-700">
          New Report
        </button>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-5">
          <h2 className="text-sm font-semibold text-gray-700 mb-2">
            Attendance
          </h2>
          <p className="text-2xl font-bold text-gray-900">96%</p>
          <p className="text-xs text-gray-500 mt-1">
            Average attendance this month.
          </p>
        </div>

        <div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-5">
          <h2 className="text-sm font-semibold text-gray-700 mb-2">Leaves</h2>
          <p className="text-2xl font-bold text-gray-900">18</p>
          <p className="text-xs text-gray-500 mt-1">
            Approved leave requests this month.
          </p>
        </div>

        <div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-5">
          <h2 className="text-sm font-semibold text-gray-700 mb-2">Overtime</h2>
          <p className="text-2xl font-bold text-gray-900">124h</p>
          <p className="text-xs text-gray-500 mt-1">
            Logged overtime across all teams.
          </p>
        </div>
      </section>

      <section className="rounded-2xl bg-white border border-gray-200 shadow-sm p-5">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Recent Reports
        </h2>
        <ul className="divide-y divide-gray-100 text-sm">
          {reports.map((r) => (
            <li key={r.title} className="flex items-center justify-between py-3">
              <div>
                <p className="font-medium text-gray-800">{r.title}</p>
                <p className="text-xs text-gray-500">{r.period}</p>
              </div>
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  r.status === "Ready"
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-amber-100 text-amber-700"
                }`}
              >
                {r.status}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default AdminReports;
