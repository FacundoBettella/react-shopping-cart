import React, { useState } from "react";
import { useEffect } from "react";

const withStorageListener = (WrappedComponent) => {

  return function WrappedComponentWithStorageListener(props) {
    
    const [storageChange, setStorageChange] = useState(false);

    useEffect(() => {
      const onChange = (change) => {
        if (change.key === "auth_token") {
          console.log("Hubo cambios en ", change.key);
          setStorageChange(true);
        }
        else if (change.key === "theme") {
          console.log("Hubo cambios en ", change.key);
          setStorageChange(true);
        }
      };

      window.addEventListener("storage", onChange);

      return () => window.removeEventListener("storage", onChange);
    }, []);

    const toggleShow = () => {
      props.sincronize();
      setStorageChange(false);
      window.location.reload();
    };

    return (
      /* ChangeStorageAlert */
      <WrappedComponent show={storageChange} toggleShow={toggleShow} />
    );
  };
};

export { withStorageListener };
