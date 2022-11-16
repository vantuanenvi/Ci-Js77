import {createContext, useState } from 'react';

export const UserContext = createContext()

function UserContextProvider(props){
    const [isLogin, setIsLogin] = useState(false);
    const [language, setLanguage] = useState('VN');
    const [userName, setUserName] = useState('');

    return (
    <UserContext.Provider
 value={{isLogin,setIsLogin,language,setLanguage,userName,setUserName}}>
            {props.children}
    </UserContext.Provider>
    )
}
export default UserContextProvider

