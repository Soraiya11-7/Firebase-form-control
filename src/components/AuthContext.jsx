import React, { createContext } from 'react';
import auth from '../firebase/Firebase.init';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const AuthProviderContext = createContext(null);
const AuthContext = ({children}) => {
const  name = 'habijabi';
const createUser = (email, password ) =>{
    return createUserWithEmailAndPassword(auth, email, password)
}
const authInfo = {
    name,
    createUser
}
    return (
       <AuthProviderContext.Provider value={authInfo}>
          {children}
       </AuthProviderContext.Provider>
    );
};

export default AuthContext;