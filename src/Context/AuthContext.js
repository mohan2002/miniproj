import React, {useEffect,useContext, useState } from 'react'
import { auth } from '../firebase/firebase'


const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}
export default function AuthProvider({children}) {
    const [currentUser,setCurrentUser] = useState()
    const[loading,setLoading] = useState(true)

    function login(email,password){
        return auth.signInWithEmailAndPassword(email,password)
    }
    function signup(email,password){
        return auth.createUserWithEmailAndPassword(email,password)
    }
    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }
    function logout(){
        return auth.signOut()
    }
    const value = {
        currentUser,
        login,
        signup,
        resetPassword,
        logout,
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    },[])
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
