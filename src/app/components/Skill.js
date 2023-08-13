import React from 'react';

const Skill = ({ item }) => {
    return (
        <>
            {item.map((Val) => (
                <div className="mb-3" key={Val.name}>
                    <div>{Val.name}</div>
                    <div className="progress bg-white border">
                        <div
                            className="progress-bar"
                            style={{ width: Val.percentage }}
                            role="progressbar"
                            aria-valuenow={Val.percentage}
                            aria-valuemin="0"
                            aria-valuemax="100"
                        />
                    </div>
                </div>
            ))}
        </>
    );
};

export default Skill;
