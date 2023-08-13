import React from 'react'
import { usePortfolioContext } from './../../context/DataContext'

// import components
import Title from './../components/Title'
import ProjectCard from './../components/ProjectCard'

const Project = () => {
    const { projectlist } = usePortfolioContext();
    return (
        <div className="text-light">
            <Title title={"Recent Work"} />
            <div className='d-flex flex-wrap justify-content-center project-container'>
                <ProjectCard item={projectlist} />
            </div>
        </div>
    )
}

export default Project