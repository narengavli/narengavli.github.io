import React from 'react';
import "./styles/projectCard.css";

const ProjectCard = ({ item }) => {
    return (
        <>
            {item.map((Val) => {
                return (
                    <div className="card m-2 rounded-3 shadow-sm border-white" key={Val.id}>
                        <img src={Val.image} alt={Val.name} height={250} width={400} className='rounded-3' />
                        <div className="overlay-container rounded-3">
                            <div className='text-center  mb-2'>
                                <span className='h3 text-center text-uppercase'>{Val.name}</span>
                            </div>
                            <p className="overlay-content">{Val.description}</p>
                            <div className='text-center'>
                                <a href={Val.code} target='_blank' rel="noreferrer" className="link-light link-offset-3 link-underline-opacity-25 link-underline-opacity-100-hover mx-2">
                                    Code
                                </a>
                                <a href={Val.live} target='_blank' rel="noreferrer" className="link-light link-offset-3 link-underline-opacity-25 link-underline-opacity-100-hover mx-2">
                                    Website
                                </a>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    )
}

export default ProjectCard