import React from 'react'
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivateRoutes = ({ children }) => {
    const auth = useSelector(state => state.auth)
    return auth ? children : <Navigate to="/login" />
}