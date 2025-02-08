import React from 'react'
import { Clock, Heart, Shield, Calculator, FileText, Gift, Briefcase } from 'lucide-react';
function Benefits() {
  return (
    <div className="bg-white p-6 rounded-lg">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-black">Benefits & Deductions</h1>
          <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-500 transition-colors">
            New Request
          </button>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {['Vacation Request', 'Medical Claims', 'Insurance', 'Tax Documents'].map((action, index) => (
            <button key={index} className="flex items-center justify-center p-3 bg-gray-50 rounded-lg text-black hover:bg-yellow-50 transition-colors">
              {action}
            </button>
          ))}
        </div>

        {/* Benefits Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <Clock className="text-yellow-400 mr-3" size={24} />
              <div>
                <h3 className="text-black font-semibold">Leave Balance</h3>
                <p className="text-2xl font-bold text-black mt-2">15 Days</p>
                <p className="text-gray-600 text-sm">Expires in 6 months</p>
              </div>
            </div>
            <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
              <div className="bg-yellow-400 h-2 rounded-full" style={{width: '60%'}}></div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <Heart className="text-yellow-400 mr-3" size={24} />
              <div>
                <h3 className="text-black font-semibold">Health Insurance</h3>
                <p className="text-2xl font-bold text-black mt-2">Family Plan</p>
                <p className="text-gray-600 text-sm">Premium: $120/month</p>
              </div>
            </div>
            <button className="mt-4 text-yellow-600 text-sm hover:text-yellow-700">
              View Coverage Details →
            </button>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <Gift className="text-yellow-400 mr-3" size={24} />
              <div>
                <h3 className="text-black font-semibold">Benefits Overview</h3>
                <p className="text-2xl font-bold text-black mt-2">4 Active</p>
                <p className="text-gray-600 text-sm">2 Pending Enrollment</p>
              </div>
            </div>
            <button className="mt-4 text-yellow-600 text-sm hover:text-yellow-700">
              Review Benefits →
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-black font-semibold text-lg">Recent Activity</h3>
            <button className="text-yellow-600 hover:text-yellow-700">View All</button>
          </div>
          <div className="space-y-4">
            {[
              { icon: FileText, title: 'Medical Claim Submitted', date: 'Today', status: 'Pending', amount: '$250.00' },
              { icon: Calculator, title: 'Tax Deduction', date: 'Yesterday', status: 'Processed', amount: '$450.00' },
              { icon: Shield, title: 'Insurance Renewal', date: '3 days ago', status: 'Completed', amount: '$120.00' }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg">
                <div className="flex items-center">
                  <item.icon className="text-yellow-400 mr-4" size={20} />
                  <div>
                    <p className="text-black font-medium">{item.title}</p>
                    <p className="text-gray-600 text-sm">{item.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-black font-medium">{item.amount}</p>
                  <span className={`text-sm ${
                    item.status === 'Pending' ? 'text-yellow-600' :
                    item.status === 'Processed' ? 'text-green-600' :
                    'text-blue-600'
                  }`}>
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Benefits
