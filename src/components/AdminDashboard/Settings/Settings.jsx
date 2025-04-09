import React from 'react'
import DashboardHeader from '../../reusable/DashboardHeader'
function Settings() {
  return (
    <div className='flex flex-col justify-start'>
      <DashboardHeader pagename="Settings" />
      <div className='w-[80%] mt-5 ml-[5%] bg-white p-5 '>
        <h3 className='text-xl font-medium pb-8'>Change Password</h3>
        <form action="">
          <div>
            <label htmlFor="" className='font-normal text-lg'>Old Password *</label>
            <input type="password" className='w-full border rounded-sm border-[#4D6E89] outline-none p-1' />
          </div>
          <div className='mt-4'>
            <label htmlFor="" className='font-normal text-lg'>New Password *</label>
            <input type="password" className='w-full border rounded-sm border-[#4D6E89] outline-none p-1' />
          </div>
          <div className='mt-4'>
            <label htmlFor="" className='font-normal text-lg'>Confirm New Password *</label>
            <input type="password" className='w-full border rounded-sm border-[#4D6E89] outline-none p-1' />
          </div>
          <button className='text-lg bg-(--primary-color) p-3 mt-4 text-white rounded-lg'>Update Now</button>
        </form>
      </div>
    </div>
  )
}

export default Settings