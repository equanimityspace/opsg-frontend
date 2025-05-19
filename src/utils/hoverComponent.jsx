import React, { useState } from 'react';

const HoverComponent = () => {
  const [isHovered, setIsHovered] = useState(false);

  const divStyle = {
    backgroundColor: isHovered ? 'lightblue' : 'white',
    padding: '20px',
    border: '1px solid black',
    cursor: 'pointer',
  };

  return (
    <div
      style={divStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Hover me!
    </div>
  );
};

export default HoverComponent;