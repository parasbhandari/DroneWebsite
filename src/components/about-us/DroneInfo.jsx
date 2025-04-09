// import DroneInfoImage from "../../assets/home/drones/DroneInfo.png";
import { drone5 } from "../../scripts/Images";
function DroneInfo() {
  return (
    <div className="wrapper ">
      <div className="flex flex-col xl:flex-row justify-between items-center gap-3 sm:gap-5 md:gap-10 lg:gap-20">
        <img src={drone5} className="w-56 h-56 md:w-80 md:h-80 lg:w-96 lg:h-96"/>
        <div>
          <div className="">
            <h2 className="text-xl font-bold">DJI Drone Info</h2>
            <p className="text-sm mt-4 font-[400] leading-5 md:leading-7 lg:text-[18px] text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              tenetur dolor corporis et esse nam eos rem assumenda
              necessitatibus voluptates velit incidunt, quis perspiciatis
              possimus, corrupti praesentium. Ea id eveniet debitis labore
              voluptates aliquid accusantium quam consequuntur provident
              voluptatum ad, asperiores aliquam officia, optio rem harum
              pariatur officiis deleniti culpa.
            </p>
          </div>
          <div>
            <h2 className=" mt-4 text-xl font-bold">
              We Started in <span className="text-[#F26122]">2025</span>
            </h2>
            <p className="text-sm mt-4 font-[400] leading-5 md:leading-7 lg:text-[18px] text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              tenetur dolor corporis et esse nam eos rem assumenda
              necessitatibus voluptates velit incidunt, quis perspiciatis
              possimus, corrupti praesentium. Ea id eveniet{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DroneInfo;
