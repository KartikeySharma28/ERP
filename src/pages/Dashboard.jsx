import {
  StarFilled,
  LikeOutlined,
  ShareAltOutlined,
  MenuOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


function Dashboard() {
    const navigate = useNavigate();
  const [dashlist, setdashlist] = useState(false);

  return (
    <>
      <div className="flex justify-between mt-4">
        <div className="text-3xl">Dashboard</div>

        {/* Menu + dropdown */}
        <div className="relative">
          <button
            className="mr-4"
            onClick={() => setdashlist((prev) => !prev)}
          >
            <MenuOutlined style={{ fontSize: 29 }} />
          </button>

          {dashlist && (
            <div className="bg-gray-100 border border-gray-300 shadow p-4 rounded-xl absolute top-10 right-4 w-48 flex flex-col z-20">
              <button className="text-left py-1 border-b border-gray-200">
                Settings
              </button>
              <button className="text-left py-1 mt-1" onClick={() => {
                navigate("/login");
              }}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-around flex-wrap gap-4 mt-6">
        <div className="bg-[#113756] h-30 w-48 text-white flex flex-col p-2 justify-between">
          <div className="w-full flex justify-between">
            <div>Earnings</div>
            <div>
              <DollarOutlined style={{ fontSize: 29 }} />
            </div>
          </div>
          <div className="text-4xl mb-4 ml-2">$650</div>
        </div>

        <div className="bg-[#113756] h-30 w-48 text-white flex flex-col p-2 justify-between">
          <div className="w-full flex justify-between">
            <div>Share</div>
            <div>
              <ShareAltOutlined style={{ fontSize: 29 }} />
            </div>
          </div>
          <div className="text-4xl mb-4 ml-2">8000</div>
        </div>

        <div className="bg-[#113756] h-30 w-48 text-white flex flex-col p-2 justify-between">
          <div className="w-full flex justify-between">
            <div>Likes</div>
            <div>
              <LikeOutlined style={{ fontSize: 29 }} />
            </div>
          </div>
          <div className="text-4xl mb-4 ml-2">8000</div>
        </div>

        <div className="bg-[#113756] h-30 w-48 text-white flex flex-col p-2 justify-between">
          <div className="w-full flex justify-between">
            <div>Ratings</div>
            <div>
              <StarFilled style={{ fontSize: 29 }} />
            </div>
          </div>
          <div className="text-4xl mb-4 ml-2">4.5</div>
        </div>
      </div>

      <div className="bg-gray-100 mt-10 p-4 rounded-lg">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Announcements</h2>
        </div>
        <div className="bg-[#107DAC] shadow p-6 rounded-xl mt-4">
          <p className="text-white">No Annoucement .....</p>
        </div>
      </div>

      <div className="bg-gray-100 p-4 w-[50%] rounded-lg mt-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Birthdays This Month</h2>
        </div>
        <div className="bg-[#107DAC] shadow p-6 rounded-xl mt-4">
          <p className="text-white">No Birthdays This Month....</p>
        </div>
        <div className="bg-[#107DAC] shadow p-6 rounded-xl mt-4">
          <p className="text-white">No Birthdays This Month....</p>
        </div>
        <div className="bg-[#107DAC] shadow p-6 rounded-xl mt-4">
          <p className="text-white">No Birthdays This Month....</p>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
