import React from 'react'
import './lastgraph.css'
const ProgressChart = ({progress1,progress2,progress3}) => {
    return (
        <div className="progress-bar-chart-container" style={{height:"100%"}}>
          <div className="progress-bar" style={{ width: `${progress1}%` }}>
            <div className="progress-bar-label">{progress1}%</div>
          </div>
          <div className="progress-bar" style={{ width: `${progress2}%` }}>
            <div className="progress-bar-label">{progress2}%</div>
          </div>
          <div className="progress-bar" style={{ width: `${progress3}%` }}>
            <div className="progress-bar-label">{progress3}%</div>
          </div>
        </div>
    )
}

export default ProgressChart