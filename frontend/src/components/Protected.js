import React from 'react'
import { Navigate } from 'react-router-dom'
function Protected({ isSignedIn,role, matchrole,children }) {
  if (!isSignedIn || role !== matchrole) {
    return <Navigate to="/" replace />
  }
  return children
}
export default Protected