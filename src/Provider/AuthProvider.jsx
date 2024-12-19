import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {  createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
      const [user, setUser] = useState(null);

      const createUser =(email, password)=>{
           return createUserWithEmailAndPassword(auth, email, password)
      }

      const logInUser =(email, password)=>{
            return signInWithEmailAndPassword(auth,email, password)
      }

      const logOut =()=>{
            return signOut(auth)
      }

      // observer
      useEffect(()=>{
          const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
                setUser(currentUser);
                console.log('observer', currentUser)
            });

            return ()=>{
                  unSubscribe();
            }
      },[])

      const authInfo = {
           user,
           createUser,
           logInUser,
           logOut,

      }

      return (
            <AuthContext.Provider value={authInfo}>
                  {children}        
            </AuthContext.Provider>
      );
};

export default AuthProvider;