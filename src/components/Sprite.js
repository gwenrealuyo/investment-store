import React from 'react';

const Sprite = ({
  name,
  spriteSource = '/sprites.svg',
  width,
  height,
  ...props
}) => (
  <svg {...props} width={width} height={height}>
    <use href={`${spriteSource}#${name}`} />
  </svg>
);

export default Sprite;
