import React from 'react'
import { usePortfolioContext } from './../../context/DataContext'

import Title from './../global/Title'
import ProjectCard from './ProjectCard'

const Work = () => {
    const { projectlist } = usePortfolioContext();
    return (
        <div className='container'>
            <Title title={"Recent Work"} />
            <div className='d-flex flex-wrap justify-content-center project-container'>
                <ProjectCard item={projectlist} />
            </div>
        </div>
    )
}

export default Work