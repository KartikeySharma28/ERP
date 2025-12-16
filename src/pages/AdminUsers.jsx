function AdminUsers() {
  const users = [
    { name: "John Doe", role: "Employee", status: "Active", dept: "Sales" },
    { name: "Jane Smith", role: "Employee", status: "On Leave", dept: "HR" },
    { name: "Admin User", role: "Admin", status: "Active", dept: "Management" },
    { name: "Rahul Verma", role: "Employee", status: "Inactive", dept: "Support" },
  ];

  return (
    <div className="p-8 space-y-6">
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Users</h1>
          <p className="text-gray-500 mt-1">
            Manage employee accounts and roles.
          </p>
        </div>
        <button className="px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-medium shadow hover:bg-blue-700">
          + Add User
        </button>
      </header>

      <div className="rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Department
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {users.map((user) => (
              <tr key={user.name} className="hover:bg-gray-50">
                <td className="px-6 py-3 text-gray-800">{user.name}</td>
                <td className="px-6 py-3">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      user.role === "Admin"
                        ? "bg-purple-100 text-purple-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-3 text-gray-600">{user.dept}</td>
                <td className="px-6 py-3">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      user.status === "Active"
                        ? "bg-emerald-100 text-emerald-700"
                        : user.status === "On Leave"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-3 text-right">
                  <button className="text-xs text-blue-600 hover:underline mr-3">
                    Edit
                  </button>
                  <button className="text-xs text-red-500 hover:underline">
                    Disable
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminUsers;
