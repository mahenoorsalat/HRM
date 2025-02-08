import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, CartesianGrid } from "recharts";
import { Bell, Users, TrendingUp } from "lucide-react";

function Dashboard() {
    const employeeData = [
        { month: "Jan", employees: 310 },
        { month: "Feb", employees: 320 },
        { month: "Mar", employees: 315 },
        { month: "Apr", employees: 325 },
        { month: "May", employees: 330 },
        { month: "Jun", employees: 335 },
      ];
      
      const turnoverData = [
        { month: "Jan", rate: 5 },
        { month: "Feb", rate: 4.8 },
        { month: "Mar", rate: 5.2 },
        { month: "Apr", rate: 4.9 },
        { month: "May", rate: 5.1 },
        { month: "Jun", rate: 4.7 },
      ];

    const teamMembers = [
        { name: 'Gina', role: 'Software Engineer', img: '/girl1.jpg' },
        { name: 'Paul', role: 'Product Designer', img: '/girl2.jpg' },
        { name: 'Raj', role: 'Data Scientist', img: '/boy1.jpg' },
        { name: 'Katie', role: 'Product Manager', img: '/girl3.jpg' },
        { name: 'Henry', role: 'QA Engineer', img: '/boy2.jpg' },
        { name: 'Pamela', role: 'Technical Writer', img: '/boy3.jpg' },
        { name: 'Nadia', role: 'UX Researcher', img: '/girl1.jpg' },
        { name: 'Samantha', role: 'DevOps Engineer', img: '/girl2.jpg' },
        { name: 'Daisy', role: 'Technical PM', img: '/girl3.jpg' },
        { name: 'Michael', role: 'Systems Engineer', img: '/boy1.jpg' },
      ];
  return (
    <div className="bg-white p-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Good Morning, Sarah</h1>
        
        {/* Team Section */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-black mb-6">Your team</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="font-medium text-black">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

 {/* Analytics Section */}
 <section className="mb-12">
          <h2 className="text-xl font-semibold text-black mb-6">Real-time HR Analytics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Employee Headcount Graph */}
  <div className="rounded-lg p-6  flex flex-col items-center">
    <h3 className="text-lg font-medium text-black mb-4 flex items-center">
      <Users className="w-6 h-6 text-blue-600 mr-2" /> Employee Headcount
    </h3>
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={employeeData}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="employees" fill="#3b82f6" />
      </BarChart>
    </ResponsiveContainer>
  </div>

  {/* Employee Turnover Rate Graph */}
  <div className=" rounded-lg p-6  flex flex-col items-center">
    <h3 className="text-lg font-medium text-black mb-4 flex items-center">
      <TrendingUp className="w-6 h-6 text-red-600 mr-2" /> Employee Turnover Rate
    </h3>
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={turnoverData}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#ddd" />
        <Line type="monotone" dataKey="rate" stroke="#ef4444" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  </div>
</div>

        </section>

        {/* Notifications Section */}
        <section>
          <h2 className="text-xl font-semibold text-black mb-6">Notifications</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Bell className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-black">Benefits Guide</h3>
                    <p className="text-gray-600 text-sm">Your company's Benefits Guide is available now</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">2 days ago</span>
              </div>
            ))}
          </div>
        </section>

        {/* Notifications Section */}
        <section>
          <h2 className="text-xl font-semibold text-black mb-6">Notifications</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Bell className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-black">Benefits Guide</h3>
                    <p className="text-gray-600 text-sm">Your company's Benefits Guide is available now</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">2 days ago</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Dashboard
