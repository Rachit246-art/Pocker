import React from 'react';
import './PageHeader.css';

const PageHeader = ({ title, subtitle }) => {
  return (
    <div className="page-header">
      <div className="page-header-content">
        <h1 className="page-title animate-slide-up">{title}</h1>
        {subtitle && <p className="page-subtitle animate-fade-in" style={{animationDelay: '0.2s'}}>{subtitle}</p>}
        <div className="page-header-divider animate-fade-in" style={{animationDelay: '0.4s'}}></div>
      </div>
    </div>
  );
};

export default PageHeader;
