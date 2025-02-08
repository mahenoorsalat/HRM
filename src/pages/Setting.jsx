import React from 'react';
import { Bell, Lock, Users } from 'lucide-react';

function Setting() {
  return (
    <div className="bg-white p-6  flex flex-col">
      {/* Settings Section */}
      <div className="mb-12 flex-grow">
        <h2 className="text-2xl font-bold text-black mb-6">Settings</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <Bell className="text-yellow-400 mr-3" size={24} />
              <h3 className="text-black font-semibold">Notifications</h3>
            </div>
            <p className="text-gray-600 mb-4">Manage your email and app notifications</p>
            <button className="text-yellow-600 hover:text-yellow-700">Configure →</button>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <Lock className="text-yellow-400 mr-3" size={24} />
              <h3 className="text-black font-semibold">Security</h3>
            </div>
            <p className="text-gray-600 mb-4">Password and authentication settings</p>
            <button className="text-yellow-600 hover:text-yellow-700">Manage →</button>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <Users className="text-yellow-400 mr-3" size={24} />
              <h3 className="text-black font-semibold">Team Access</h3>
            </div>
            <p className="text-gray-600 mb-4">Control team permissions and roles</p>
            <button className="text-yellow-600 hover:text-yellow-700">Configure →</button>
          </div>
        </div>
      </div>

      {/* Additional Settings Section (Optional) */}
      <div className="mt-12 bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
        <div className="flex items-center mb-4">
          <Users className="text-blue-400 mr-3" size={24} />
          <h3 className="text-black font-semibold">User Preferences</h3>
        </div>
        <p className="text-gray-600 mb-4">Adjust your account preferences and settings</p>
        <button className="text-blue-600 hover:text-blue-700">Edit Preferences →</button>
      </div>
    </div>
  );
}

export default Setting;
