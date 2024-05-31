import { FaGithub, FaLink, FaVideo} from 'react-icons/fa';
import React, { useState } from 'react';
import ProjectCard from "../Utils/SmallProjectCard";
import BigProjectCard from '../Utils/BigProjectCard';
import "./ProjectPage.css"
function ProjectPage() {
  const [currentPage, setCurrentPage] = useState(1);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Function to render cards based on current page
  const renderCards = () => {
    switch (currentPage) {
      case 1:
        return (
          <>
            {/* Render first set of cards */}
            <BigProjectCard
              title=""
              imageName=""
              description=""
              siteLink=""
              githubLink=""
            />
            <div className="row">
        {currentPage === 1 && (
          <>
            <ProjectCard 
              title=""
              imageName=""
              siteLink=""
              githubLink=""
            />
            <ProjectCard 
              title=""
              imageName=""
              siteVideo=""
              githubLink=""
            />
            <ProjectCard 
              title=""
              imageName=""
              githubLink=""
            />
            <ProjectCard 
              title=""
              imageName=""
              siteLink=""
              githubLink=""
            />
            <ProjectCard 
              title=""
              imageName=""
              siteVideo=""
              githubLink=""
            />
            <ProjectCard 
              title=""
              imageName=""
              siteVideo=""
              githubLink=""
            />
            <ProjectCard 
              title=""
              imageName=""
              siteLink=""
              githubLink=""
            />
            <ProjectCard 
              title=""
              imageName=""
              siteVideo=""
              githubLink=""
            />    
            <ProjectCard 
              title=""
              imageName=""
              siteVideo=""
              githubLink=""
            />     
          </>
        )}
      </div>
          </>
        );
      case 2:
        return (
          <>
          {/* Render second set of cards */}
            <BigProjectCard
              title=""
              imageName=""
              description=""
              siteLink=""
              githubLink=""
            />
            <div className="row">
        {currentPage === 2 && (
          <>
            <ProjectCard 
              title=""
              imageName=""
              siteLink=""
              githubLink=""
            />
            <ProjectCard 
              title=""
              imageName=""
              siteLink=""
              githubLink=""
            />
            <ProjectCard 
              title=""
              imageName="."
              siteLink=""
              githubLink=""
            />
            <ProjectCard 
              title="PayrollTracker"
              imageName="EmployeePayrollTracker.gif"
              siteLink=""
              githubLink=""
            />
            <ProjectCard 
              title=""
              imageName=""
              siteLink=""
              githubLink=""
            />
            <ProjectCard 
              title=""
              imageName=""
              siteLink=""
              githubLink=""
            />
            <ProjectCard 
              title="Prework Study Guide"
              imageName="prework.png"
              siteLink=""
              githubLink=""
            />
          </>
        )}
      </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <main className="main-container">
      {renderCards()}

      {/* Pagination */}
      <nav>
      <ul className="pagination pagination-lg">
        <li className="page-item">
          <button
            className="page-link"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>
        <li className={`page-item ${currentPage === 1 ? 'active' : ''}`}>
          <button className="page-link" onClick={() => handlePageChange(1)}>1</button>
        </li>
        <li className={`page-item ${currentPage === 2 ? 'active' : ''}`}>
          <button className="page-link" onClick={() => handlePageChange(2)}>2</button>
        </li>
        <li className="page-item">
          <button 
            className="page-link"
            disabled={currentPage === 2}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
    </main>

    
  );
}

export default ProjectPage;