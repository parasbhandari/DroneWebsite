import React from 'react'
import Sidebar from '../components/AdminDashboard/Sidebar'
import { Outlet } from 'react-router-dom'
function AdminLayout() {
  return (
    <div className='flex '>
      <Sidebar />
      <div className="flex-1  min-w-0 max-w-full">
        <Outlet />
      </div>
    </div>
  )
}

export default AdminLayout