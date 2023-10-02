import React from 'react';
import './RightSidebar.css';

export default function RightSidebar() {
  const communities = [
    { name: 'r/explainlikeimfive', members: Math.floor(Math.random() * 10000) },
    { name: 'r/IAmA', members: Math.floor(Math.random() * 10000) },
    { name: 'r/classicwow', members: Math.floor(Math.random() * 10000) },
    { name: 'r/Instagram', members: Math.floor(Math.random() * 10000) },
    { name: 'r/NintendoSwitch', members: Math.floor(Math.random() * 10000) },
  ];

  return (
    <div className="RightSidebar">
      <ul className="RightSidebar__menu">
        <h2 className="popular_com">Popular communities</h2>
        <hr />
        {communities.map((community, index) => (
          <li key={index} className="community-item">
            <span className="community-name">{community.name}</span>
            <span className="member-count">{`${community.members} members`}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

