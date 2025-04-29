import React from 'react';
import { motion } from 'framer-motion';

const ProjectFilter = ({ filters, activeFilter, onFilterChange }) => {
  return (
    <div className="filter-container">
      <div className="filter-wrapper">
        {filters.map((filter, index) => (
          <motion.button
            key={index}
            className={`filter-item ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => onFilterChange(filter)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {filter}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default ProjectFilter;