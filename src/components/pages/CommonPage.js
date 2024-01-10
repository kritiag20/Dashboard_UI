import React from "react";
import { useLocation } from "react-router-dom";
function CommonPage() {
  const location = useLocation();
  const { name } = location?.state;

  return (
    <div className="commonPage">
      <div>{name}</div>
    </div>
  );
}

export default CommonPage;
