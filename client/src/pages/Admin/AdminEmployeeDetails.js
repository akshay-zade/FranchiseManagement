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
        }
        
      ];
  return (
    <div class="min-vh-100 bg-light">
  
  <Navbar/>

  <div class="d-flex">
    
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