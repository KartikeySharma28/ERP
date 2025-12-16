// function Profile() {
//   return (
//     <>
//       <div className="mt-4">
//         <h1 className="text-3xl mb-4">Profile</h1>
//         <div className="bg-white shadow p-6 rounded-xl max-w-xl">
//           <p className="mb-2">
//             <span className="font-semibold">Name:</span> Kartikey Sharma
//           </p>
//           <p className="mb-2">
//             <span className="font-semibold">Email:</span>{" "}
//             kartikeysharma2824@gmail.com
//           </p>
//           <p className="text-gray-500 mt-4">
//             Additional profile details can be added here.
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }
// export default Profile;

function Profile() {
  return (
    <div className="mt-4 space-y-6">
      <h1 className="text-3xl font-semibold mb-2">Profile</h1>
      <p className="text-gray-500">
        View and manage your personal, employment, and document details.
      </p>

      <div className="bg-white shadow p-6 rounded-xl max-w-4xl space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-3">Personal Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-gray-500">Full Name</div>
              <div className="font-medium">Kartikey Sharma</div>
            </div>
            <div>
              <div className="text-gray-500">Employee ID</div>
              <div className="font-medium">EMP-1024</div>
            </div>
            <div>
              <div className="text-gray-500">Email</div>
              <div className="font-medium">kartikeysharma2824@gmail.com</div>
            </div>
            <div>
              <div className="text-gray-500">Phone</div>
              <div className="font-medium">+91-95XXXXXX12</div>
            </div>
            <div>
              <div className="text-gray-500">Date of Birth</div>
              <div className="font-medium">15 Aug 2002</div>
            </div>
            <div>
              <div className="text-gray-500">Gender</div>
              <div className="font-medium">Male</div>
            </div>
            <div className="md:col-span-2">
              <div className="text-gray-500">Address</div>
              <div className="font-medium">
                123, Brahmpuri ,Jaipur, Rajasthan , India
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Employment Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-gray-500">Designation</div>
              <div className="font-medium">Software Developer</div>
            </div>
            <div>
              <div className="text-gray-500">Department</div>
              <div className="font-medium">Engineering</div>
            </div>
            <div>
              <div className="text-gray-500">Reporting Manager</div>
              <div className="font-medium">Rahul Verma</div>
            </div>
            <div>
              <div className="text-gray-500">Date of Joining</div>
              <div className="font-medium">01 Dec 2024</div>
            </div>
            <div>
              <div className="text-gray-500">Employment Type</div>
              <div className="font-medium">Full-time</div>
            </div>
            <div>
              <div className="text-gray-500">Work Location</div>
              <div className="font-medium">Indore (On-site)</div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Bank & Tax Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-gray-500">Bank Name</div>
              <div className="font-medium">HDFC Bank</div>
            </div>
            <div>
              <div className="text-gray-500">Account Number</div>
              <div className="font-medium">XXXX XXXX 1234</div>
            </div>
            <div>
              <div className="text-gray-500">IFSC Code</div>
              <div className="font-medium">HDFC0001234</div>
            </div>
            <div>
              <div className="text-gray-500">PAN</div>
              <div className="font-medium">ABCDE1234F</div>
            </div>
            <div>
              <div className="text-gray-500">Aadhaar</div>
              <div className="font-medium">XXXX XXXX 5678</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow p-6 rounded-xl max-w-4xl">
        <h2 className="text-xl font-semibold mb-3">Documents</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="flex items-center justify-between border border-gray-200 rounded-lg px-4 py-3">
            <div>
              <div className="font-medium">Offer Letter</div>
              <div className="text-gray-500 text-xs">Uploaded: 01 Dec 2024</div>
            </div>
            <button className="text-indigo-600 text-sm font-medium">
              View
            </button>
          </div>

          <div className="flex items-center justify-between border border-gray-200 rounded-lg px-4 py-3">
            <div>
              <div className="font-medium">Joining Letter</div>
              <div className="text-gray-500 text-xs">Uploaded: 01 Dec 2024</div>
            </div>
            <button className="text-indigo-600 text-sm font-medium">
              View
            </button>
          </div>

          <div className="flex items-center justify-between border border-gray-200 rounded-lg px-4 py-3">
            <div>
              <div className="font-medium">ID Proof (Aadhaar)</div>
              <div className="text-gray-500 text-xs">Uploaded: 30 Nov 2024</div>
            </div>
            <button className="text-indigo-600 text-sm font-medium">
              View
            </button>
          </div>

          <div className="flex items-center justify-between border border-gray-200 rounded-lg px-4 py-3">
            <div>
              <div className="font-medium">PAN Card</div>
              <div className="text-gray-500 text-xs">Uploaded: 30 Nov 2024</div>
            </div>
            <button className="text-indigo-600 text-sm font-medium">
              View
            </button>
          </div>
        </div>

        <div className="mt-4">
          <button className="px-4 py-2 text-sm rounded-lg border border-dashed border-gray-300 text-gray-600 hover:border-indigo-500 hover:text-indigo-500">
            + Upload new document
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
