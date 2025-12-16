
import ProfileImg from "../assets/img/Profile_img.jpg";
import {
  HomeOutlined,
  UserOutlined,
  UnorderedListOutlined,
  SnippetsOutlined,
  BankOutlined,
} from "@ant-design/icons";

function Menu({ activePage, onChangePage }) {
  return (
    <div className="menu text-white w-[20vw] bg-[#113756] flex flex-col items-center justify-center gap-2">
      <div className="profile flex flex-col gap-2 justify-center items-center">
        <img src={ProfileImg} alt="" className="rounded-full w-[70%]" />
        <div className="font-bold text-xl">Kartikey Sharma</div>
        <div className="font-light text-gray-400">
          kartikeysharma2824@gmail.com
        </div>
      </div>

      <div className="menu-items flex flex-col gap-4 mt-10 w-full px-6">
        <button
          className={`text-left w-full ${
            activePage === "dashboard" ? "font-bold" : ""
          }`}
          onClick={() => onChangePage("dashboard")}
        >
          <HomeOutlined /> <span className="ml-2">Dashboard</span>
        </button>

        <button
          className={`text-left w-full ${
            activePage === "profile" ? "font-bold" : ""
          }`}
          onClick={() => onChangePage("profile")}
        >
          <UserOutlined /> <span className="ml-2">Profile</span>
        </button>

        <button
          className={`text-left w-full ${
            activePage === "attendance" ? "font-bold" : ""
          }`}
          onClick={() => onChangePage("attendance")}
        >
          <UnorderedListOutlined /> <span className="ml-2">Attendance</span>
        </button>

        <button
          className={`text-left w-full ${
            activePage === "leave" ? "font-bold" : ""
          }`}
          onClick={() => onChangePage("leave")}
        >
          <SnippetsOutlined /> <span className="ml-2">Leave</span>
        </button>

        <button
          className={`text-left w-full ${
            activePage === "payslipHistory" ? "font-bold" : ""
          }`}
          onClick={() => onChangePage("payslipHistory")}
        >
          <BankOutlined /> <span className="ml-2">Payslip history</span>
        </button>
      </div>
    </div>
  );
}

export default Menu;
