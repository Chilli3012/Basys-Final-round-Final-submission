import React from "react";

const HorizontalBarChart = ({ value }) => {
  return (
    <div style={{marginLeft:"5px",marginTop: "20px",width:"80%",border: "solid #98b0e3 3px",borderRadius: "10px"}} className="d-flex flex-row">
      <div
        style={{
          borderRadius:"7px",
          width: `${value}%`,
          height: "24px",
          background: "linear-gradient(to right,white, #010151)",
        //   backgroundColor: "blue",
        }}
        // <span></span>
      />
      <span style={{height:"70%"}}>{(value/100)*300}</span>
    </div>
  );
};

export default HorizontalBarChart;