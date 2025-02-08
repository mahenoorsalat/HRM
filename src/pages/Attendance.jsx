import React from 'react';
import { Clock } from 'lucide-react';


function Attendance() {
  return (
    <div className="bg-white p-6 rounded-lg">
    <div className="mb-8">
      <h1 className="text-2xl font-bold text-black mb-2">Attendance</h1>
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold text-black mb-4">Today, 2022-01-01</h2>
          <div className="flex items-center bg-gray-50 p-4 rounded-lg">
            <Clock className="text-yellow-400 mr-3" size={24} />
            <div className="flex-grow">
              <div className="text-black">08:00 - 17:00</div>
              <div className="text-gray-600">Fulfilled</div>
            </div>
            <div className="text-black">9 hours</div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-black mb-4">Last 7 Days</h2>
          <div className="space-y-3">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="flex items-center bg-gray-50 p-4 rounded-lg">
                <Clock className="text-yellow-400 mr-3" size={24} />
                <div className="flex-grow">
                  <div className="text-black">08:00 - 17:00</div>
                  <div className="text-gray-600">Fulfilled</div>
                </div>
                <div className="text-black">9 hours</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Attendance
