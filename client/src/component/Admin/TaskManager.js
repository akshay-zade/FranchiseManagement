import React ,{useState} from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { useNavigate } from 'react-router-dom';

const TaskManager = () => {

    const nav=useNavigate();

  const [projects, setProjects] = useState([
    { id: 1, name: 'Project 1', status: 'Working' },
    { id: 2, name: 'Project 2', status: 'Pending' },
    { id: 3, name: 'Project 3', status: 'Completed' },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [newProject, setNewProject] = useState({ name: '', description: '' });

  const handleStatusChange = (id, newStatus) => {
    setProjects(projects.map(project => 
      project.id === id ? { ...project, status: newStatus } : project
    ));

    console.log(projects)
  };

  const handleAddProject = (e) => {
    e.preventDefault();
    setProjects([...projects, { id: projects.length + 1, name: newProject.name, status: 'Working' }]);
    setNewProject({ name: '', description: '' });
    setShowModal(false);
  };

  return (
    <div class="min-vh-100 bg-light">
  <Navbar />

  <div class="d-flex" style={{height: "100vh"}} >
    <Sidebar />

    <main class="flex-grow-1 p-4">
      <div class="container max-w-4xl mx-auto">
        <button 
          onClick={() => setShowModal(true)}
          class="mb-4 btn btn-primary font-bold"
        >
          Add Project
        </button>

        <div class="card shadow-sm rounded-lg overflow-hidden">
          <div class="card-header bg-light border-bottom font-weight-bold text-dark">
            Projects
          </div>
          <ul class="list-group list-group-flush">
            {projects.map((project) => (
              <li key={project.id} class="list-group-item d-flex justify-content-between align-items-center">
                <a href="#" class="text-primary">
                  {project.name}
                </a>
                <select 
                  value={project.status}
                  onChange={(e) => handleStatusChange(project.id, e.target.value)}
                  class="form-control form-control-sm w-auto"
                >
                  <option value="Working">Working</option>
                  <option value="Pending">Pending</option>
                  <option value="Completed">Completed</option>
                </select>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  </div>

  {showModal && (
    <div class="fixed-top w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center">
      <div class="bg-white p-4 rounded-lg shadow-xl w-50">
        <h2 class="h4 font-weight-bold mb-3">Add Project</h2>
        <form onSubmit={handleAddProject}>
          <div class="mb-3">
            <label for="projectName" class="form-label text-dark">Project Name</label>
            <input
              type="text"
              id="projectName"
              value={newProject.name}
              onChange={(e) => setNewProject({...newProject, name: e.target.value})}
              class="form-control"
              required
            />
          </div>
          <div class="mb-4">
            <label for="projectDescription" class="form-label text-dark">Description</label>
            <textarea
              id="projectDescription"
              value={newProject.description}
              onChange={(e) => setNewProject({...newProject, description: e.target.value})}
              class="form-control"
              rows="3"
              required
            ></textarea>
          </div>
          <div class="d-flex justify-content-between">
            <button type="submit" class="btn btn-primary font-bold">
              Add Project
            </button>
            <button type="button" onClick={() => setShowModal(false)} class="btn btn-secondary font-bold">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )}
</div>
  )
}

export default TaskManager