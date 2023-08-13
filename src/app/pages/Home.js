import React from 'react'
import styles from './styles/home.module.css'

// import icons
import LinkdinIcon from './../../icons/LinkdinIcon';
import LeetcodeIcon from './../../icons/LeetcodeIcon';
import GithubIcon from './../../icons/GithubIcon';
import TwitterIcon from './../../icons/TwitterIcon';

const Home = () => {
    return (
        <main className={styles.page}>
            <div className={styles.profileCard}>
                <div className={styles.imageContainer}>
                    <img src='./img/home/narengavli.png' height={200} width={200} alt='naren gavli' className={styles.profileImage} />
                </div>

                <div className={styles.profileName}>
                    Narendra Gavli
                </div>

                <div className={styles.profileRole}>
                    Designer, Developer & Problem Solver
                </div>

                <div className={styles.resumeContainer}>
                    <a href='https://drive.google.com/drive/folders/18sLfSX49nVR0OxylHHokZyxWCT7ENOG9?usp=sharing' target='_blank' rel="noreferrer">
                        <button className="btn btn-outline-primary rounded btn-lg">Download Resume</button>
                    </a>
                </div>
            </div>

            <div className={styles.bottomBar}>
                <div className={styles.summary}>
                    <div className={styles.statBox}>
                        <div className={styles.count}>
                            200+
                        </div>
                        <div className={styles.label}>
                            LeetCode Problems
                        </div>
                    </div>
                    <div className={styles.statBox}>
                        <div className={styles.count}>
                            20+
                        </div>
                        <div className={styles.label}>
                            Number of Projects
                        </div>
                    </div>
                </div>

                <div className={styles.socialMediaContainer}>
                    <a href='https://www.linkedin.com/in/narengavli/' target='_blank' rel="noreferrer">
                        <button className={styles.socialMediaButton}>
                            <LinkdinIcon size={24} />
                        </button>
                    </a>
                    <a href='https://twitter.com/naren_gavli/' target='_blank' rel="noreferrer">
                        <button className={styles.socialMediaButton}>
                            <TwitterIcon size={24} />
                        </button>
                    </a>
                    <a href='https://leetcode.com/narengavli/' target='_blank' rel="noreferrer">
                        <button className={styles.socialMediaButton}>
                            <LeetcodeIcon size={24} />
                        </button>
                    </a>
                    <a href='https://github.com/narengavli/' target='_blank' rel="noreferrer">
                        <button className={styles.socialMediaButton}>
                            <GithubIcon size={24} />
                        </button>
                    </a>
                </div>
            </div>
        </main>
    )
}

export default Home