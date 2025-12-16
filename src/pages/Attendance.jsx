function Attendance() {
    
  return (
    <div className="mt-4">
      <h1 className="text-3xl mb-4">Attendance</h1>
      <div className="bg-white shadow p-6 rounded-xl">
        <p></p>
        <table className="min-w-full border border-gray-300 text-sm">
          <caption className="text-xl font-semibold text-gray-800 mb-4">
            Leave History
          </caption>

          <thead className="bg-gray-100">
            <tr>
              <th className="border-b px-3 py-2 text-left">Date</th>
              <th className="border-b px-3 py-2 text-left">In</th>
              <th className="border-b px-3 py-2 text-left">Out</th>
              <th className="border-b px-3 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b px-3 py-2">12 Dec 2025</td>
              <td className="border-b px-3 py-2">09:30</td>
              <td className="border-b px-3 py-2">18:15</td>
              <td className="border-b px-3 py-2">Present</td>
            </tr>
            <tr>
              <td className="border-b px-3 py-2">13 Dec 2025</td>
              <td className="border-b px-3 py-2">09:30</td>
              <td className="border-b px-3 py-2">18:15</td>
              <td className="border-b px-3 py-2">Present</td>
            </tr>
            <tr>
              <td className="border-b px-3 py-2">14 Dec 2025</td>
              <td className="border-b px-3 py-2">09:30</td>
              <td className="border-b px-3 py-2">18:15</td>
              <td className="border-b px-3 py-2">Present</td>
            </tr>
            <tr>
              <td className="border-b px-3 py-2">15 Dec 2025</td>
              <td className="border-b px-3 py-2">09:30</td>
              <td className="border-b px-3 py-2">18:15</td>
              <td className="border-b px-3 py-2">Present</td>
            </tr>
            <tr>
              <td className="border-b px-3 py-2">16 Dec 2025</td>
              <td className="border-b px-3 py-2">–</td>
              <td className="border-b px-3 py-2">–</td>
              <td className="border-b px-3 py-2">Absent</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Attendance;
