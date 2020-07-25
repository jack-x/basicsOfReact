import React from 'react';

const authContext = React.createContext({authenticated: false,
login: () => {

} //end of login function
 });

export default authContext;