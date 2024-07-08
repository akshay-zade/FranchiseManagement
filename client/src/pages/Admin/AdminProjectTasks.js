import React, { useEffect, useState } from 'react'
import Navbar from '../../component/Admin/Navbar'
import Sidebar from '../../component/Admin/Sidebar'
import swal from 'sweetalert';

const AdminProjectTasks = () => {

  const [projectId, setProjectId] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newTask, setNewTask] = useState({
    name: '',
    description: '',
    assignedTo: '',
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('project');
    setProjectId(id);

    // Mock tasks data
    setTasks([
      { id: 1, name: 'Task 1', assignedTo: 'Employee 1', remark: 'Remark for task 1.', status: 'Pending' },
      { id: 2, name: 'Task 2', assignedTo: 'Employee 2', remark: 'Remark for task 2.', status: 'Pending' },
    ]);
  }, []);

  const handleInputChange = (e) => {
    setNewTask({ ...newTask, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    swal("Good job!", "Task created successfully!", "success")
    setShowModal(false);
  };

  return (
    <div className="container-fluid min-vh-100 bg-light">
      <Navbar />

      <div class="d-flex wrapper-home">
        <Sidebar />
        <main class="flex-grow-1 p-4"></main>
        <div class="w-75 p-4">
          <div class="card shadow-lg">
            <div class="card-header bg-primary text-white">
              Project Tasks - {projectId ? `Project ${projectId}` : 'Task Management Project'}
            </div>
            <div class="card-body">
              <h5 class="mb-4">Tasks for {projectId ? `Project ${projectId}` : 'Task Management Project'}</h5>
              <ul class="list-unstyled">
                {tasks.map((task) => (
                  <li key={task.id} class="border p-3 rounded mb-3">
                    <h6 class="font-weight-bold">{task.name}</h6>
                    <p><strong>Assigned to:</strong> {task.assignedTo}</p>
                    <p><strong>Remark:</strong> {task.remark}</p>
                    <p><strong>Status:</strong> {task.status}</p>
                    <p><strong>Review:</strong> {task.review}</p>
                    <p><div class="form-group">

                      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div></p>
                    <button type="button" class="btn btn-primary me-2">Review</button>
                    <button type="button" class="btn btn-primary">Accept</button>

                  </li>
                ))}
              </ul>
              <button
                onClick={() => setShowModal(true)}
                class="btn btn-primary"
              >
                Create New Task
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div class="modal fade show d-block" tabindex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Create New Task for {projectId ? `Project ${projectId}` : 'Unknown Project'}</h5>
                <button type="button" class="close" onClick={() => setShowModal(false)} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form onSubmit={handleSubmit}>
                <div class="modal-body">
                  <div class="mb-3">
                    <label for="taskName" class="form-label">Task Name</label>
                    <input type="text" id="taskName" class="form-control" required onChange={handleInputChange} />
                  </div>
                  <div class="mb-3">
                    <label for="taskDescription" class="form-label">Task Description</label>
                    <textarea id="taskDescription" rows="3" class="form-control" required onChange={handleInputChange}></textarea>
                  </div>
                  <div class="mb-3">
                    <label for="assignedEmployee" class="form-label">Assign to Employee</label>
                    <select id="assignedEmployee" class="form-select" required onChange={handleInputChange}>
                      <option value="Employee1">Employee 1</option>
                      <option value="Employee2">Employee 2</option>
                      <option value="Employee3">Employee 3</option>
                    </select>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="submit" class="btn btn-primary"  >Create Task</button>
                  <button type="button" class="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminProjectTasks