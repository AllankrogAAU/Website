import React from 'react'

const Skills = () => {
  return (
    <>
<section id="skills" className="mb-5">
  <h2 className="mb-4 ">Skills</h2>
  <div className="row g-4">
    <div className="col-md-6">
      <div className="card bg-dark text-white h-100 border-0 shadow-sm hover-card">
        <div className="card-body">
          <h3 className="card-title mb-4">
            <i className="bi bi-code me-2"></i>Languages
          </h3>
          <ul className="list-unstyled">
            <li className="d-flex align-items-center mb-3">
              <i className="bi bi-terminal me-3"></i> C
            </li>
            <li className="d-flex align-items-center mb-3">
              <i className="bi bi-terminal me-3"></i> C#
            </li>
            <li className="d-flex align-items-center mb-3">
              <i className="bi bi-cup-hot me-3"></i> Java
            </li>
            <li className="d-flex align-items-center mb-3">
              <i className="bi bi-filetype-js me-3"></i> JavaScript
            </li>
            <li className="d-flex align-items-center mb-3">
              <i className="bi bi-filetype-tsx me-3"></i> TypeScript
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="col-md-6">
      <div className="card bg-dark text-white h-100 border-0 shadow-sm hover-card">
        <div className="card-body">
          <h3 className="card-title mb-4">
            <i className="bi bi-tools me-2"></i>Frameworks and Tools
          </h3>
          <ul className="list-unstyled">
            <li className="d-flex align-items-center mb-3">
              <i className="bi bi-brush me-3"></i> HTML & CSS
            </li>
            <li className="d-flex align-items-center mb-3">
              <i className="bi bi-box me-3"></i> Node.js
            </li>
            <li className="d-flex align-items-center mb-3">
              <i className="bi bi-github me-3"></i> Git & GitHub
            </li>
            <li className="d-flex align-items-center mb-3">
              <i className="bi bi-lightning-fill me-3"></i> React
            </li>
            <li className="d-flex align-items-center mb-3">
              <i className="bi bi-fire me-3"></i> Vue.js
            </li>
            <li className="d-flex align-items-center mb-3">
              <i className="bi bi-globe me-3"></i> Next.js
            </li>
            <li className="d-flex align-items-center mb-3">
              <i className="bi bi-database me-3"></i> SQL
            </li>
            <li className="d-flex align-items-center mb-3">
              <i className="bi bi-hdd me-3"></i> SQLite
            </li>
            <li className="d-flex align-items-center mb-3">
              <i className="bi bi-archive me-3"></i> JPA
            </li>
            <li className="d-flex align-items-center mb-3">
              <i className="bi bi-seedling me-3"></i> Spring
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Skills