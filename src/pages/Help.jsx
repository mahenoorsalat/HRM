import React from 'react';
import {  Building, Mail, Phone, Globe, Search } from 'lucide-react';

function Help() {
  return (
<>
   {/* Help & Feedback Section */}
   <div className="mb-12">
        <h2 className="text-2xl font-bold text-black mb-6">Help & Feedback</h2>
        <div className="flex-col">
          {/* Help Center */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-serif italic text-black mb-4">Help Center</h3>
            <div className="mb-6">
              <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200">
                <Search className="text-gray-400 mr-2" size={20} />
                <input 
                  type="text" 
                  placeholder="Search help articles..." 
                  className="w-full focus:outline-none"
                />
              </div>
            </div>
            <div className="space-y-3">
              {[
                { icon: Building, text: 'Company Policies' },
                { icon: Mail, text: 'Contact Support' },
                { icon: Phone, text: 'Schedule a Call' },
                { icon: Globe, text: 'Knowledge Base' }
              ].map((item, index) => (
                <button key={index} className="flex items-center w-full p-3 bg-white rounded-lg hover:bg-yellow-50 transition-colors">
                  <item.icon className="text-yellow-400 mr-3" size={20} />
                  <span className="text-black">{item.text}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Feedback Form */}
          <div className=" p-6 rounded-lg">
            <h3 className="text-lg font-serif italic text-black mb-4">Send Feedback</h3>
            <div className="space-y-4">
              <select className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-yellow-400">
                <option>Select Feedback Type</option>
                <option>Bug Report</option>
                <option>Feature Request</option>
                <option>General Feedback</option>
              </select>
              <textarea 
                placeholder="Describe your feedback..." 
                rows={4}
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-yellow-400"
              />
              <button className="w-full bg-yellow-400 text-black font-medium p-3 rounded-lg hover:bg-yellow-500 transition-colors">
                Submit Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
</>
  )
}

export default Help
