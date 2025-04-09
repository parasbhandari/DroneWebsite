import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"

const TeamsCard = ({ imageUrl, name, job }) => {
  return (
    <div className="relative grid h-[24rem] sm:h-[22rem] md:h-[28rem] lg:h-[35rem] w-[260px] sm:w-[230px] md:w-[384px] flex-col items-end justify-start overflow-hidden rounded-sm bg-white group">
      {/* Background Image & Overlay */}
      <div
        className="absolute inset-0 m-0 w-[350px] h-[380px] md:h-full md:w-full overflow-hidden rounded-none bg-cover bg-center transition-all duration-300 ease-in-out group-hover:brightness-50 border-t-4 border-t-(--primary-color)"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="to-bg-black-10 absolute inset-0 w-[350px] h-[380px] md:h-full md:w-full bg-gradient-to-b from-(--primary-color)/30 to-white/80 transition-all duration-300 ease-in-out group-hover:from-white/30 group-hover:to-(--primary-color)/80"></div>
      </div>

      {/* Text & Button */}
      <div className="relative text-start p-6 px-6 py-14 md:px-12 transition-all duration-300 ease-in-out">
        <p className="mb-2 text-xl font-bold text-(--primary-color) group-hover:text-[#F8F5F5]">
          {name}
        </p>
        <h5 className="mb-2 text-3xl font-bold text-(--primary-color) group-hover:text-[#F8F5F5]">
          {job}
        </h5>
        <div className="hidden  group-hover:flex gap-4 transition-all duration-300 ">
          <FaLinkedin size={22} className="text-white cursor-pointer" />
          <FaInstagram size={22} className="text-white cursor-pointer" />
          <FaWhatsapp size={22} className="text-white cursor-pointer" />

        </div>
        {/* <button className="border-2 border-white text-white rounded-2xl px-4 hidden group-hover:block transition-all duration-300">
          Details
        </button> */}
      </div>
    </div>
  )
}
export default TeamsCard