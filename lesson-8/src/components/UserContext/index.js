import {createContext } from 'react';

const defaultValue = {user: 'Login'}
const UserContext = createContext(defaultValue)

export default UserContext