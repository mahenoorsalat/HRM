import React from 'react'

function New() {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-black mb-6">New Hire</h2>
      <div className=" p-6 rounded-lg">
        <div className="flex-col">
          {/* Quick Add Employee Form */}
          <div className="space-y-4 p-3 bg-gray-50 mb-10">
            <h3 className="text-lg font-serif italic text-black">Quick Add Employee</h3>
            <div className="space-y-6">
              <input 
                type="text" 
                placeholder="Full Name" 
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-yellow-400"
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-yellow-400"
              />
              <select className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-yellow-400">
                <option>Select Department</option>
                <option>HR</option>
                <option>IT</option>
                <option>Finance</option>
              </select>
              <button className="w-full bg-yellow-400 text-black font-medium p-3 rounded-lg hover:bg-yellow-500 transition-colors">
                Add Employee
              </button>
            </div>
          </div>

          {/* Recent Hires Section */}
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-lg font-serif italic text-black mb-4">Recent Hires</h3>
            <div className="space-y-3">
              {['John Doe - IT', 'Jane Smith - HR', 'Mike Johnson - Finance'].map((hire, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-black">{hire}</span>
                  <span className="text-sm text-gray-500">Added today</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New;
