import React from "react";

function SkillCard(props) {
  const { icon, title, about } = props.skill;
  return (
    <div className="col-lg-6">
      <div className="skill-card">
        <img src={icon} alt="icon" className="skill-card__icon" />
        <div className="skill-card-body">
          <h6 className="skill-card-title">{title}</h6>
          <p className="skill-card-content">{about}</p>
        </div>
      </div>
    </div>
  );
}

export default SkillCard;
