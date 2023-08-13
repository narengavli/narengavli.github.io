import { createContext, useContext, useState } from "react";
import ProjectList from "./../data/project-list.json";
import CodingSkills from "./../data/coding-skills.json";
import WebDevSkills from "./../data/web-dev-skills.json";
import PastLearning from "./../data/past-learning.json";
import Interest from "./../data/interest.json";

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [projectlist] = useState(ProjectList);
    const [codingskills] = useState(CodingSkills);
    const [webdevskills] = useState(WebDevSkills);
    const [pastlearning] = useState(PastLearning);
    const [interest] = useState(Interest);
    return (
        <DataContext.Provider value={{ projectlist, codingskills, webdevskills, pastlearning, interest }}>
            {children}
        </DataContext.Provider>
    );
};

// custom hooks
const usePortfolioContext = () => {
    return useContext(DataContext);
};

export { DataProvider, DataContext, usePortfolioContext };
