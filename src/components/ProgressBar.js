import LinearProgress from "@material-ui/core/LinearProgress";
import React from "react";
import '../styles/ProgressBar.css';

const ProgressBar = () => {
    return (
        <div className="progress-container">
            <h4 className="progress-bar-title">Uploading...</h4>
            <div className="progress-bar-container">
                <LinearProgress />
            </div>
        </div>
    );
};

export default ProgressBar;
