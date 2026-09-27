import React from "react";
import { Link } from "react-router-dom";

export default function Breadcrumbs({ trail = [] }) {
  if (!trail.length) return null;
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        {trail.map((item, index) => {
          const isLast = index === trail.length - 1;
          return (
            <li key={item.path || item.name}>
              {isLast ? (
                <span aria-current="page">{item.name}</span>
              ) : (
                <>
                  <Link to={item.path}>{item.name}</Link>
                  <span className="sep" aria-hidden="true">
                    /
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
