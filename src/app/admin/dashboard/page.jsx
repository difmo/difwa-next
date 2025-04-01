"use client";

// import Vendor from "../../components/Vendors";
import { useState } from "react";
import {
  FaUsers,
  FaStore,
  FaDollarSign,
  FaClock,
  FaShoppingCart,
  FaMoneyBillWave,
  FaChartLine,
} from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import Vendors from "../../components/Vendors";
import Store from "../../components/Store";
export default function Dashboards() {
  const [activePage, setActivePage] = useState("Dashboard");

  return (
    <div className="flex h-screen text-black bg-gray-100">
      <Sidebar setActivePage={setActivePage} />
      <div className="flex-1 flex flex-col">
        <main className="p-6 flex-1 overflow-y-auto">
          {activePage === "dashboard" && <Dashboard />}
          {activePage === "users" && <Users />}
          {activePage === "vendors" && <Vendors />}
          {activePage === "payments" && <Payments />}
          {activePage === "reports" && <Reports />}
          {activePage === "settings" && <Settings />}
        </main>
      </div>
    </div>
  );
}

function Sidebar({ setActivePage }) {
  return (
    <div className="w-64 bg-white shadow-lg h-screen text-gray-500 p-4">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
      <ul>
        {[
          "Dashboard",
          "Users",
          "Vendors",
          "Payments",
          "Reports",
          "Settings",
        ].map((name) => (
          <li
            key={name.toLowerCase()}
            onClick={() => setActivePage(name.toLowerCase())}
            className="p-2 cursor-pointer hover:bg-gray-200 rounded transition duration-200"
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Dashboard() {
  const revenueData = [
    { name: "Jan", value: 150 },
    { name: "Feb", value: 200 },
    { name: "Mar", value: 250 },
    { name: "Apr", value: 220 },
    { name: "May", value: 180 },
    { name: "Jun", value: 260 },
  ];

  const pieData = [
    { name: "Fashion Store", value: 30 },
    { name: "Tech Hub", value: 25 },
    { name: "Food Court", value: 20 },
    { name: "Book Shop", value: 15 },
    { name: "Sports Store", value: 10 },
  ];

  const COLORS = ["#4A90E2", "#50E3C2", "#F5A623", "#D0021B", "#9013FE"];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard
          title="Total Users"
          value="24,521"
          icon={<FaUsers />}
          color="bg-blue-500"
        />
        <StatCard
          title="Active Vendors"
          value="1,325"
          icon={<FaStore />}
          color="bg-green-500"
        />
        <StatCard
          title="Total Revenue"
          value="$842,314"
          icon={<FaDollarSign />}
          color="bg-yellow-500"
        />
        <StatCard
          title="Pending Payments"
          value="43"
          icon={<FaClock />}
          color="bg-red-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 shadow rounded-lg">
          <h3 className="font-semibold mb-4">Revenue Trend</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={revenueData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#4A90E2"
                strokeWidth={2}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 shadow rounded-lg">
          <h3 className="font-semibold mb-4">Top Vendors</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={60}
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <Store />
      {/* <div>
        <h2 className="text-2xl font-bold mb-6">Recent Payment Requests</h2>
        <div className="bg-white p-4 shadow rounded-lg">
          <div className="flex justify-between items-center border-b pb-2 mb-2">
            <div>
              <p className="font-bold">#REQ001</p>
              <p className="text-gray-600">Fashion Store</p>
              <p className="text-sm text-gray-500">fashion@example.com</p>
            </div>
            <p className="text-gray-600">$2,500.00</p>
            <p className="text-gray-600">2024-02-15</p>
            <span className="text-yellow-500">Pending</span>
            <div>
              <button className="text-green-500 mr-2">Accept</button>
              <button className="text-red-500">Reject</button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold">#REQ002</p>
              <p className="text-gray-600">Tech Hub</p>
              <p className="text-sm text-gray-500">tech@example.com</p>
            </div>
            <p className="text-gray-600">$3,750.00</p>
            <p className="text-gray-600">2024-02-14</p>
            <span className="text-green-500">Approved</span>
            <span className="text-gray-500">Processed</span>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex border-b pb-2">
            <button className="mr-4 font-bold">Users</button>
            <button className="text-gray-500">Vendors</button>
          </div>
          <div className="bg-white p-4 shadow rounded-lg mt-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <p className="font-bold">Sarah Johnson</p>
                  <p className="text-gray-600">sarah@example.com</p>
                </div>
              </div>
              <p className="text-gray-600">2024-01-15</p>
              <span className="text-green-500">Active</span>
              <button className="text-blue-500">Edit</button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

function StatCard({ title, value, icon, color }) {
  return (
    <div className={`p-6 rounded-lg shadow-md text-white ${color}`}>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-2xl font-bold">{value}</p>
        </div>
        <div className="text-4xl">{icon}</div>
      </div>
    </div>
  );
}

function Section({ title, content }) {
  return (
    <div>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p>{content}</p>
    </div>
  );
}

function Users() {
  return <Section title="Users" content="Manage users here." />;
}
// function Vendors() {
//   return <Section title="Vendors" content="Manage vendors here." />;
// }
function Payments() {
  return <Section title="Payments" content="Manage payments here." />;
}
function Reports() {
  return <Section title="Reports" content="View reports here." />;
}
function Settings() {
  return <Section title="Settings" content="Modify settings here." />;
}
