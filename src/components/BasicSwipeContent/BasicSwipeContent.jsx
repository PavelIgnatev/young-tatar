import React from 'react';

const BasicSwipeContent = ({ label, position }) => (
  <div className={`basic-swipeable-list__item-content-${position}`}>
    <span>{label}</span>
  </div>
);

export default BasicSwipeContent;
