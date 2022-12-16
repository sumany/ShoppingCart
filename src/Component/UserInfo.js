
import React, { useState, useEffect } from "react";

const UserInfo= () => {
  const [hasError, setErrors] = useState(false);
  
  return (
    <div>
      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
  );
};
export default UserInfo;
