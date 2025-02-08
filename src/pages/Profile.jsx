import React from 'react'
import {  Building, Calendar, Edit, Camera, Download } from 'lucide-react';
function Profile() {
  return (
    <div className="bg-white p-6">
      <div className="max-w-5xl mx-auto">
        {/* Profile Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="relative">
                <img className="w-32 h-32 rounded-full  flex items-center justify-center" src="/girl1.jpg" alt="" />

              <button className="absolute bottom-0 right-0 bg-yellow-400 p-2 rounded-full hover:bg-yellow-500 transition-colors">
                <Camera className="w-4 h-4 text-black" />
              </button>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <h1 className="text-2xl font-bold text-black">John Anderson</h1>
                <button className="inline-flex items-center justify-center px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-colors">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Profile
                </button>
              </div>
              <p className="text-gray-600 mb-2">Senior Software Engineer</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <span className="inline-flex items-center text-gray-600">
                  <Building className="w-4 h-4 mr-2" />
                  Engineering Department
                </span>
                <span className="inline-flex items-center text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  Joined Jan 2022
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Personal Information */}
          <div className="md:col-span-2">
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-black mb-6">Personal Information</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-600 text-sm mb-1">Full Name</label>
                    <input 
                      type="text" 
                      value="John Anderson"
                      className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-yellow-400"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 text-sm mb-1">Email</label>
                    <input 
                      type="email" 
                      value="john.anderson@company.com"
                      className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-yellow-400"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 text-sm mb-1">Phone</label>
                    <input 
                      type="tel" 
                      value="+1 (555) 123-4567"
                      className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-yellow-400"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 text-sm mb-1">Location</label>
                    <input 
                      type="text" 
                      value="San Francisco, CA"
                      className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-yellow-400"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-600 text-sm mb-1">Bio</label>
                  <textarea 
                    rows={4}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-yellow-400"
                    defaultValue="Experienced software engineer with a passion for building scalable applications and mentoring junior developers."
                  />
                </div>
              </div>
            </div>

            {/* Work Information */}
            <div className="bg-gray-50 rounded-lg p-6 mt-6">
              <h2 className="text-lg font-semibold text-black mb-6">Work Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-600 text-sm mb-1">Department</label>
                  <input 
                    type="text" 
                    value="Engineering"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-yellow-400"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 text-sm mb-1">Position</label>
                  <input 
                    type="text" 
                    value="Senior Software Engineer"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-yellow-400"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 text-sm mb-1">Employee ID</label>
                  <input 
                    type="text" 
                    value="EMP-2022-001"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-yellow-400"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 text-sm mb-1">Start Date</label>
                  <input 
                    type="date" 
                    value="2022-01-15"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-yellow-400"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Documents and Quick Actions */}
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-black mb-4">Documents</h2>
              <div className="space-y-3">
                {[
                  'Contract Agreement',
                  'Employee Handbook',
                  'Tax Documents'
                ].map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="text-black">{doc}</span>
                    <button className="text-yellow-600 hover:text-yellow-700">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-black mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full text-left p-3 bg-white rounded-lg hover:bg-yellow-50 transition-colors">
                  Change Password
                </button>
                <button className="w-full text-left p-3 bg-white rounded-lg hover:bg-yellow-50 transition-colors">
                  Notification Settings
                </button>
                <button className="w-full text-left p-3 bg-white rounded-lg hover:bg-yellow-50 transition-colors">
                  Privacy Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
