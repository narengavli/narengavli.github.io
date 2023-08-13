import React from 'react'
import { usePortfolioContext } from './../../context/DataContext'

import './styles/about.css'

// import components
import Hobby from './../components/Hobby'
import Title from '../components/Title'
import Skill from '../components/Skill'
import Academics from '../components/Academics'
import Certificate from '../components/Certificate'

const Resume = () => {
    const { pastlearning } = usePortfolioContext();
    const { codingskills, webdevskills } = usePortfolioContext();
    return (
        <div>
            <div>
                <Title title={"About"} />
                <p className='text-wrap txt-indent'>My name is Narendra Gavli. I am currently pursuing Bachelor of Technology (B.Tech) in Electronics and Communication
                    Engineering at Sardar Vallabhbhai National Institute of Technology Surat (SVNIT). Currently, I am a pre-final year student.
                </p>
                <p className='text-wrap txt-indent'>
                    My hobbies are playing chess, reading technical articles, playing kho kho, coding and development. I am also interested in digital image processing, ethical hacking, spirituality and new technologies like blockchain, IOT, etc.
                </p>
                <div className='overflow-hidden'>
                    <div className='d-flex animation-box'>
                        <Hobby />
                        <Hobby />
                        <Hobby />
                    </div>
                </div>
            </div>

            <div className='mt-5'>
                <Title title={"Academics / Work Experience"} />
                <Academics item={pastlearning} />
            </div>

            <div className='mt-5'>
                <Title title={"Skills"} />
                <div className='row'>
                    <div className='col col-12 col-md-6 coding-lang-box'>
                        <Skill item={codingskills} />
                    </div>
                    <div className='col col-12 col-md-6  web-dev-box'>
                        <Skill item={webdevskills} />
                    </div>
                </div>
            </div>

            <div className='mt-5'>
                <Title title={"Certificate"} />
                <Certificate />
            </div>
        </div>
    )
}

export default Resume