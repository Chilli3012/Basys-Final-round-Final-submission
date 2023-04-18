import React from "react";

const BarChart1 = ({ value }) => {
  return (
    <div style={{marginLeft:"5px",marginTop: "20px",width:"70%",border: "solid #98b0e3 3px",borderRadius: "10px"}} className="d-flex flex-row">
      <div
        style={{
          borderRadius:"7px",
          width: `${value}%`,
          height: "24px",
          background: "linear-gradient(to right,white, green)",
        //   backgroundColor: "blue",
        }}
        // <span></span>
      />
      {/* <span style={{height:"70%"}}>{(value/100)*300}</span> */}
    </div>
  );
};

export default BarChart1;