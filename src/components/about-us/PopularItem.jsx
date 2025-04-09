import React from 'react'
import PopularItem1 from "../../assets/home/PopularItems/PopularItem1.png"
import PopularItem2 from "../../assets/home/PopularItems/PopularItem2.png"
import PopularItem3 from "../../assets/home/PopularItems/PopularItem3.png"
function PopularItem() {
  const Items = [PopularItem1, PopularItem2, PopularItem3];
  return (
    <div className='wrapper'>
      <div className="mt-10 md:mt-20 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <hr className="border-2 border-[#F26122] mr-3 w-8" />

          <p className="text-[#F26122]">Our</p>
          <hr className="border-2 border-[#F26122] ml-3 w-8" />
        </div>

        <h2 className="text-[30px] md:text-[40px] lg:text-[56px] font-bold text-(--primary-color)">
          Popular Items
        </h2>
      </div>
      <div className='flex flex-row flex-wrap mt-10 justify-center' >
        {Items.map((item, index) => (
          <img src={item} alt="" key={index} className="w-[200px] h-[200px] lg:w-[385px] lg:h-[392px]" />
        ))}
      </div>
    </div>
  )
}

export default PopularItem