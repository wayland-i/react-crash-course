import { createContext, useState } from 'react';

export const UserContext = createContext({
    name: null,
    course: null
});

export function UserContextProvider({children}) {

    const conner = {
        name: 'Conner',
        course: 'FrontendExpert'
    };
    
      const clement = {
        name: 'Clement',
        course: 'AlgoExpert'
    }
    
    
    const [user, setUser] = useState(conner);

    const toggleUser = () => {
      if (user === conner) {
        setUser(clement);
      } else {
        setUser(conner);
      }
    }


    return (
        <UserContext.Provider value={{
            user,
            toggleUser
        }}>
            {children}
        </UserContext.Provider>
    )
}