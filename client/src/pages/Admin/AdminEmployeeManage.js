import React, { useEffect, useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import Navbar from '../../component/Admin/Navbar';
import Sidebar from '../../component/Admin/Sidebar';

const AdminEmployeeManage = () => {

    
 // const nav = useNavigate()

  const [employees, setEmployees] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentEmployee, setCurrentEmployee] = useState({});



  useEffect(()=>{

    


  },[])

  const handleAddEmployee = (e) => {
    e.preventDefault();
    const newEmployee = {
      name: e.target.name.value,
      email: e.target.email.value,
      contact: e.target.mobile.value,
      address: e.target.address.value,
      department: e.target.department.value,
      designation: e.target.designation.value
    };
   
    setEmployees([...employees, newEmployee]);
    setShowAddModal(false);
  };

  const handleUpdateEmployee = (e) => {
    e.preventDefault();
    const updatedEmployees = employees.map(emp =>
      emp.id === currentEmployee.id ? {
        ...emp,
        name: e.target.name.value,
        email: e.target.email.value,
        contact: e.target.mobile.value,
        address: e.target.address.value,
        department: e.target.department.value,
        designation: e.target.designation.value
      } : emp
    );
    setEmployees(updatedEmployees);
    setShowUpdateModal(false);
  };

  const handleDeleteEmployee = (id) => {
    setEmployees(employees.filter(emp => emp.id !== id));
  };

  const filteredEmployees = employees.filter(emp =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div class="min-vh-100 bg-light">
  <Navbar />

  <div class="d-flex">
    <Sidebar />

    <main class="flex-grow-1 p-4">
      <div class="container max-w-7xl mx-auto">
        <div class="d-flex justify-content-between align-items-center mb-4">
          <button
            onClick={() => setShowAddModal(true)}
            class="btn btn-primary font-weight-bold"
          >
            Add Employee
          </button>
          <div class="d-flex">
            <input
              type="text"
              placeholder="Search by Name"
              class="form-control rounded-left"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button class="btn btn-primary font-weight-bold rounded-right">
              Search
            </button>
          </div>
        </div>

        <div class="card shadow-sm rounded-lg overflow-hidden">
          <div class="card-header bg-light border-bottom font-weight-bold text-dark">
            Employees
          </div>
          <table class="table table-striped table-hover">
            <thead class="bg-light">
              <tr>
                <th class="px-3 py-2 text-left text-xs font-weight-bold text-dark">Name</th>
                <th class="px-3 py-2 text-left text-xs font-weight-bold text-dark">Email Id</th>
                <th class="px-3 py-2 text-left text-xs font-weight-bold text-dark">Contact</th>
                <th class="px-3 py-2 text-left text-xs font-weight-bold text-dark">Address</th>
                <th class="px-3 py-2 text-left text-xs font-weight-bold text-dark">Department</th>
                <th class="px-3 py-2 text-left text-xs font-weight-bold text-dark">Designation</th>
                <th class="px-3 py-2 text-left text-xs font-weight-bold text-dark">Action</th>
              </tr>
            </thead>
            <tbody class="bg-white">
              {filteredEmployees.map((employee) => (
                <tr key={employee.id}>
                  <td class="px-3 py-2">{employee.name}</td>
                  <td class="px-3 py-2">{employee.email}</td>
                  <td class="px-3 py-2">{employee.contact}</td>
                  <td class="px-3 py-2">{employee.address}</td>
                  <td class="px-3 py-2">{employee.department}</td>
                  <td class="px-3 py-2">{employee.designation}</td>
                  <td class="px-3 py-2 text-sm font-weight-bold">
                    <button
                      onClick={() => {
                        setCurrentEmployee(employee);
                        setShowUpdateModal(true);
                      }}
                      class="btn btn-link text-primary p-0 mr-2"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDeleteEmployee(employee.id)}
                      class="btn btn-link text-danger p-0"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  </div>

  {/* Add Employee Modal */}
  {showAddModal && (
    <div class="fixed-top w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center">
      <div class="bg-white p-4 rounded-lg shadow-xl w-50">
        <h2 class="h4 font-weight-bold mb-3">Add Employee</h2>
        <form onSubmit={handleAddEmployee}>
          <input class="form-control mb-2" name="name" placeholder="Name" required />
          <input class="form-control mb-2" name="email" type="email" placeholder="Email" required />
          <input class="form-control mb-2" name="address" placeholder="Address" required />
          <input class="form-control mb-2" name="mobile" placeholder="Mobile Number" required />
          <select name="department" class="form-control mb-2">
            <option value="MANGEMNET">MANAGEMENT</option>
            <option value="IT">IT</option>
          </select>
          <input class="form-control mb-2" name="designation" placeholder="Designation" required />
          <div class="d-flex justify-content-end">
            <button type="submit" class="btn btn-primary font-weight-bold mr-2">Add</button>
            <button onClick={() => setShowAddModal(false)} class="btn btn-secondary font-weight-bold">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  )}

  {/* Update Employee Modal */}
  {showUpdateModal && (
    <div class="fixed-top w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center">
      <div class="bg-white p-4 rounded-lg shadow-xl w-50">
        <h2 class="h4 font-weight-bold mb-3">Update Employee</h2>
        <form onSubmit={handleUpdateEmployee}>
          <input class="form-control mb-2" name="name" placeholder="Name" defaultValue={currentEmployee.name} required />
          <input class="form-control mb-2" name="email" type="email" placeholder="Email" defaultValue={currentEmployee.email} required />
          <input class="form-control mb-2" name="address" placeholder="Address" defaultValue={currentEmployee.address} required />
          <input class="form-control mb-2" name="mobile" placeholder="Mobile Number" defaultValue={currentEmployee.contact} required />
          <input class="form-control mb-2" name="department" placeholder="Department" defaultValue={currentEmployee.department} required />
          <input class="form-control mb-2" name="designation" placeholder="Designation" defaultValue={currentEmployee.designation} required />
          <div class="d-flex justify-content-end">
            <button type="submit" class="btn btn-primary font-weight-bold mr-2">Update</button>
            <button onClick={() => setShowUpdateModal(false)} class="btn btn-secondary font-weight-bold">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  )}
</div>
  )
}

export default AdminEmployeeManage