import React from 'react'

function Recruiting() {
    const pendingActions = [
        { name: 'Jane Doe', role: 'Senior Software Engineer', salary: 150000, img: '/boy1.jpg' },
        { name: 'John Smith', role: 'Software Engineer', salary: 100000, img: '/boy2.jpg' },
        { name: 'Sarah Johnson', role: 'Senior Software Engineer', salary: 140000, img: '/girl1.jpg' }
      ];
    
      const processedActions = [
        { name: 'Jane Doe', role: 'Senior Software Engineer', salary: 150000, img: '/boy3.jpg' },
        { name: 'John Smith', role: 'Software Engineer', salary: 100000, img: '/boy1.jpg' },
        { name: 'Sarah Johnson', role: 'Senior Software Engineer', salary: 140000, img: '/girl3.jpg' }
      ];
  return (
    <div className="bg-white min-h-screen p-8">
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-black">Process personnel actions</h1>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-md font-medium">
          Create new
        </button>
      </div>

      {/* Pending Actions */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold text-black mb-4">Pending actions</h2>
        <div className="space-y-4">
          {pendingActions.map((action, index) => (
            <div key={index} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg border border-gray-100">
              <div className="flex items-center space-x-4">
                <img
                  src={action.img}
                  alt={action.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-medium text-black hover:text-yellow-400">
                    Promote {action.name}
                  </h3>
                  <p className="text-gray-600">{action.role}</p>
                </div>
              </div>
              <span className="text-black font-medium">
                ${action.salary.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Processed Actions */}
      <div>
        <h2 className="text-xl font-semibold text-black mb-4">Processed actions</h2>
        <div className="space-y-4">
          {processedActions.map((action, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <img
                  src={action.img}
                  alt={action.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-medium text-black">
                    Promoted {action.name}
                  </h3>
                  <p className="text-gray-600">{action.role}</p>
                </div>
              </div>
              <span className="text-black font-medium">
                ${action.salary.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Recruiting
