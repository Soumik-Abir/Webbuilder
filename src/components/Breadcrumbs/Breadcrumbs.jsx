import React, { useState } from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ paths }) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleBreadcrumbClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex items-center space-x-2 text-gray-500 overflow-x-auto">
      {paths.map((path, index) => (
        <React.Fragment key={index}>
          <Link
            to={path.url}
            onClick={() => handleBreadcrumbClick(index)}
            className={activeIndex === index ? "active" : ""}
          >
            {path.label}
          </Link>
          {index !== paths.length - 1 && <span> &gt; </span>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumbs;
