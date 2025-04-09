import React from 'react'
import { SiNintendogamecube } from "react-icons/si";
import { FaCube } from "react-icons/fa";
import { AiOutlineStock } from "react-icons/ai";
import DashboardHeader from '../../reusable/DashboardHeader';
import InfoCard from './InfoCard';
import ClassCard from './ClassCard';
import StepAreaChart from './StepAreaChart';
function Dashboard() {
  const InfoCards = [
    {
      icon: () => <SiNintendogamecube />, // Wrapped in a function
      value: "5483",
      label: "Total Stocks"
    },
    {
      icon: () => <FaCube />,
      value: "5483",
      label: "Orders"
    },
    {
      icon: () => <AiOutlineStock />,
      value: "5483",
      label: "Available Drones"
    }
  ];
  return (
   <>
    <DashboardHeader pagename="Dashboard"/>
    <div className='wrapper'>
    <div className='p-4 flex flex-wrap gap-2 sm:flex-row md:flex-nowrap justify-around md:justify-start mt-4 ml-2' >
      {InfoCards.map((card,index)=>(
        <InfoCard key={index} icon={card.icon} value={card.value} label={card.label}/>
      ))}
    </div>
    <div className='mt-10 flex flex-wrap gap-2 lg:flex-nowrap justify-start ml-2 pl-4'>
    <ClassCard classStatus="Ongoing Classes" classTime="Jan 20 - May 30" classNumber="6 Classes"/>
    <ClassCard classStatus="Upcoming Classes" classTime="July 10 - Dec 30 " classNumber="6 Classes"/>
    </div>
    <div className='mt-10 pl-4'>
    <StepAreaChart/>
    </div>
    </div>

  
   </>
    
  )
}

export default Dashboard