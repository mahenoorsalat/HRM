import React from 'react'
    import { ChevronLeft, ChevronRight } from 'lucide-react';

function Payroll() {


  const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const employees = [
    { name: 'Alice', salary: 8000, tax: 2000, socialSecurity: 500, medical: 300, total: 11800 },
    { name: 'Bob', salary: 9000, tax: 2250, socialSecurity: 600, medical: 350, total: 12200 },
    { name: 'Charlie', salary: 10000, tax: 2500, socialSecurity: 650, medical: 400, total: 13550 },
    { name: 'David', salary: 11000, tax: 2750, socialSecurity: 700, medical: 450, total: 14900 }
  ];

  return (
    <div className="bg-white min-h-screen p-8">
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-black mb-2">Run a payroll</h1>
          <p className="text-gray-600">You have 4 employees</p>
        </div>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg">
          Add employees
        </button>
      </div>

      {/* Pay Schedule Selection */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-black mb-4">Select a pay schedule</h2>
        <div className="space-y-3">
          {['Monthly', 'Bi-weekly', 'Weekly'].map((schedule) => (
            <div key={schedule} className="p-4 border border-gray-200 rounded-lg hover:border-yellow-400 cursor-pointer">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="radio" name="schedule" className="h-4 w-4 text-yellow-400" />
                <span className="text-black">{schedule}</span>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Calendar */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-black mb-4">Pay period</h2>
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <ChevronLeft className="w-5 h-5 text-gray-500 cursor-pointer" />
            <h3 className="text-black font-medium">October 2023</h3>
            <ChevronRight className="w-5 h-5 text-gray-500 cursor-pointer" />
          </div>
          <div className="grid grid-cols-7 gap-2">
            {weekDays.map(day => (
              <div key={day} className="text-center text-gray-600 text-sm py-2">{day}</div>
            ))}
            {Array(31).fill(null).map((_, i) => (
              <div
                key={i}
                className={`text-center py-2 rounded-full cursor-pointer
                  ${i + 1 === 5 || i + 1 === 30 ? 'bg-yellow-400 text-black' : 'hover:bg-gray-100 text-black'}`}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Payment Method */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-black mb-4">Select payment method</h2>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-gray-100 hover:bg-yellow-400 text-black rounded-lg">
            Direct deposit
          </button>
          <button className="px-4 py-2 bg-gray-100 hover:bg-yellow-400 text-black rounded-lg">
            Check
          </button>
        </div>
      </div>

      {/* Payroll Preview */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-black mb-4">Preview payroll</h2>
        <div className="overflow-x-auto border border-gray-200 rounded-lg">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 text-black">Employee</th>
                <th className="text-left p-4 text-black">Salary</th>
                <th className="text-left p-4 text-black">Tax</th>
                <th className="text-left p-4 text-black">Social Security</th>
                <th className="text-left p-4 text-black">Medical Insurance</th>
                <th className="text-left p-4 text-black">Total</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.name} className="border-t border-gray-200 hover:bg-gray-50">
                  <td className="p-4 text-black">{employee.name}</td>
                  <td className="p-4 text-black">${employee.salary.toLocaleString()}</td>
                  <td className="p-4 text-black">${employee.tax.toLocaleString()}</td>
                  <td className="p-4 text-black">${employee.socialSecurity.toLocaleString()}</td>
                  <td className="p-4 text-black">${employee.medical.toLocaleString()}</td>
                  <td className="p-4 font-medium text-black">${employee.total.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-black mb-4">Payroll summary</h2>
        <div className="space-y-3">
          {[
            { label: 'Gross Payroll', amount: 38000 },
            { label: 'Net Payroll', amount: 52450 },
            { label: 'Taxes', amount: 10000 },
            { label: 'Social Security', amount: 2500 },
            { label: 'Medical Insurance', amount: 1500 }
          ].map((item) => (
            <div key={item.label} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-black">{item.label}</span>
              <span className="text-black font-medium">${item.amount.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Button */}
      <div className="flex justify-end">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-lg font-medium">
          Run Payroll
        </button>
      </div>
    </div>
  </div>
  )
}

export default Payroll
