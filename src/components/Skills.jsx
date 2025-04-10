import React from "react";

function Skills() {
  return (
    <section>
      <h2>Skills</h2>
      <div>
        <p>Photoshop</p>
        <div className="skill-bar"><div className="skill-level" style={{ width: "90%", backgroundColor: "#f77" }}></div></div>
        <p>Blender</p>
        <div className="skill-bar"><div className="skill-level" style={{ width: "75%", backgroundColor: "#fa4" }}></div></div>
        <p>Lightroom</p>
        <div className="skill-bar"><div className="skill-level" style={{ width: "80%", backgroundColor: "#4af" }}></div></div>
        <p>Premiere</p>
        <div className="skill-bar"><div className="skill-level" style={{ width: "60%", backgroundColor: "#b4f" }}></div></div>
      </div>
    </section>
  );
}

export default Skills;