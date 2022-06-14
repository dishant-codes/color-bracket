import React, { useState } from "react";

export const Context = React.createContext();

function Store({ children }) {
  const [loggedin, setLoggedin] = useState(false);

  return (
    <Context.Provider value={[loggedin, setLoggedin]}>
      {children}
    </Context.Provider>
  );
}

export default Store;
