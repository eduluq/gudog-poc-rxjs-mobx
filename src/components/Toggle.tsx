import React from "react";

const Toggle = ({ name, title, buttonTitle, onToggle }) => {
  console.log(`Rendering Toggle ${name}`);

  return (
    <div>
      <h2>{title}</h2>
      <button onClick={onToggle}>{buttonTitle}</button>
    </div>
  );
};

export default Toggle;
//export default React.memo(Toggle);
