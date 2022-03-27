import React from 'react'
import {useContext, useState, createContext} from 'react';
import { getStaticProps } from '../pages';

const userContext = createContext();

export default function ContextProvider({children}) {
    const [userInfo, setUserInfo] = useState({loaded: false})

    function updateUserInfo(newInfo) {
        setUserInfo(userInfo => ({...userInfo, ...newInfo}))
    }
    return (
        <userContext.Provider value={{userInfo, updateUserInfo}}>
            {children}
        </userContext.Provider>
    )
}

export function useUserContext() {
    return useContext(userContext);
}