function Leave() {
  return (
    <div className="mt-4">
      <h1 className="text-3xl mb-4">Leave</h1>
      <div className="bg-white shadow p-6 rounded-xl mb-3 w-[500px]">
        <form className="mb-6 space-y-4 flex flex-col">
          <label>Type of leave : </label>
          <input
            type="text"
            placeholder="  Sick..."
            className="bg-gray-200 shadow "
          />
          <label>Date : </label>
          <input type="date" className="bg-gray-200 shadow " />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Apply Leave
          </button>
        </form>
      </div>
      <div className="bg-white shadow p-6 rounded-xl">
        <table className="min-w-full border border-gray-300 text-sm">
          <caption className="text-xl font-semibold text-gray-800 mb-4">
            Leave History
          </caption>
          <thead className="bg-gray-100">
            <tr>
              <th className="border-b px-3 py-2 text-left">Date</th>
              <th className="border-b px-3 py-2 text-left">Type of leave</th>
              <th className="border-b px-3 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b px-3 py-2">11 Dec 2025</td>
              <td className="border-b px-3 py-2">PaidLeave</td>
              <td className="border-b px-3 py-2">Approved</td>
            </tr>
            <tr>
              <td className="border-b px-3 py-2">12 Dec 2025</td>
              <td className="border-b px-3 py-2">Casual Leave</td>
              <td className="border-b px-3 py-2">Approved</td>
            </tr>
            <tr>
              <td className="border-b px-3 py-2">13 Dec 2025</td>
              <td className="border-b px-3 py-2">Sick Leave </td>
              <td className="border-b px-3 py-2">Approved</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Leave;
