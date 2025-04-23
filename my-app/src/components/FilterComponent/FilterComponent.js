import React, { useState } from 'react';
import './FilterComponent.css';

const FilterComponent = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div className="filter-container">
      <div className="filter-row">
        <div className="filter-label">Lọc theo loại:</div>
        <div className="filter-options">
          <button className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`} onClick={() => handleFilterClick('all')}>Tất Cả</button>
          <button className={`filter-btn ${activeFilter === 'custom' ? 'active' : ''}`} onClick={() => handleFilterClick('custom')}>Tùy Chỉnh</button>
          <button className={`filter-btn ${activeFilter === 'performance' ? 'active' : ''}`} onClick={() => handleFilterClick('performance')}>Hiệu Suất</button>
          <button className={`filter-btn ${activeFilter === 'security' ? 'active' : ''}`} onClick={() => handleFilterClick('security')}>Bảo Mật</button>
          <button className={`filter-btn ${activeFilter === 'features' ? 'active' : ''}`} onClick={() => handleFilterClick('features')}>Năng Suất</button>
          <button className={`filter-btn ${activeFilter === 'privacy' ? 'active' : ''}`} onClick={() => handleFilterClick('privacy')}>An Toàn</button>
          <button className={`filter-btn ${activeFilter === 'search' ? 'active' : ''}`} onClick={() => handleFilterClick('search')}>Tìm Kiếm</button>
          <button className={`filter-btn ${activeFilter === 'mobile' ? 'active' : ''}`} onClick={() => handleFilterClick('mobile')}>Di Động</button>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
