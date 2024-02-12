import {  Routes, Route, Navigate, Link } from 'react-router-dom'
import { HomePage, LoginPage, AboutPage, Navbar } from './'
import { UserProvider } from './context/UserProvider'

export const MainApp = () => {
    return (
        <UserProvider>
            {/* <h1>MainApp</h1> */}
            
            <Navbar />
            <hr />

            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='login' element={<LoginPage/>}/>
                <Route path='about' element={<AboutPage/>}/>
                
                <Route path='/*' element={<Navigate to='/' />}/>
                
            </Routes>

        </UserProvider>
    )
}
