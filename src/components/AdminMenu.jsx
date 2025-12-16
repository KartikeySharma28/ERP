import ProfileImg from "../assets/img/Profile_img.jpg";
import {
  HomeOutlined,
  TeamOutlined,
  BarChartOutlined,
} from "@ant-design/icons";

function AdminMenu({ activePage, onChangePage }) {
  return (
    <div className="menu text-white w-[20vw] bg-[#113756] flex flex-col items-center justify-center gap-2">
      <div className="profile flex flex-col gap-2 justify-center items-center mt-6">
        <img src={ProfileImg} alt="" className="rounded-full w-[70%] border-4 border-white/20" />
        <div className="font-bold text-xl mt-1">Kartikey Sharma</div>
        <div className="font-light text-gray-300 text-xs">
          admin@company.com
        </div>
        <span className="mt-1 text-[11px] px-3 py-1 rounded-full bg-white/10 text-gray-100 uppercase tracking-wide">
          Admin
        </span>
      </div>

      <div className="menu-items flex flex-col gap-3 mt-10 w-full px-6">
        <button
          className={`text-left w-full px-3 py-2 rounded-lg hover:bg-white/10 transition ${
            activePage === "dashboard" ? "bg-white/15 font-semibold" : ""
          }`}
          onClick={() => onChangePage("dashboard")}
        >
          <HomeOutlined /> <span className="ml-2">Dashboard</span>
        </button>

        <button
          className={`text-left w-full px-3 py-2 rounded-lg hover:bg-white/10 transition ${
            activePage === "users" ? "bg-white/15 font-semibold" : ""
          }`}
          onClick={() => onChangePage("users")}
        >
          <TeamOutlined /> <span className="ml-2">Users</span>
        </button>

        <button
          className={`text-left w-full px-3 py-2 rounded-lg hover:bg-white/10 transition ${
            activePage === "reports" ? "bg-white/15 font-semibold" : ""
          }`}
          onClick={() => onChangePage("reports")}
        >
          <BarChartOutlined /> <span className="ml-2">Reports</span>
        </button>
      </div>
    </div>
  );
}

export default AdminMenu;
