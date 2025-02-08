import React from 'react'
import {Search} from 'lucide-react'

function Members() {
  const members = [
    { name: 'Heather Zhang', email: 'heather@facebook.com', role: 'Member', img: '/girl1.jpg' },
    { name: 'Aaron Gray', email: 'aaron@facebook.com', role: 'Admin', img: '/boy1.jpg' },
    { name: 'Bob Kramer', email: 'bob@facebook.com', role: 'Member', img: '/girl2.jpg' },
    { name: 'Dominic Gray', email: 'dominic@facebook.com', role: 'Member', img: '/boy2.jpg' },
    { name: 'Igor Zubov', email: 'igor@facebook.com', role: 'Member', img: '/girl3.jpg' },
    { name: 'Jgabath@gmail.com', email: 'jgabath@gmail.com', role: 'Member', img: '/boy3.jpg' },
    { name: 'Milly Zesty', email: 'milly@facebook.com', role: 'Member', img: '/girl1.jpg' },
    { name: 'Pranav Kitchov', email: 'pranav@facebook.com', role: 'Member', img: '/boy1.jpg' },
  ];
  return (
    <div className="bg-white min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black mb-2">Members</h1>
          <p className="text-gray-600">
            Members with access to this workspace. Admins can grant and revoke access
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by name or email"
            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
          />
        </div>

        {/* Members List */}
        <div className="space-y-4">
          {members.map((member) => (
            <div 
              key={member.email}
              className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-black font-medium hover:text-yellow-400 cursor-pointer">
                    {member.name}
                  </h3>
                  <p className="text-gray-500 text-sm">{member.email}</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                member.role === 'Admin' 
                  ? 'bg-yellow-100 text-yellow-800' 
                  : 'bg-gray-100 text-gray-600'
              }`}>
                {member.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Members
