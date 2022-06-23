import { useAuth } from 'context'
import React from 'react'
import { Outlet, Navigate, useLocation } from 'react-router-dom'
export function PrivateRoute() {
  const { encodedToken } = useAuth()
  const location = useLocation()
  return encodedToken ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  )
}
