import React from 'react'
import Navbar from '../../component/Admin/Navbar'
import Sidebar from '../../component/Admin/Sidebar'

const AdminEmployeeDetails = () => {
    const employees = [
        {
          name: 'Lavnya',
          email: 'Lavnya01@gmail.com',
          contact: '9876543210',
          project: 'Task Manager',
          inTime: '9:00am',
          outTime: '5:00pm'
        },
        {
          name: 'Nutan',
          email: 'Nutan01@gmail.com',
          contact: '9222543210',
          project: 'E-commernce',
          inTime: '10:00am',
          outTime: '6:00pm'
        },
        {
          name: 'Mayuri',
          email: 'Mayuri01@gmail.com',
          contact: '8080543210',
          project: 'Real Estate',
          inTime: '11:00am',
          outTime: '7:00pm'
        },
        {
          name: 'Yash',
          email: 'Yash01@gmail.com',
          contact: '9876512345',
          project: 'Derivary app',
          inTime: '10:00am',
          outTime: '5:00pm'
        },
        {
          name: 'Ankita',
          email: 'Ankita01@gmail.com',
          contact: '9876543212',
          project: 'Pizza app',
          inTime: '8:00am',
          outTime: '4:00pm'
        }
        
      ];
  return (
    <div class="min-vh-100 bg-light">
  
  <Navbar/>

  <div class="d-flex wrapper-home">
    
    <Sidebar/>

    
    <main class="flex-grow-1 p-4">
      <div class="container max-w-7xl mx-auto">
        <div class="card shadow-sm rounded-lg overflow-hidden">
          <div class="card-header bg-light border-bottom font-weight-bold text-dark">
            Employee Details
          </div>
          <div class="card-body p-4">
            <div class="table-responsive">
              <table class="table table-striped table-hover">
                <thead class="bg-light">
                  <tr>
                    <th class="px-3 py-2 text-left text-xs font-weight-bold text-dark">Name</th>
                    <th class="px-3 py-2 text-left text-xs font-weight-bold text-dark">Email Id</th>
                    <th class="px-3 py-2 text-left text-xs font-weight-bold text-dark">Contact</th>
                    <th class="px-3 py-2 text-left text-xs font-weight-bold text-dark">Project</th>
                    <th class="px-3 py-2 text-left text-xs font-weight-bold text-dark">In Time</th>
                    <th class="px-3 py-2 text-left text-xs font-weight-bold text-dark">Out Time</th>
                  </tr>
                </thead>
                <tbody class="bg-white">
                  {employees.map((employee, index) => (
                    <tr key={index}>
                      <td class="px-3 py-2">{employee.name}</td>
                      <td class="px-3 py-2">{employee.email}</td>
                      <td class="px-3 py-2">{employee.contact}</td>
                      <td class="px-3 py-2">{employee.project}</td>
                      <td class="px-3 py-2">{employee.inTime}</td>
                      <td class="px-3 py-2">{employee.outTime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</div>
  )
}

export default AdminEmployeeDetails