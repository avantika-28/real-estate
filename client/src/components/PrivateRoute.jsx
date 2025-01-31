import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

export default function PrivateRoute() {
  const {curentUser} = useSelector(state=>state.user)
  return curentUser ? <Outlet/> : <Navigate to="/sign-in"/>
}
